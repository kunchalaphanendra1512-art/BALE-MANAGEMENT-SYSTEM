// Initial seed data reflecting the exact wireframe numbers and context from Bale Management Software PRD

export const INITIAL_DATA = {
  settings: {
    fermentationDays: 30,
    currencySymbol: 'INR',
    companyName: 'Sri Balaji Agro Bales',
    gstin: '36AAAAA0000A1Z5',
    phone: '+91 98765 43210',
    address: 'Plot 45, Industrial Area, Warangal, Telangana - 506001',
    currentDate: '2026-10-05',
    activeRole: 'Owner' // 'Owner' | 'Accountant' | 'Staff'
  },
  
  rawMaterial: {
    stockKg: 42500, // available raw material in stock
    averageCostPerKg: 4.80
  },

  suppliers: [
    {
      id: 'sup-1',
      name: 'K. Rao Traders',
      phone: '+91 94401 23456',
      city: 'Khammam',
      totalPurchased: 580000,
      totalPaid: 493000,
      balancePending: 87000
    },
    {
      id: 'sup-2',
      name: 'Supplier K. Rao',
      phone: '+91 98480 11223',
      city: 'Nalgonda',
      totalPurchased: 245000,
      totalPaid: 190000,
      balancePending: 55000
    },
    {
      id: 'sup-3',
      name: 'Krishna Biomass Depot',
      phone: '+91 91234 56789',
      city: 'Miryalaguda',
      totalPurchased: 310000,
      totalPaid: 260000,
      balancePending: 50000
    }
  ],

  customers: [
    {
      id: 'cust-1',
      name: 'Sri Hay Traders',
      phone: '+91 98850 99887',
      address: 'Shop 14, Grain Market, Hyderabad',
      gstNumber: '36ABCDE1234F1Z8',
      creditLimit: 300000,
      totalPurchased: 1250000,
      totalPaid: 1100000,
      balancePending: 150000,
      lastPurchaseDate: '10-10-2026'
    },
    {
      id: 'cust-2',
      name: 'Ravi Farms',
      phone: '+91 97000 44556',
      address: 'Dairy Complex Road, Karimnagar',
      gstNumber: '36FGHIJ5678K1Z2',
      creditLimit: 250000,
      totalPurchased: 840000,
      totalPaid: 730000,
      balancePending: 110000,
      lastPurchaseDate: '28-09-2026'
    },
    {
      id: 'cust-3',
      name: 'Deccan Agro Exports',
      phone: '+91 99490 88776',
      address: 'Dry Port Hub, Secunderabad',
      gstNumber: '36KLMNO9012P1Z4',
      creditLimit: 500000,
      totalPurchased: 1600000,
      totalPaid: 1375000,
      balancePending: 225000,
      lastPurchaseDate: '01-10-2026'
    }
  ],

  purchases: [
    {
      id: 'pur-1',
      supplierId: 'sup-1',
      supplierName: 'K. Rao Traders',
      date: '2026-10-03',
      invoiceNo: 'KR-4471',
      material: 'Hay (loose)',
      quantity: 30,
      unit: 'ton',
      rate: 4000,
      materialCost: 120000,
      transport: 12000,
      loading: 2000,
      commission: 3000,
      other: 0,
      gstRate: 0,
      gstAmount: 0,
      actualCost: 137000,
      amountPaid: 50000,
      balancePending: 87000,
      paymentMode: 'UPI',
      dueDate: '2026-10-30',
      rateVsLastBuy: 'neutral', // 'up' | 'down' | 'neutral'
      rateDifference: 0,
      attachment: {
        name: 'bill_kr4471.pdf',
        type: 'pdf',
        date: '03-10-2026'
      }
    },
    {
      id: 'pur-2',
      supplierId: 'sup-2',
      supplierName: 'Supplier K. Rao',
      date: '2026-09-24',
      invoiceNo: 'SKR-889',
      material: 'Hay (loose)',
      quantity: 25,
      unit: 'ton',
      rate: 3900,
      materialCost: 97500,
      transport: 10000,
      loading: 1500,
      commission: 2000,
      other: 0,
      gstRate: 0,
      gstAmount: 0,
      actualCost: 111000,
      amountPaid: 56000,
      balancePending: 55000,
      paymentMode: 'Bank Transfer',
      dueDate: '2026-10-08',
      rateVsLastBuy: 'down',
      rateDifference: -100,
      attachment: {
        name: 'bill_skr889.jpg',
        type: 'image',
        date: '24-09-2026'
      }
    }
  ],

  batches: [
    {
      id: 'batch-1',
      batchNumber: 'HB-2026-08-007',
      productionDate: '2026-08-15',
      rawMaterialKg: 28000,
      rawMaterialCost: 190000,
      labourCost: 17500,
      wrappingCost: 11500,
      machineryCost: 8500,
      otherCost: 3500,
      totalProductionCost: 231000,
      finishedBales: 1060,
      costPerBale: 218,
      rawMaterialPerBale: 179,
      labourPerBale: 16.5,
      otherPerBale: 22.5,
      plotAssigned: 'A1',
      fermentationStart: '2026-08-15',
      readyDate: '2026-09-14',
      status: 'Ready' // All 30 days completed in September
    },
    {
      id: 'batch-2',
      batchNumber: 'HB-2026-09-014',
      productionDate: '2026-09-17',
      rawMaterialKg: 24000,
      rawMaterialCost: 165000,
      labourCost: 15000,
      wrappingCost: 10000,
      machineryCost: 7500,
      otherCost: 3500,
      totalProductionCost: 201000,
      finishedBales: 920,
      costPerBale: 218,
      rawMaterialPerBale: 179,
      labourPerBale: 16,
      otherPerBale: 23,
      plotAssigned: 'A12',
      fermentationStart: '2026-09-17',
      readyDate: '2026-10-17', // 12 days left from Oct 5
      status: 'Fermenting'
    },
    {
      id: 'batch-3',
      batchNumber: 'HB-2026-09-016',
      productionDate: '2026-09-19',
      rawMaterialKg: 25000,
      rawMaterialCost: 172000,
      labourCost: 16000,
      wrappingCost: 11000,
      machineryCost: 8000,
      otherCost: 3000,
      totalProductionCost: 210000,
      finishedBales: 950,
      costPerBale: 221,
      rawMaterialPerBale: 181,
      labourPerBale: 17,
      otherPerBale: 23,
      plotAssigned: 'A13',
      fermentationStart: '2026-09-19',
      readyDate: '2026-10-19', // 14 days left
      status: 'Fermenting'
    },
    {
      id: 'batch-4',
      batchNumber: 'HB-2026-09-019',
      productionDate: '2026-09-24',
      rawMaterialKg: 24500,
      rawMaterialCost: 170000,
      labourCost: 15500,
      wrappingCost: 10500,
      machineryCost: 7800,
      otherCost: 3200,
      totalProductionCost: 207000,
      finishedBales: 930,
      costPerBale: 222,
      rawMaterialPerBale: 183,
      labourPerBale: 17,
      otherPerBale: 22,
      plotAssigned: 'B3',
      fermentationStart: '2026-09-24',
      readyDate: '2026-10-24', // 19 days left
      status: 'Fermenting'
    },
    {
      id: 'batch-5',
      batchNumber: 'HB-2026-10-001',
      productionDate: '2026-10-03',
      rawMaterialKg: 26500,
      rawMaterialCost: 195000,
      labourCost: 18000,
      wrappingCost: 12000,
      machineryCost: 9000,
      otherCost: 4000,
      totalProductionCost: 238000,
      finishedBales: 875,
      costPerBale: 272,
      rawMaterialPerBale: 223,
      labourPerBale: 21,
      otherPerBale: 28,
      plotAssigned: 'A17',
      fermentationStart: '2026-10-03',
      readyDate: '2026-11-02',
      status: 'Fermenting'
    }
  ],

  plots: [
    // Prepopulated plots as shown on wireframe 4.4 and 4.1
    { id: 'A1', section: 'A', bales: 200, batchId: 'batch-1', batchNumber: 'HB-2026-08-007', prodDate: '2026-08-15', fermStart: '2026-08-15', costPerBale: 218, status: 'Ready' },
    { id: 'A2', section: 'A', bales: 180, batchId: 'batch-1', batchNumber: 'HB-2026-08-007', prodDate: '2026-08-15', fermStart: '2026-08-15', costPerBale: 218, status: 'Ready' },
    { id: 'A3', section: 'A', bales: 220, batchId: 'batch-2', batchNumber: 'HB-2026-09-14', prodDate: '2026-09-21', fermStart: '2026-09-21', costPerBale: 220, status: 'Fermenting' },
    { id: 'A4', section: 'A', bales: 190, batchId: 'batch-2', batchNumber: 'HB-2026-09-14', prodDate: '2026-09-19', fermStart: '2026-09-19', costPerBale: 220, status: 'Fermenting' },
    { id: 'A5', section: 'A', bales: 240, batchId: 'batch-2', batchNumber: 'HB-2026-09-14', prodDate: '2026-09-17', fermStart: '2026-09-17', costPerBale: 220, status: 'Fermenting' },
    { id: 'A6', section: 'A', bales: 0, batchId: null, batchNumber: '', prodDate: '', fermStart: '', costPerBale: 0, status: 'Empty' },
    { id: 'A12', section: 'A', bales: 180, batchId: 'batch-2', batchNumber: 'HB-2026-09-014', prodDate: '2026-09-17', fermStart: '2026-09-17', costPerBale: 218, status: 'Fermenting' },
    { id: 'A13', section: 'A', bales: 220, batchId: 'batch-3', batchNumber: 'HB-2026-09-016', prodDate: '2026-09-19', fermStart: '2026-09-19', costPerBale: 221, status: 'Fermenting' },
    { id: 'A17', section: 'A', bales: 875, batchId: 'batch-5', batchNumber: 'HB-2026-10-001', prodDate: '2026-10-03', fermStart: '2026-10-03', costPerBale: 272, status: 'Fermenting' },
    { id: 'B1', section: 'B', bales: 150, batchId: 'batch-3', batchNumber: 'HB-2026-09-13', prodDate: '2026-09-13', fermStart: '2026-09-13', costPerBale: 215, status: 'Fermenting' },
    { id: 'B2', section: 'B', bales: 210, batchId: 'batch-3', batchNumber: 'HB-2026-09-11', prodDate: '2026-09-11', fermStart: '2026-09-11', costPerBale: 215, status: 'Fermenting' },
    { id: 'B3', section: 'B', bales: 175, batchId: 'batch-1', batchNumber: 'HB-2026-08-007', prodDate: '2026-08-15', fermStart: '2026-08-15', costPerBale: 218, status: 'Ready' },
    { id: 'B4', section: 'B', bales: 0, batchId: null, batchNumber: '', prodDate: '', fermStart: '', costPerBale: 0, status: 'Empty' },
    { id: 'B5', section: 'B', bales: 230, batchId: 'batch-4', batchNumber: 'HB-2026-09-22', prodDate: '2026-09-22', fermStart: '2026-09-22', costPerBale: 220, status: 'Fermenting' },
    { id: 'B6', section: 'B', bales: 200, batchId: 'batch-1', batchNumber: 'HB-2026-08-007', prodDate: '2026-08-15', fermStart: '2026-08-15', costPerBale: 218, status: 'Ready' },
    { id: 'B7', section: 'B', bales: 485, batchId: 'batch-1', batchNumber: 'HB-2026-08-007', prodDate: '2026-08-15', fermStart: '2026-08-15', costPerBale: 218, status: 'Ready' },
    { id: 'C1', section: 'C', bales: 0, batchId: null, batchNumber: '', prodDate: '', fermStart: '', costPerBale: 0, status: 'Empty' },
    { id: 'C2', section: 'C', bales: 0, batchId: null, batchNumber: '', prodDate: '', fermStart: '', costPerBale: 0, status: 'Empty' },
    { id: 'D1', section: 'D', bales: 0, batchId: null, batchNumber: '', prodDate: '', fermStart: '', costPerBale: 0, status: 'Empty' }
  ],

  sales: [
    {
      id: 'inv-0042',
      invoiceNumber: 'INV-0042',
      customerId: 'cust-1',
      customerName: 'Sri Hay Traders',
      date: '2026-10-02',
      dueDate: '2026-11-02',
      balesCount: 700,
      ratePerBale: 285,
      subtotal: 199500,
      gstRate: 0,
      gstAmount: 0,
      invoiceTotal: 200000, // round-up figure from wireframe
      cogsTotal: 152600, // 700 * 218 cost per bale
      amountPaid: 50000,
      balancePending: 150000,
      status: 'Partially Paid',
      stockAllocations: [
        { plotId: 'A1', batchNumber: 'HB-2026-08-007', bales: 400, costPerBale: 218 },
        { plotId: 'A2', batchNumber: 'HB-2026-08-007', bales: 300, costPerBale: 218 }
      ],
      paymentHistory: [
        {
          id: 'pay-001',
          date: '10-10-2026',
          mode: 'UPI',
          amountPaid: 50000,
          balanceAfter: 150000,
          note: 'Advance'
        },
        {
          id: 'pay-002',
          date: '25-10-2026',
          mode: 'Cash',
          amountPaid: 40000,
          balanceAfter: 110000,
          note: 'Part payment'
        }
      ]
    },
    {
      id: 'inv-0041',
      invoiceNumber: 'INV-0041',
      customerId: 'cust-2',
      customerName: 'Ravi Farms',
      date: '2026-09-28',
      dueDate: '2026-10-09',
      balesCount: 400,
      ratePerBale: 285,
      subtotal: 114000,
      gstRate: 0,
      gstAmount: 0,
      invoiceTotal: 114000,
      cogsTotal: 87200,
      amountPaid: 4000,
      balancePending: 110000,
      status: 'Pending',
      stockAllocations: [
        { plotId: 'B3', batchNumber: 'HB-2026-08-007', bales: 400, costPerBale: 218 }
      ],
      paymentHistory: [
        {
          id: 'pay-003',
          date: '28-09-2026',
          mode: 'UPI',
          amountPaid: 4000,
          balanceAfter: 110000,
          note: 'Token advance'
        }
      ]
    },
    {
      id: 'inv-0040',
      invoiceNumber: 'INV-0040',
      customerId: 'cust-3',
      customerName: 'Deccan Agro Exports',
      date: '2026-10-01',
      dueDate: '2026-10-15',
      balesCount: 5350,
      ratePerBale: 285,
      subtotal: 1526000,
      gstRate: 0,
      gstAmount: 0,
      invoiceTotal: 1526000,
      cogsTotal: 1050200,
      amountPaid: 1301000,
      balancePending: 225000,
      status: 'Partially Paid',
      stockAllocations: [
        { plotId: 'B6', batchNumber: 'HB-2026-08-007', bales: 200, costPerBale: 218 }
      ],
      paymentHistory: [
        {
          id: 'pay-004',
          date: '01-10-2026',
          mode: 'Bank Transfer',
          amountPaid: 1301000,
          balanceAfter: 225000,
          note: 'NEFT transfer'
        }
      ]
    }
  ],

  expenses: [
    {
      id: 'exp-1',
      date: '2026-10-02',
      paidTo: 'Diesel Pump - Highway Fuel',
      reason: 'Baler machinery diesel & tractor fuel',
      amount: 3500,
      category: 'Production',
      mode: 'Cash',
      relatedBatch: 'HB-2026-10-001',
      attachment: { name: 'diesel_bill_oct2.jpg', type: 'image' }
    },
    {
      id: 'exp-2',
      date: '2026-10-01',
      paidTo: 'Factory Labour Gang',
      reason: 'Stacking and twine tying contract',
      amount: 18000,
      category: 'Production',
      mode: 'Cash',
      relatedBatch: 'HB-2026-10-001',
      attachment: null
    },
    {
      id: 'exp-3',
      date: '2026-10-03',
      paidTo: 'Sri Rama Twine Depot',
      reason: 'Polypropylene bale twine rolls',
      amount: 12000,
      category: 'Production',
      mode: 'UPI',
      relatedBatch: 'HB-2026-10-001',
      attachment: { name: 'twine_bill.pdf', type: 'pdf' }
    },
    {
      id: 'exp-4',
      date: '2026-10-04',
      paidTo: 'Monthly Factory Rent',
      reason: 'Factory shed lease for October',
      amount: 45000,
      category: 'Factory',
      mode: 'Bank Transfer',
      relatedBatch: '',
      attachment: null
    },
    {
      id: 'exp-5',
      date: '2026-10-05',
      paidTo: 'Staff Salaries',
      reason: 'Accountant & yard supervisor monthly pay',
      amount: 55000,
      category: 'Employees',
      mode: 'Bank Transfer',
      relatedBatch: '',
      attachment: null
    },
    {
      id: 'exp-6',
      date: '2026-09-29',
      paidTo: 'Lorry Freight Logistics',
      reason: 'Transport from field collection points',
      amount: 32000,
      category: 'Transport',
      mode: 'UPI',
      relatedBatch: '',
      attachment: null
    }
  ],

  upcomingPaymentsSchedule: [
    { who: 'Sri Hay Traders', type: 'Receive', amount: 40000, due: '06 Oct 2026', linkType: 'customer', id: 'cust-1' },
    { who: 'Supplier K. Rao', type: 'Pay', amount: 55000, due: '08 Oct 2026', linkType: 'supplier', id: 'sup-2' },
    { who: 'Ravi Farms', type: 'Receive', amount: 110000, due: '09 Oct 2026', linkType: 'customer', id: 'cust-2' },
    { who: 'K. Rao Traders', type: 'Pay', amount: 87000, due: '30 Oct 2026', linkType: 'supplier', id: 'sup-1' }
  ]
};
