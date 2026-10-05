import { INITIAL_DATA } from './data.js';

const STORAGE_KEY = 'BALE_MANAGEMENT_DATA_V1';

class Store {
  constructor() {
    this.listeners = new Set();
    this.data = this.load();
    this.runFermentationDailyCheck();
  }

  load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
    this.notify();
  }

  resetToDefault() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.save();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    for (const listener of this.listeners) {
      listener(this.data);
    }
  }

  // --- Date and Time Helpers ---
  getCurrentDate() {
    return this.data.settings.currentDate || '2026-10-05';
  }

  setCurrentDate(dateStr) {
    this.data.settings.currentDate = dateStr;
    this.runFermentationDailyCheck();
    this.save();
  }

  formatDate(dateStr) {
    if (!dateStr) return '--';
    // Accepts YYYY-MM-DD or DD-MM-YYYY
    if (dateStr.includes('-') && dateStr.split('-')[0].length === 4) {
      const [y, m, d] = dateStr.split('-');
      return `${d}-${m}-${y}`;
    }
    return dateStr;
  }

  // Format Indian Lakhs / Crores Currency
  formatINR(val, compact = false) {
    if (val === undefined || val === null || isNaN(val)) return '₹ 0';
    const num = Math.round(Number(val));
    if (compact && Math.abs(num) >= 100000) {
      const inLakhs = (num / 100000).toFixed(2);
      return `₹ ${inLakhs.replace(/\.00$/, '')} L`;
    }
    const isNegative = num < 0;
    const absStr = Math.abs(num).toString();
    let result = '';
    
    if (absStr.length > 3) {
      const lastThree = absStr.substring(absStr.length - 3);
      const remaining = absStr.substring(0, absStr.length - 3);
      result = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    } else {
      result = absStr;
    }
    return `${isNegative ? '-' : ''}₹ ${result}`;
  }

  formatNumber(val) {
    if (val === undefined || val === null || isNaN(val)) return '0';
    const num = Math.round(Number(val));
    const absStr = Math.abs(num).toString();
    if (absStr.length > 3) {
      const lastThree = absStr.substring(absStr.length - 3);
      const remaining = absStr.substring(0, absStr.length - 3);
      return (num < 0 ? '-' : '') + remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;
    }
    return (num < 0 ? '-' : '') + absStr;
  }

  // Parse difference in days
  getDaysDifference(fromDateStr, toDateStr) {
    try {
      const d1 = new Date(fromDateStr);
      const d2 = new Date(toDateStr);
      const diffTime = d2.getTime() - d1.getTime();
      return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    } catch {
      return 0;
    }
  }

  addDays(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + Number(days));
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  // Fermentation logic: automatic transition to 'Ready' on day >= fermentationDays
  runFermentationDailyCheck() {
    const today = this.getCurrentDate();
    const duration = this.data.settings.fermentationDays || 30;

    this.data.plots.forEach(plot => {
      if (plot.status === 'Fermenting' && plot.fermStart) {
        const daysPassed = this.getDaysDifference(plot.fermStart, today);
        if (daysPassed >= duration) {
          plot.status = 'Ready';
        }
      }
    });

    this.data.batches.forEach(batch => {
      if (batch.status === 'Fermenting' && batch.fermentationStart) {
        const daysPassed = this.getDaysDifference(batch.fermentationStart, today);
        if (daysPassed >= duration) {
          batch.status = 'Ready';
        }
      }
    });
  }

  // Active Role and Permissions
  getRole() {
    return this.data.settings.activeRole || 'Owner';
  }

  setRole(newRole) {
    this.data.settings.activeRole = newRole;
    this.save();
  }

  canViewFinancials() {
    return this.getRole() !== 'Staff';
  }

  canEditFinancials() {
    return this.getRole() === 'Owner' || this.getRole() === 'Accountant';
  }

  canDelete() {
    return this.getRole() === 'Owner' || this.getRole() === 'Accountant';
  }

  canManageUsers() {
    return this.getRole() === 'Owner';
  }

  // --- Aggregations & Dashboard KPIs ---
  getDashboardMetrics(selectedMonth = '2026-10') {
    const role = this.getRole();
    const today = this.getCurrentDate();

    // 1. Ready for sale bales count
    const readyBales = this.data.plots
      .filter(p => p.status === 'Ready')
      .reduce((sum, p) => sum + (Number(p.bales) || 0), 0);

    // 2. Fermenting bales count
    const fermentingBales = this.data.plots
      .filter(p => p.status === 'Fermenting')
      .reduce((sum, p) => sum + (Number(p.bales) || 0), 0);

    // 3. Customer dues (Customers owe you)
    const customerDues = this.data.sales
      .reduce((sum, s) => sum + (Number(s.balancePending) || 0), 0);

    // 4. Supplier dues (You owe suppliers)
    const supplierDues = this.data.purchases
      .reduce((sum, p) => sum + (Number(p.balancePending) || 0), 0);

    // 5. Month Sales
    const monthSales = this.data.sales
      .filter(s => (s.date || '').startsWith(selectedMonth))
      .reduce((sum, s) => sum + (Number(s.invoiceTotal) || 0), 0);

    // 6. Month COGS
    const monthCOGS = this.data.sales
      .filter(s => (s.date || '').startsWith(selectedMonth))
      .reduce((sum, s) => sum + (Number(s.cogsTotal) || (s.balesCount * 218)), 0);

    // 7. Month Expenses
    const monthExpenses = this.data.expenses
      .filter(e => (e.date || '').startsWith(selectedMonth))
      .reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

    // 8. Month Profit (Gross Profit - Expenses)
    const grossProfit = monthSales - monthCOGS;
    const netProfit = grossProfit - monthExpenses;

    // 9. Stock by stage count
    const rawMaterialKg = this.data.rawMaterial.stockKg || 42500;
    // Estimate bales equivalent for raw material (approx 28kg per bale)
    const rawMaterialBalesEquiv = Math.round(rawMaterialKg / 28);
    const monthSoldBales = this.data.sales
      .filter(s => (s.date || '').startsWith(selectedMonth))
      .reduce((sum, s) => sum + (Number(s.balesCount) || 0), 0);

    // 10. Batches becoming ready soon
    const duration = this.data.settings.fermentationDays || 30;
    const batchesReadySoon = this.data.plots
      .filter(p => p.status === 'Fermenting' && p.fermStart)
      .map(p => {
        const daysPassed = Math.max(0, this.getDaysDifference(p.fermStart, today));
        const daysLeft = Math.max(0, duration - daysPassed);
        return {
          plot: p.id,
          batch: p.batchNumber,
          bales: p.bales,
          daysLeft,
          daysPassed,
          readyDate: this.addDays(p.fermStart, duration)
        };
      })
      .sort((a, b) => a.daysLeft - b.daysLeft)
      .slice(0, 6);

    // 11. Upcoming payments in next 7 days
    const upcomingPayments = this.getUpcomingPayments();

    return {
      role,
      readyBales,
      fermentingBales,
      customerDues,
      supplierDues,
      monthSales,
      monthCOGS,
      monthExpenses,
      grossProfit,
      netProfit,
      rawMaterialKg,
      rawMaterialBalesEquiv,
      monthSoldBales,
      batchesReadySoon,
      upcomingPayments
    };
  }

  getUpcomingPayments() {
    const today = new Date(this.getCurrentDate());
    const list = [];

    // Pending from customers
    this.data.sales.forEach(sale => {
      if (sale.balancePending > 0 && sale.dueDate) {
        const due = new Date(sale.dueDate);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        const isOverdue = diffDays < 0;
        list.push({
          who: sale.customerName,
          type: 'Receive',
          amount: sale.balancePending,
          dueDate: sale.dueDate,
          dueFormatted: this.formatDate(sale.dueDate),
          diffDays,
          isOverdue,
          refId: sale.id,
          entityType: 'sale'
        });
      }
    });

    // Pending to suppliers
    this.data.purchases.forEach(pur => {
      if (pur.balancePending > 0 && pur.dueDate) {
        const due = new Date(pur.dueDate);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        const isOverdue = diffDays < 0;
        list.push({
          who: pur.supplierName,
          type: 'Pay',
          amount: pur.balancePending,
          dueDate: pur.dueDate,
          dueFormatted: this.formatDate(pur.dueDate),
          diffDays,
          isOverdue,
          refId: pur.id,
          entityType: 'purchase'
        });
      }
    });

    return list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  }

  // --- Purchase Actions ---
  addPurchase(purchaseData) {
    const id = 'pur-' + Date.now();
    const qty = Number(purchaseData.quantity) || 0;
    const rate = Number(purchaseData.rate) || 0;
    const materialCost = qty * rate;
    const transport = Number(purchaseData.transport) || 0;
    const loading = Number(purchaseData.loading) || 0;
    const commission = Number(purchaseData.commission) || 0;
    const other = Number(purchaseData.other) || 0;
    const gstRate = Number(purchaseData.gstRate) || 0;
    
    const subtotal = materialCost + transport + loading + commission + other;
    const gstAmount = Math.round((subtotal * gstRate) / 100);
    const actualCost = subtotal + gstAmount;

    const amountPaid = Number(purchaseData.amountPaid) || 0;
    const balancePending = Math.max(0, actualCost - amountPaid);

    // Rate comparison with previous buy of same material
    const previousBuys = this.data.purchases.filter(p => p.material.toLowerCase() === purchaseData.material.toLowerCase());
    let rateVsLastBuy = 'neutral';
    let rateDifference = 0;
    if (previousBuys.length > 0) {
      const lastBuy = previousBuys[0];
      rateDifference = rate - lastBuy.rate;
      if (rateDifference > 0) rateVsLastBuy = 'up';
      else if (rateDifference < 0) rateVsLastBuy = 'down';
    }

    const newPurchase = {
      id,
      supplierId: purchaseData.supplierId || 'sup-custom',
      supplierName: purchaseData.supplierName,
      date: purchaseData.date || this.getCurrentDate(),
      invoiceNo: purchaseData.invoiceNo,
      material: purchaseData.material,
      quantity: qty,
      unit: purchaseData.unit,
      rate,
      materialCost,
      transport,
      loading,
      commission,
      other,
      gstRate,
      gstAmount,
      actualCost,
      amountPaid,
      balancePending,
      paymentMode: purchaseData.paymentMode,
      dueDate: purchaseData.dueDate,
      rateVsLastBuy,
      rateDifference,
      attachment: purchaseData.attachment || null
    };

    this.data.purchases.unshift(newPurchase);

    // Update Raw Material Stock (convert tons/loads to kg if needed)
    let kgToAdd = qty;
    if (purchaseData.unit === 'ton') kgToAdd = qty * 1000;
    else if (purchaseData.unit === 'load') kgToAdd = qty * 5000;
    else if (purchaseData.unit === 'bale') kgToAdd = qty * 28;
    this.data.rawMaterial.stockKg = (this.data.rawMaterial.stockKg || 0) + kgToAdd;

    // Update Supplier Balance
    let supplier = this.data.suppliers.find(s => s.name.toLowerCase() === purchaseData.supplierName.toLowerCase());
    if (supplier) {
      supplier.totalPurchased += actualCost;
      supplier.totalPaid += amountPaid;
      supplier.balancePending += balancePending;
    } else {
      this.data.suppliers.push({
        id: 'sup-' + Date.now(),
        name: purchaseData.supplierName,
        phone: purchaseData.phone || '',
        city: 'Local',
        totalPurchased: actualCost,
        totalPaid: amountPaid,
        balancePending: balancePending
      });
    }

    this.save();
    return newPurchase;
  }

  // --- Production Batch Actions ---
  generateBatchNumber() {
    const date = new Date(this.getCurrentDate());
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const existingThisMonth = this.data.batches.filter(b => b.batchNumber.startsWith(`HB-${y}-${m}`)).length;
    const seq = String(existingThisMonth + 1).padStart(3, '0');
    return `HB-${y}-${m}-${seq}`;
  }

  addBatch(batchInput) {
    const id = 'batch-' + Date.now();
    const rawMaterialKg = Number(batchInput.rawMaterialKg) || 0;
    const rawMaterialCost = Number(batchInput.rawMaterialCost) || 0;
    const labourCost = Number(batchInput.labourCost) || 0;
    const wrappingCost = Number(batchInput.wrappingCost) || 0;
    const machineryCost = Number(batchInput.machineryCost) || 0;
    const otherCost = Number(batchInput.otherCost) || 0;
    const finishedBales = Number(batchInput.finishedBales) || 1;

    const totalProductionCost = rawMaterialCost + labourCost + wrappingCost + machineryCost + otherCost;
    const costPerBale = Math.round(totalProductionCost / finishedBales);
    const rawMaterialPerBale = Math.round(rawMaterialCost / finishedBales);
    const labourPerBale = Math.round(labourCost / finishedBales);
    const otherPerBale = Math.round((wrappingCost + machineryCost + otherCost) / finishedBales);

    const fermStart = batchInput.fermentationStart || this.getCurrentDate();
    const readyDate = this.addDays(fermStart, this.data.settings.fermentationDays || 30);

    const newBatch = {
      id,
      batchNumber: batchInput.batchNumber || this.generateBatchNumber(),
      productionDate: batchInput.productionDate || this.getCurrentDate(),
      rawMaterialKg,
      rawMaterialCost,
      labourCost,
      wrappingCost,
      machineryCost,
      otherCost,
      totalProductionCost,
      finishedBales,
      costPerBale,
      rawMaterialPerBale,
      labourPerBale,
      otherPerBale,
      plotAssigned: batchInput.plotAssigned,
      fermentationStart: fermStart,
      readyDate,
      status: 'Fermenting'
    };

    this.data.batches.unshift(newBatch);

    // Deduct raw material stock
    this.data.rawMaterial.stockKg = Math.max(0, (this.data.rawMaterial.stockKg || 0) - rawMaterialKg);

    // Occupy plot & start fermentation
    const plot = this.data.plots.find(p => p.id === batchInput.plotAssigned);
    if (plot) {
      plot.bales = finishedBales;
      plot.batchId = id;
      plot.batchNumber = newBatch.batchNumber;
      plot.prodDate = newBatch.productionDate;
      plot.fermStart = fermStart;
      plot.costPerBale = costPerBale;
      plot.status = 'Fermenting';
    }

    this.save();
    return newBatch;
  }

  // --- Plot Management ---
  updatePlotStock(plotId, newBales, newStatus = null) {
    const plot = this.data.plots.find(p => p.id === plotId);
    if (!plot) return;
    plot.bales = Math.max(0, Number(newBales));
    if (plot.bales === 0) {
      plot.status = 'Empty';
      plot.batchId = null;
      plot.batchNumber = '';
      plot.fermStart = '';
    } else if (newStatus) {
      plot.status = newStatus;
    }
    this.save();
  }

  addPlot(plotId, section = 'C') {
    if (this.data.plots.some(p => p.id === plotId)) {
      throw new Error(`Plot ${plotId} already exists`);
    }
    this.data.plots.push({
      id: plotId,
      section,
      bales: 0,
      batchId: null,
      batchNumber: '',
      prodDate: '',
      fermStart: '',
      costPerBale: 0,
      status: 'Empty'
    });
    this.save();
  }

  // --- Sales & Invoice Actions ---
  addSale(saleData) {
    const id = 'inv-' + Date.now();
    const invoiceNumber = saleData.invoiceNumber || `INV-${String(this.data.sales.length + 43).padStart(4, '0')}`;
    const balesCount = Number(saleData.balesCount) || 0;
    const ratePerBale = Number(saleData.ratePerBale) || 0;
    const subtotal = balesCount * ratePerBale;
    const gstRate = Number(saleData.gstRate) || 0;
    const gstAmount = Math.round((subtotal * gstRate) / 100);
    const invoiceTotal = subtotal + gstAmount;

    const amountPaid = Number(saleData.amountPaid) || 0;
    const balancePending = Math.max(0, invoiceTotal - amountPaid);

    // Calculate COGS and reduce plot stock
    let cogsTotal = 0;
    const stockAllocations = [];

    if (saleData.allocations && saleData.allocations.length > 0) {
      saleData.allocations.forEach(alloc => {
        const plot = this.data.plots.find(p => p.id === alloc.plotId);
        if (plot) {
          const qtyFromPlot = Math.min(plot.bales, Number(alloc.bales));
          plot.bales -= qtyFromPlot;
          const cost = plot.costPerBale || 218;
          cogsTotal += qtyFromPlot * cost;
          stockAllocations.push({
            plotId: plot.id,
            batchNumber: plot.batchNumber,
            bales: qtyFromPlot,
            costPerBale: cost
          });

          if (plot.bales <= 0) {
            plot.status = 'Empty';
            plot.batchId = null;
            plot.batchNumber = '';
            plot.fermStart = '';
          }
        }
      });
    } else {
      // Fallback: estimate COGS from default
      cogsTotal = balesCount * 218;
    }

    const paymentHistory = [];
    if (amountPaid > 0) {
      paymentHistory.push({
        id: 'pay-' + Date.now(),
        date: this.formatDate(saleData.date || this.getCurrentDate()),
        mode: saleData.paymentMode || 'UPI',
        amountPaid: amountPaid,
        balanceAfter: balancePending,
        note: saleData.paymentNote || 'Advance payment at sale'
      });
    }

    const newSale = {
      id,
      invoiceNumber,
      customerId: saleData.customerId,
      customerName: saleData.customerName,
      date: saleData.date || this.getCurrentDate(),
      dueDate: saleData.dueDate,
      balesCount,
      ratePerBale,
      subtotal,
      gstRate,
      gstAmount,
      invoiceTotal,
      cogsTotal,
      amountPaid,
      balancePending,
      status: balancePending === 0 ? 'Paid' : amountPaid > 0 ? 'Partially Paid' : 'Pending',
      stockAllocations,
      paymentHistory
    };

    this.data.sales.unshift(newSale);

    // Update Customer profile balance
    let customer = this.data.customers.find(c => c.id === saleData.customerId || c.name.toLowerCase() === saleData.customerName.toLowerCase());
    if (customer) {
      customer.totalPurchased += invoiceTotal;
      customer.totalPaid += amountPaid;
      customer.balancePending += balancePending;
      customer.lastPurchaseDate = this.formatDate(saleData.date || this.getCurrentDate());
    } else {
      this.data.customers.push({
        id: 'cust-' + Date.now(),
        name: saleData.customerName,
        phone: saleData.phone || '',
        address: saleData.address || '',
        gstNumber: saleData.gstNumber || '',
        creditLimit: 300000,
        totalPurchased: invoiceTotal,
        totalPaid: amountPaid,
        balancePending: balancePending,
        lastPurchaseDate: this.formatDate(saleData.date || this.getCurrentDate())
      });
    }

    this.save();
    return newSale;
  }

  // Append-only payment for sales invoices
  addSalePayment(saleId, paymentInput) {
    const sale = this.data.sales.find(s => s.id === saleId);
    if (!sale) return;

    const amount = Number(paymentInput.amountPaid) || 0;
    const newPending = Math.max(0, sale.balancePending - amount);
    sale.amountPaid += amount;
    sale.balancePending = newPending;
    sale.status = newPending === 0 ? 'Paid' : 'Partially Paid';

    sale.paymentHistory.push({
      id: 'pay-' + Date.now(),
      date: paymentInput.date || this.formatDate(this.getCurrentDate()),
      mode: paymentInput.mode || 'Cash',
      amountPaid: amount,
      balanceAfter: newPending,
      note: paymentInput.note || 'Part payment'
    });

    // Update customer's pending
    const customer = this.data.customers.find(c => c.name.toLowerCase() === sale.customerName.toLowerCase());
    if (customer) {
      customer.totalPaid += amount;
      customer.balancePending = Math.max(0, customer.balancePending - amount);
    }

    this.save();
  }

  // --- Expenses Actions ---
  addExpense(expenseInput) {
    const id = 'exp-' + Date.now();
    const newExp = {
      id,
      date: expenseInput.date || this.getCurrentDate(),
      paidTo: expenseInput.paidTo,
      reason: expenseInput.reason,
      amount: Number(expenseInput.amount) || 0,
      category: expenseInput.category,
      mode: expenseInput.mode || 'Cash',
      relatedBatch: expenseInput.relatedBatch || '',
      attachment: expenseInput.attachment || null
    };

    this.data.expenses.unshift(newExp);
    this.save();
    return newExp;
  }

  // Delete records (Owner and Accountant only)
  deleteRecord(entityType, id) {
    if (!this.canDelete()) {
      alert('Access Denied: Only Owner and Accountant can delete records.');
      return false;
    }
    if (entityType === 'expense') {
      this.data.expenses = this.data.expenses.filter(e => e.id !== id);
    } else if (entityType === 'purchase') {
      this.data.purchases = this.data.purchases.filter(p => p.id !== id);
    } else if (entityType === 'sale') {
      this.data.sales = this.data.sales.filter(s => s.id !== id);
    }
    this.save();
    return true;
  }
}

export const store = new Store();
