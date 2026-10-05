import { store } from './store.js';

// Application State
let currentTab = 'dashboard';
let currentMonth = '2026-10';
let activePlotFilter = 'ALL';
let activePlotSection = 'ALL';
let plotSearchQuery = '';

// DOM Elements
const appContent = document.getElementById('appContent');
const pageTitle = document.getElementById('pageTitle');
const currentDateDisplay = document.getElementById('currentDateDisplay');
const roleSelector = document.getElementById('roleSelector');
const currentRoleText = document.getElementById('currentRoleText');
const roleNoticeBanner = document.getElementById('roleNoticeBanner');
const quickActionHeaderBtn = document.getElementById('quickActionHeaderBtn');
const mobileFabBtn = document.getElementById('mobileFabBtn');
const quickMenuPopover = document.getElementById('quickMenuPopover');
const mobileMoreBtn = document.getElementById('mobileMoreBtn');
const moreMenuPopover = document.getElementById('moreMenuPopover');

// Common Modal Elements
const commonModalOverlay = document.getElementById('commonModalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Initialize
function init() {
  bindEvents();
  updateRoleUI();
  render();
  store.subscribe(() => {
    updateRoleUI();
    render();
  });
}

function bindEvents() {
  // Navigation tabs (desktop sidebar)
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      navigateTo(tab);
    });
  });

  // Mobile bottom bar tabs
  document.querySelectorAll('.mobile-bottom-bar .mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) navigateTo(tab);
    });
  });

  // Role selector
  roleSelector.value = store.getRole();
  roleSelector.addEventListener('change', (e) => {
    store.setRole(e.target.value);
  });

  // Quick Action menu toggles
  const toggleQuickMenu = (e) => {
    e.stopPropagation();
    moreMenuPopover.classList.remove('open');
    quickMenuPopover.classList.toggle('open');
  };
  quickActionHeaderBtn.addEventListener('click', toggleQuickMenu);
  if (mobileFabBtn) mobileFabBtn.addEventListener('click', toggleQuickMenu);

  if (mobileMoreBtn) {
    mobileMoreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      quickMenuPopover.classList.remove('open');
      moreMenuPopover.classList.toggle('open');
    });
  }

  // Quick menu clicks
  quickMenuPopover.querySelectorAll('.quick-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      quickMenuPopover.classList.remove('open');
      const action = item.getAttribute('data-action');
      handleQuickAction(action);
    });
  });

  moreMenuPopover.querySelectorAll('.quick-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      moreMenuPopover.classList.remove('open');
      const tab = item.getAttribute('data-tab');
      if (tab) navigateTo(tab);
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!quickMenuPopover.contains(e.target) && e.target !== quickActionHeaderBtn && e.target !== mobileFabBtn) {
      quickMenuPopover.classList.remove('open');
    }
    if (mobileMoreBtn && !moreMenuPopover.contains(e.target) && e.target !== mobileMoreBtn) {
      moreMenuPopover.classList.remove('open');
    }
  });

  // Modal close
  modalCloseBtn.addEventListener('click', closeModal);
  commonModalOverlay.addEventListener('click', (e) => {
    if (e.target === commonModalOverlay) closeModal();
  });
}

function updateRoleUI() {
  const role = store.getRole();
  roleSelector.value = role;
  currentRoleText.textContent = role;
  currentDateDisplay.textContent = store.formatDate(store.getCurrentDate());

  if (role === 'Staff') {
    roleNoticeBanner.classList.remove('hidden');
    document.querySelectorAll('.finance-required').forEach(el => el.classList.add('hidden'));
    // If currently on finance tab as staff, kick to dashboard
    if (['purchases', 'sales', 'expenses', 'reports'].includes(currentTab)) {
      currentTab = 'dashboard';
    }
  } else {
    roleNoticeBanner.classList.add('hidden');
    document.querySelectorAll('.finance-required').forEach(el => el.classList.remove('hidden'));
  }
}

function navigateTo(tab) {
  currentTab = tab;
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tab) item.classList.add('active');
    else item.classList.remove('active');
  });

  document.querySelectorAll('.mobile-bottom-bar .mobile-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tab) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  render();
}

function render() {
  switch (currentTab) {
    case 'dashboard':
      pageTitle.textContent = store.getRole() === 'Staff' ? 'Staff Yard Dashboard' : 'Owner Dashboard';
      renderDashboard();
      break;
    case 'plots':
      pageTitle.textContent = 'Plots and Fermentation';
      renderPlots();
      break;
    case 'production':
      pageTitle.textContent = 'Production Batches';
      renderProduction();
      break;
    case 'purchases':
      pageTitle.textContent = 'Purchases and Supplier Balances';
      renderPurchases();
      break;
    case 'sales':
      pageTitle.textContent = 'Sales, Invoices & Customer Credit';
      renderSales();
      break;
    case 'expenses':
      pageTitle.textContent = 'Business Expenses';
      renderExpenses();
      break;
    case 'reports':
      pageTitle.textContent = 'Financial & Stock Reports';
      renderReports();
      break;
    case 'settings':
      pageTitle.textContent = 'System & Yard Settings';
      renderSettings();
      break;
    default:
      renderDashboard();
  }
}

// ----------------------------------------------------------------------------------
// 4.1 OWNER DASHBOARD
// ----------------------------------------------------------------------------------
function renderDashboard() {
  const m = store.getDashboardMetrics(currentMonth);
  const isFinance = store.canViewFinancials();

  appContent.innerHTML = `
    <!-- Month Selector Bar -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        Overview for <strong>${m.role}</strong> • All bale operations & real-time accounts
      </div>
      ${isFinance ? `
        <div style="display:flex; align-items:center; gap:8px;">
          <label style="font-size:0.85rem; font-weight:600; color:var(--text-sub);">Reporting Month:</label>
          <select id="dashMonthSelect" class="form-select" style="padding:6px 12px; font-weight:600;">
            <option value="2026-10" ${currentMonth === '2026-10' ? 'selected' : ''}>October 2026</option>
            <option value="2026-09" ${currentMonth === '2026-09' ? 'selected' : ''}>September 2026</option>
            <option value="2026-08" ${currentMonth === '2026-08' ? 'selected' : ''}>August 2026</option>
          </select>
        </div>
      ` : ''}
    </div>

    <!-- Top KPI Cards Grid -->
    <div class="kpi-cards-grid">
      <div class="kpi-card ready" onclick="window.appNav('plots', {status: 'Ready'})">
        <div class="kpi-label">Ready for Sale</div>
        <div class="kpi-value text-green">${store.formatNumber(m.readyBales)} <span style="font-size:1rem; font-weight:500;">bales</span></div>
        <div class="kpi-subtext">🌾 Fully fermented & in plots</div>
      </div>

      <div class="kpi-card fermenting" onclick="window.appNav('plots', {status: 'Fermenting'})">
        <div class="kpi-label">Fermenting</div>
        <div class="kpi-value text-amber">${store.formatNumber(m.fermentingBales)} <span style="font-size:1rem; font-weight:500;">bales</span></div>
        <div class="kpi-subtext">⏳ Counting towards 30 days</div>
      </div>

      ${isFinance ? `
        <div class="kpi-card customer-due" onclick="window.appNav('sales')">
          <div class="kpi-label">Customers Owe You</div>
          <div class="kpi-value text-red">${store.formatINR(m.customerDues)}</div>
          <div class="kpi-subtext">💼 Total receivables balance</div>
        </div>

        <div class="kpi-card supplier-due" onclick="window.appNav('purchases')">
          <div class="kpi-label">You Owe Suppliers</div>
          <div class="kpi-value text-blue">${store.formatINR(m.supplierDues)}</div>
          <div class="kpi-subtext">🛒 Total payables balance</div>
        </div>
      ` : `
        <div class="kpi-card" style="opacity:0.6; cursor:default;">
          <div class="kpi-label">Financial Balances</div>
          <div class="kpi-value">Protected</div>
          <div class="kpi-subtext">🔒 Staff role permission</div>
        </div>
        <div class="kpi-card" style="opacity:0.6; cursor:default;">
          <div class="kpi-label">Profitability</div>
          <div class="kpi-value">Protected</div>
          <div class="kpi-subtext">🔒 Staff role permission</div>
        </div>
      `}
    </div>

    <!-- Month Financials (Sales, Expenses, Profit) -->
    ${isFinance ? `
      <div class="month-finance-row">
        <div class="finance-card">
          <div class="kpi-label">Sales This Month (${currentMonth})</div>
          <div class="kpi-value text-blue">${store.formatINR(m.monthSales)}</div>
          <div class="kpi-subtext">Invoiced sales revenue</div>
        </div>

        <div class="finance-card">
          <div class="kpi-label">Expenses This Month</div>
          <div class="kpi-value text-red">${store.formatINR(m.monthExpenses)}</div>
          <div class="kpi-subtext">Factory, labour, diesel & operations</div>
        </div>

        <div class="finance-card ${m.netProfit >= 0 ? 'profit-positive' : 'profit-loss'}">
          <div class="kpi-label">Profit This Month</div>
          <div class="kpi-value">${store.formatINR(m.netProfit)}</div>
          <div class="kpi-subtext">${m.netProfit >= 0 ? '▲ Net profit after COGS & expenses' : '▼ Net operating loss'}</div>
        </div>
      </div>
    ` : ''}

    <!-- Stock by Stage Bar -->
    <div class="stage-card">
      <div class="stage-header">
        <div class="stage-title">Stock by Stage (Bales & Raw Material)</div>
        <div style="font-size:0.84rem; font-weight:600; color:var(--text-sub);">
          Raw Stock: ${store.formatNumber(m.rawMaterialKg)} kg (~${store.formatNumber(m.rawMaterialBalesEquiv)} bales)
        </div>
      </div>

      <div class="stacked-bar-container">
        <div class="stacked-segment segment-raw" style="width: 25%;" title="Raw Material: ${m.rawMaterialKg} kg">Raw (${store.formatNumber(m.rawMaterialBalesEquiv)})</div>
        <div class="stacked-segment segment-fermenting" style="width: 35%;" title="Fermenting: ${m.fermentingBales} bales">Fermenting (${store.formatNumber(m.fermentingBales)})</div>
        <div class="stacked-segment segment-ready" style="width: 20%;" title="Ready: ${m.readyBales} bales">Ready (${store.formatNumber(m.readyBales)})</div>
        <div class="stacked-segment segment-sold" style="width: 20%;" title="Sold This Month: ${m.monthSoldBales} bales">Sold (${store.formatNumber(m.monthSoldBales)})</div>
      </div>

      <div class="stage-legend">
        <div class="legend-item"><span class="legend-dot" style="background:#64748b;"></span> Raw material (${store.formatNumber(m.rawMaterialKg)} kg)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#d97706;"></span> Fermenting (${store.formatNumber(m.fermentingBales)} bales)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Ready for sale (${store.formatNumber(m.readyBales)} bales)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#2563eb;"></span> Sold in month (${store.formatNumber(m.monthSoldBales)} bales)</div>
      </div>
    </div>

    <!-- 2 Column Split: Batches Ready Soon & Upcoming Payments -->
    <div class="dash-two-columns">
      <!-- Batches Becoming Ready Soon -->
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">⏳ Batches Becoming Ready Soon</div>
          <button class="btn-secondary" style="padding:4px 10px; font-size:0.78rem;" onclick="window.appNav('plots')">View All Plots</button>
        </div>

        <div class="data-table-wrapper">
          <table class="app-table">
            <thead>
              <tr>
                <th>Batch</th>
                <th>Plot</th>
                <th>Bales</th>
                <th>Ready In</th>
              </tr>
            </thead>
            <tbody>
              ${m.batchesReadySoon.length === 0 ? `<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No active fermenting batches</td></tr>` : ''}
              ${m.batchesReadySoon.map(b => `
                <tr style="cursor:pointer;" onclick="window.openPlotDetail('${b.plot}')">
                  <td><strong style="color:var(--brand-blue);">${b.batch}</strong></td>
                  <td><span class="badge badge-fermenting">${b.plot}</span></td>
                  <td><strong>${b.bales}</strong></td>
                  <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span class="badge badge-fermenting">${b.daysLeft} days</span>
                      <small style="color:var(--text-muted); font-size:0.75rem;">(${store.formatDate(b.readyDate)})</small>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Upcoming Payments in Next 7 Days -->
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">💳 Upcoming Payments (Next 7–30 Days)</div>
          ${isFinance ? `<button class="btn-secondary" style="padding:4px 10px; font-size:0.78rem;" onclick="window.appNav('reports')">View Balances</button>` : ''}
        </div>

        ${isFinance ? `
          <div class="data-table-wrapper">
            <table class="app-table">
              <thead>
                <tr>
                  <th>Who</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                </tr>
              </thead>
              <tbody>
                ${m.upcomingPayments.length === 0 ? `<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No pending dues</td></tr>` : ''}
                ${m.upcomingPayments.slice(0, 6).map(p => `
                  <tr>
                    <td><strong>${p.who}</strong></td>
                    <td>
                      <span class="badge ${p.type === 'Receive' ? 'badge-receive' : 'badge-pay'}">
                        ${p.type === 'Receive' ? '↓ Receive' : '↑ Pay'}
                      </span>
                    </td>
                    <td><strong class="${p.type === 'Receive' ? 'text-green' : 'text-red'}">${store.formatINR(p.amount)}</strong></td>
                    <td>
                      <div style="display:flex; align-items:center; gap:6px;">
                        <span>${p.dueFormatted}</span>
                        ${p.isOverdue ? `<span class="badge badge-overdue">OVERDUE</span>` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : `
          <div style="padding:28px; text-align:center; color:var(--text-muted);">
            Payment details are restricted to Owner and Accountant roles.
          </div>
        `}
      </div>
    </div>
  `;

  // Attach Month Select listener
  const monthSelect = document.getElementById('dashMonthSelect');
  if (monthSelect) {
    monthSelect.addEventListener('change', (e) => {
      currentMonth = e.target.value;
      renderDashboard();
    });
  }
}

// ----------------------------------------------------------------------------------
// 4.4 PLOTS AND FERMENTATION
// ----------------------------------------------------------------------------------
function renderPlots() {
  const plots = store.data.plots;
  const today = store.getCurrentDate();
  const maxFermDays = store.data.settings.fermentationDays || 30;

  // Filter plots
  const filteredPlots = plots.filter(plot => {
    // Section filter
    if (activePlotSection !== 'ALL' && plot.section !== activePlotSection) return false;
    // Status filter
    if (activePlotFilter !== 'ALL' && plot.status !== activePlotFilter) return false;
    // Search query
    if (plotSearchQuery) {
      const q = plotSearchQuery.toLowerCase();
      const matchId = plot.id.toLowerCase().includes(q);
      const matchBatch = (plot.batchNumber || '').toLowerCase().includes(q);
      if (!matchId && !matchBatch) return false;
    }
    return true;
  });

  const totalPlots = plots.length;
  const readyPlots = plots.filter(p => p.status === 'Ready').length;
  const fermentingPlots = plots.filter(p => p.status === 'Fermenting').length;
  const emptyPlots = plots.filter(p => p.status === 'Empty').length;

  appContent.innerHTML = `
    <!-- Controls Bar -->
    <div class="plots-controls-bar">
      <div class="filters-group">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-sub); margin-right:4px;">Section:</span>
        <button class="filter-chip ${activePlotSection === 'ALL' ? 'active' : ''}" onclick="window.setPlotSection('ALL')">All</button>
        <button class="filter-chip ${activePlotSection === 'A' ? 'active' : ''}" onclick="window.setPlotSection('A')">Section A (1-40)</button>
        <button class="filter-chip ${activePlotSection === 'B' ? 'active' : ''}" onclick="window.setPlotSection('B')">Section B (1-30)</button>
        <button class="filter-chip ${activePlotSection === 'C' ? 'active' : ''}" onclick="window.setPlotSection('C')">Section C</button>
        <button class="filter-chip ${activePlotSection === 'D' ? 'active' : ''}" onclick="window.setPlotSection('D')">Section D</button>
      </div>

      <div class="filters-group">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-sub); margin-right:4px;">Status:</span>
        <button class="filter-chip ${activePlotFilter === 'ALL' ? 'active' : ''}" onclick="window.setPlotStatus('ALL')">All (${totalPlots})</button>
        <button class="filter-chip ${activePlotFilter === 'Fermenting' ? 'active' : ''}" onclick="window.setPlotStatus('Fermenting')">⏳ Fermenting (${fermentingPlots})</button>
        <button class="filter-chip ${activePlotFilter === 'Ready' ? 'active' : ''}" onclick="window.setPlotStatus('Ready')">🌾 Ready (${readyPlots})</button>
        <button class="filter-chip ${activePlotFilter === 'Empty' ? 'active' : ''}" onclick="window.setPlotStatus('Empty')">⚪ Empty (${emptyPlots})</button>
      </div>

      <div style="display:flex; align-items:center; gap:8px;">
        <input type="text" id="plotSearchInput" class="search-input" placeholder="Search plot (e.g. A12) or batch..." value="${plotSearchQuery}" />
        <button class="btn-navy" onclick="window.openAddPlotModal()">+ Add Plot</button>
      </div>
    </div>

    <!-- Plots Grid -->
    <div class="plots-grid">
      ${filteredPlots.map(plot => {
        let statusClass = 'empty';
        let statusLabel = 'Empty';
        let progressPct = 0;
        let dayCounterText = '';

        if (plot.status === 'Ready') {
          statusClass = 'ready';
          statusLabel = 'Ready';
        } else if (plot.status === 'Fermenting') {
          statusClass = 'fermenting';
          const daysPassed = Math.max(1, store.getDaysDifference(plot.fermStart, today));
          dayCounterText = `Day ${Math.min(maxFermDays, daysPassed)} of ${maxFermDays}`;
          statusLabel = dayCounterText;
          progressPct = Math.min(100, Math.round((daysPassed / maxFermDays) * 100));
        }

        return `
          <div class="plot-tile ${statusClass}" onclick="window.openPlotDetail('${plot.id}')">
            <div>
              <div class="plot-id">${plot.id}</div>
              <div class="plot-bales">${plot.bales > 0 ? `${store.formatNumber(plot.bales)} bales` : '<span style="color:#94a3b8;">Empty</span>'}</div>
            </div>

            <div>
              <span class="plot-status-label">${statusLabel}</span>
              ${plot.status === 'Fermenting' ? `
                <div class="plot-progress-mini">
                  <div class="plot-progress-mini-bar" style="width: ${progressPct}%;"></div>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div style="text-align:center; color:var(--text-muted); font-size:0.85rem; margin-top:20px;">
      💡 Tip: Tap any plot tile to inspect batch details, see fermentation countdown, update stock count, or initiate a sale.
    </div>
  `;

  // Search input handler
  const searchInput = document.getElementById('plotSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      plotSearchQuery = e.target.value;
      renderPlots();
      const newEl = document.getElementById('plotSearchInput');
      newEl.focus();
      newEl.setSelectionRange(newEl.value.length, newEl.value.length);
    });
  }
}

// ----------------------------------------------------------------------------------
// PLOT DETAIL MODAL
// ----------------------------------------------------------------------------------
window.openPlotDetail = function(plotId) {
  const plot = store.data.plots.find(p => p.id === plotId);
  if (!plot) return;

  const today = store.getCurrentDate();
  const maxFermDays = store.data.settings.fermentationDays || 30;
  const isFinance = store.canViewFinancials();
  
  let daysPassed = 0;
  let readyDate = '--';
  let approxValue = 0;
  let progressPct = 0;

  if (plot.fermStart) {
    daysPassed = Math.max(0, store.getDaysDifference(plot.fermStart, today));
    readyDate = store.addDays(plot.fermStart, maxFermDays);
    progressPct = Math.min(100, Math.round((daysPassed / maxFermDays) * 100));
  }
  if (plot.bales > 0) {
    approxValue = (plot.bales || 0) * (plot.costPerBale || 218);
  }

  modalTitle.textContent = `Plot ${plot.id} Detail Card`;
  modalBody.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <div>
        <span class="badge ${plot.status === 'Ready' ? 'badge-ready' : plot.status === 'Fermenting' ? 'badge-fermenting' : 'badge-empty'}" style="font-size:0.9rem; padding:4px 12px;">
          ${plot.status}
        </span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted);">
        Section ${plot.section} • Capacity ~1000 bales
      </div>
    </div>

    <div style="background:var(--grey-bg); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.9rem;">
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Batch Assigned:</span>
          <strong>${plot.batchNumber || 'None (Empty Plot)'}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Bales Stored:</span>
          <strong style="font-size:1.1rem; color:var(--primary-navy);">${store.formatNumber(plot.bales)} bales</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Production Date:</span>
          <strong>${store.formatDate(plot.prodDate)}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Fermentation Start:</span>
          <strong>${store.formatDate(plot.fermStart)}</strong>
        </div>
      </div>
    </div>

    ${plot.status === 'Fermenting' ? `
      <div style="border:1px solid var(--amber-border); background:var(--amber-bg); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="color:var(--amber-text);">Fermentation Progress: Day ${daysPassed} of ${maxFermDays}</strong>
          <span style="font-weight:700; color:var(--amber-text);">${progressPct}%</span>
        </div>
        <div style="height:10px; background:#fff; border-radius:5px; overflow:hidden;">
          <div style="height:100%; width:${progressPct}%; background:var(--amber-accent);"></div>
        </div>
        <div style="margin-top:8px; font-size:0.84rem; color:var(--amber-text);">
          Ready for sale on: <strong>${store.formatDate(readyDate)}</strong> (${Math.max(0, maxFermDays - daysPassed)} days left)
        </div>
      </div>
    ` : ''}

    ${isFinance && plot.bales > 0 ? `
      <div style="display:flex; justify-content:space-between; align-items:center; background:#f0fdf4; border:1px solid var(--green-border); padding:14px 16px; border-radius:var(--radius-md); margin-bottom:20px;">
        <div>
          <span style="font-size:0.8rem; color:var(--green-text); display:block;">Approximate Stock Value:</span>
          <small style="color:var(--text-muted);">(${plot.bales} bales × ₹${plot.costPerBale || 218}/bale cost)</small>
        </div>
        <div style="font-size:1.4rem; font-weight:700; color:var(--green-text);">
          ${store.formatINR(approxValue)}
        </div>
      </div>
    ` : ''}

    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="btn-navy" style="flex:1;" onclick="window.openMoveStockModal('${plot.id}')">
        📦 Move / Update Stock
      </button>

      ${plot.status === 'Ready' && isFinance ? `
        <button class="btn-primary" style="flex:1;" onclick="window.startSaleFromPlot('${plot.id}')">
          💼 Sell From This Plot
        </button>
      ` : ''}
    </div>
  `;

  openModal();
};

window.openMoveStockModal = function(plotId) {
  const plot = store.data.plots.find(p => p.id === plotId);
  if (!plot) return;

  modalTitle.textContent = `Update Stock - Plot ${plot.id}`;
  modalBody.innerHTML = `
    <form id="moveStockForm">
      <div class="form-group mb-12">
        <label class="form-label">Current Stored Bales</label>
        <input type="number" id="updateBalesInput" class="form-input" value="${plot.bales}" min="0" required />
      </div>

      <div class="form-group mb-16">
        <label class="form-label">Plot Status</label>
        <select id="updateStatusSelect" class="form-select">
          <option value="Ready" ${plot.status === 'Ready' ? 'selected' : ''}>Ready for Sale</option>
          <option value="Fermenting" ${plot.status === 'Fermenting' ? 'selected' : ''}>Fermenting</option>
          <option value="Empty" ${plot.status === 'Empty' ? 'selected' : ''}>Empty</option>
        </select>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Save Changes</button>
      </div>
    </form>
  `;

  document.getElementById('moveStockForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newCount = Number(document.getElementById('updateBalesInput').value);
    const newStatus = document.getElementById('updateStatusSelect').value;
    store.updatePlotStock(plotId, newCount, newStatus);
    closeModal();
    renderPlots();
  });
};

window.startSaleFromPlot = function(plotId) {
  closeModal();
  navigateTo('sales');
  setTimeout(() => {
    window.openNewInvoiceModal({ preselectedPlotId: plotId });
  }, 100);
};

// ----------------------------------------------------------------------------------
// 4.2 PURCHASES AND SUPPLIER BALANCES
// ----------------------------------------------------------------------------------
function renderPurchases() {
  const isFinance = store.canViewFinancials();
  if (!isFinance) {
    appContent.innerHTML = `<div style="padding:40px; text-align:center;">Staff cannot access purchase prices and supplier financials.</div>`;
    return;
  }

  const purchases = store.data.purchases;
  const suppliers = store.data.suppliers;

  appContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        True landed cost calculation, bill attachments, and supplier payables ledger.
      </div>
      <div style="display:flex; gap:10px;">
        <button class="btn-primary" onclick="window.openNewPurchaseModal()">＋ New Purchase Bill</button>
      </div>
    </div>

    <!-- Suppliers Outstanding Cards Row -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin-bottom:24px;">
      ${suppliers.map(sup => `
        <div class="finance-card" style="position:relative;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-weight:700; font-size:1.05rem; color:var(--primary-navy);">${sup.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${sup.city} • ${sup.phone}</div>
            </div>
            <span class="badge ${sup.balancePending > 0 ? 'badge-pay' : 'badge-ready'}">
              ${sup.balancePending > 0 ? 'Pending' : 'Cleared'}
            </span>
          </div>

          <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-light); display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
            <div>
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Total Purchased:</span>
              <strong>${store.formatINR(sup.totalPurchased)}</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Balance Pending:</span>
              <strong style="color:var(--red-accent); font-size:1rem;">${store.formatINR(sup.balancePending)}</strong>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Purchases History Table -->
    <div class="section-box">
      <div class="section-box-header">
        <div class="box-title">Recent Raw Material Purchases</div>
      </div>

      <div class="data-table-wrapper">
        <table class="app-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Bill / Inv #</th>
              <th>Supplier</th>
              <th>Material</th>
              <th>Qty</th>
              <th>Rate / Unit</th>
              <th>Actual Cost (Landed)</th>
              <th>Paid</th>
              <th>Pending</th>
              <th>Due Date</th>
              <th>Bill Attachment</th>
            </tr>
          </thead>
          <tbody>
            ${purchases.map(p => `
              <tr>
                <td>${store.formatDate(p.date)}</td>
                <td><strong>${p.invoiceNo}</strong></td>
                <td>${p.supplierName}</td>
                <td>${p.material}</td>
                <td>${p.quantity} ${p.unit}</td>
                <td>
                  ${store.formatINR(p.rate)}
                  ${p.rateVsLastBuy === 'up' ? '<span class="rate-vs-buy-tag up" style="display:inline-flex; padding:1px 5px; font-size:0.7rem;">▲ +₹' + p.rateDifference + '</span>' : ''}
                  ${p.rateVsLastBuy === 'down' ? '<span class="rate-vs-buy-tag down" style="display:inline-flex; padding:1px 5px; font-size:0.7rem;">▼ -₹' + Math.abs(p.rateDifference) + '</span>' : ''}
                </td>
                <td><strong style="color:var(--brand-blue);">${store.formatINR(p.actualCost)}</strong></td>
                <td><span class="text-green">${store.formatINR(p.amountPaid)}</span></td>
                <td><span class="${p.balancePending > 0 ? 'text-red' : 'text-green'} text-bold">${store.formatINR(p.balancePending)}</span></td>
                <td>${store.formatDate(p.dueDate)}</td>
                <td>
                  ${p.attachment ? `
                    <button class="attach-btn" onclick="window.viewAttachment('${p.attachment.name}')">
                      📎 ${p.attachment.name}
                    </button>
                  ` : '<span style="color:var(--text-muted); font-size:0.8rem;">No bill</span>'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------------
// NEW PURCHASE MODAL (With Wireframe 4.2 Auto Total Calculation)
// ----------------------------------------------------------------------------------
window.openNewPurchaseModal = function() {
  modalTitle.textContent = 'Record Raw Material Purchase';
  modalBody.innerHTML = `
    <div class="form-auto-calc-layout">
      <!-- Left Form Inputs -->
      <form id="newPurchaseForm">
        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label">Supplier</label>
            <input type="text" id="p_supplier" class="form-input" list="supplierList" value="K. Rao Traders" required />
            <datalist id="supplierList">
              ${store.data.suppliers.map(s => `<option value="${s.name}"></option>`).join('')}
            </datalist>
          </div>
          <div class="form-group">
            <label class="form-label">Purchase Date</label>
            <input type="date" id="p_date" class="form-input" value="${store.getCurrentDate()}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Bill / Invoice No.</label>
            <input type="text" id="p_invoiceNo" class="form-input" value="KR-${Math.floor(1000 + Math.random() * 9000)}" required />
          </div>
        </div>

        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label">Material</label>
            <input type="text" id="p_material" class="form-input" value="Hay (loose)" required />
          </div>
          <div class="form-group">
            <label class="form-label">Quantity</label>
            <input type="number" id="p_quantity" class="form-input" value="30" min="1" step="any" required />
          </div>
          <div class="form-group">
            <label class="form-label">Unit</label>
            <select id="p_unit" class="form-select">
              <option value="ton" selected>Ton</option>
              <option value="kg">kg</option>
              <option value="load">Load</option>
              <option value="bale">Bale</option>
            </select>
          </div>
        </div>

        <div class="form-grid-4">
          <div class="form-group">
            <label class="form-label">Rate / Unit (₹)</label>
            <input type="number" id="p_rate" class="form-input" value="4000" min="0" required />
          </div>
          <div class="form-group">
            <label class="form-label">Transport (₹)</label>
            <input type="number" id="p_transport" class="form-input" value="12000" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Loading/Unloading (₹)</label>
            <input type="number" id="p_loading" class="form-input" value="2000" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Commission (₹)</label>
            <input type="number" id="p_commission" class="form-input" value="3000" min="0" />
          </div>
        </div>

        <div class="form-grid-4">
          <div class="form-group">
            <label class="form-label">Other Charges (₹)</label>
            <input type="number" id="p_other" class="form-input" value="0" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">GST Rate (%)</label>
            <input type="number" id="p_gstRate" class="form-input" value="0" min="0" max="28" />
          </div>
          <div class="form-group">
            <label class="form-label">Amount Paid Now (₹)</label>
            <input type="number" id="p_amountPaid" class="form-input" value="50000" min="0" />
          </div>
          <div class="form-group">
            <label class="form-label">Payment Mode</label>
            <select id="p_mode" class="form-select">
              <option value="UPI" selected>UPI</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cheque">Cheque</option>
            </select>
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Due Date for Balance</label>
            <input type="date" id="p_dueDate" class="form-input" value="${store.addDays(store.getCurrentDate(), 25)}" />
          </div>
        </div>

        <!-- Attachment Simulation -->
        <div class="attachment-box">
          <div>
            <div style="font-weight:600; font-size:0.85rem;">Attach Bill Photo / PDF (Max 5MB)</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Stored permanently for audit proof</div>
          </div>
          <div class="attachment-buttons">
            <label class="attach-btn" style="cursor:pointer;">
              📷 Take Photo
              <input type="file" id="p_fileInput" accept="image/*,application/pdf" style="display:none;" />
            </label>
            <span id="attachedFileNameTag" class="attach-preview-tag">bill_1.pdf</span>
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px;">
          <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
          <button type="submit" class="btn-primary">Save Purchase</button>
        </div>
      </form>

      <!-- Right Auto Total Panel (Wireframe 4.2) -->
      <div class="calc-sidebar-box">
        <div class="calc-box-title">
          <span>⚡</span> <span>Auto Total Breakdown</span>
        </div>

        <div class="calc-line-item">
          <span>Material Cost:</span>
          <strong id="calc_materialCost">₹ 1,20,000</strong>
        </div>
        <div class="calc-line-item">
          <span>Transport:</span>
          <strong id="calc_transport">₹ 12,000</strong>
        </div>
        <div class="calc-line-item">
          <span>Loading:</span>
          <strong id="calc_loading">₹ 2,000</strong>
        </div>
        <div class="calc-line-item">
          <span>Commission:</span>
          <strong id="calc_commission">₹ 3,000</strong>
        </div>
        <div class="calc-line-item">
          <span>Other Charges:</span>
          <strong id="calc_other">₹ 0</strong>
        </div>
        <div class="calc-line-item">
          <span>GST:</span>
          <strong id="calc_gst">₹ 0</strong>
        </div>

        <div class="calc-line-item highlight">
          <span>Actual Cost:</span>
          <span class="val" id="calc_actualCost">₹ 1,37,000</span>
        </div>

        <div class="calc-line-item">
          <span>Paid Now:</span>
          <strong class="text-green" id="calc_paid">₹ 50,000</strong>
        </div>
        <div class="calc-line-item">
          <span>Balance Pending:</span>
          <strong class="text-red" id="calc_pending">₹ 87,000</strong>
        </div>

        <div id="calc_rateDiff" class="rate-vs-buy-tag neutral">
          <span>⚖️</span> <span>Rate vs last buy: None (first entry)</span>
        </div>
      </div>
    </div>
  `;

  // Attach live auto-calculation handlers
  const updatePurchaseCalc = () => {
    const qty = Number(document.getElementById('p_quantity').value) || 0;
    const rate = Number(document.getElementById('p_rate').value) || 0;
    const matCost = qty * rate;
    const transport = Number(document.getElementById('p_transport').value) || 0;
    const loading = Number(document.getElementById('p_loading').value) || 0;
    const commission = Number(document.getElementById('p_commission').value) || 0;
    const other = Number(document.getElementById('p_other').value) || 0;
    const gstRate = Number(document.getElementById('p_gstRate').value) || 0;

    const sub = matCost + transport + loading + commission + other;
    const gstAmount = Math.round((sub * gstRate) / 100);
    const actualCost = sub + gstAmount;

    const paid = Number(document.getElementById('p_amountPaid').value) || 0;
    const pending = Math.max(0, actualCost - paid);

    document.getElementById('calc_materialCost').textContent = store.formatINR(matCost);
    document.getElementById('calc_transport').textContent = store.formatINR(transport);
    document.getElementById('calc_loading').textContent = store.formatINR(loading);
    document.getElementById('calc_commission').textContent = store.formatINR(commission);
    document.getElementById('calc_other').textContent = store.formatINR(other);
    document.getElementById('calc_gst').textContent = store.formatINR(gstAmount);
    document.getElementById('calc_actualCost').textContent = store.formatINR(actualCost);
    document.getElementById('calc_paid').textContent = store.formatINR(paid);
    document.getElementById('calc_pending').textContent = store.formatINR(pending);
  };

  ['p_quantity', 'p_rate', 'p_transport', 'p_loading', 'p_commission', 'p_other', 'p_gstRate', 'p_amountPaid'].forEach(id => {
    document.getElementById(id).addEventListener('input', updatePurchaseCalc);
  });

  const fileInput = document.getElementById('p_fileInput');
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      document.getElementById('attachedFileNameTag').textContent = fileInput.files[0].name;
    }
  });

  document.getElementById('newPurchaseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    store.addPurchase({
      supplierName: document.getElementById('p_supplier').value,
      date: document.getElementById('p_date').value,
      invoiceNo: document.getElementById('p_invoiceNo').value,
      material: document.getElementById('p_material').value,
      quantity: document.getElementById('p_quantity').value,
      unit: document.getElementById('p_unit').value,
      rate: document.getElementById('p_rate').value,
      transport: document.getElementById('p_transport').value,
      loading: document.getElementById('p_loading').value,
      commission: document.getElementById('p_commission').value,
      other: document.getElementById('p_other').value,
      gstRate: document.getElementById('p_gstRate').value,
      amountPaid: document.getElementById('p_amountPaid').value,
      paymentMode: document.getElementById('p_mode').value,
      dueDate: document.getElementById('p_dueDate').value,
      attachment: { name: document.getElementById('attachedFileNameTag').textContent, type: 'pdf' }
    });

    closeModal();
    renderPurchases();
  });

  openModal();
};

// ----------------------------------------------------------------------------------
// 4.3 PRODUCTION BATCH
// ----------------------------------------------------------------------------------
function renderProduction() {
  const batches = store.data.batches;
  const isFinance = store.canViewFinancials();

  appContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        Turn raw material into numbered batches and calculate exact cost per bale.
      </div>
      <div>
        <button class="btn-primary" onclick="window.openNewBatchModal()">＋ New Production Batch</button>
      </div>
    </div>

    <!-- Batches Register Table -->
    <div class="section-box">
      <div class="section-box-header">
        <div class="box-title">Numbered Production Batches</div>
      </div>

      <div class="data-table-wrapper">
        <table class="app-table">
          <thead>
            <tr>
              <th>Batch Number</th>
              <th>Prod Date</th>
              <th>Raw Material Used</th>
              <th>Finished Bales</th>
              ${isFinance ? `
                <th>Total Prod Cost</th>
                <th>Cost / Bale</th>
              ` : ''}
              <th>Assigned Plot</th>
              <th>Fermentation Start</th>
              <th>Ready Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${batches.map(b => `
              <tr>
                <td><strong style="color:var(--brand-blue);">${b.batchNumber}</strong></td>
                <td>${store.formatDate(b.productionDate)}</td>
                <td>${store.formatNumber(b.rawMaterialKg)} kg</td>
                <td><strong>${store.formatNumber(b.finishedBales)}</strong></td>
                ${isFinance ? `
                  <td><strong>${store.formatINR(b.totalProductionCost)}</strong></td>
                  <td><span class="badge badge-blue">₹ ${b.costPerBale}</span></td>
                ` : ''}
                <td><span class="badge ${b.status === 'Ready' ? 'badge-ready' : 'badge-fermenting'}">${b.plotAssigned}</span></td>
                <td>${store.formatDate(b.fermentationStart)}</td>
                <td>${store.formatDate(b.readyDate)}</td>
                <td>
                  <span class="badge ${b.status === 'Ready' ? 'badge-ready' : 'badge-fermenting'}">
                    ${b.status}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------------
// NEW PRODUCTION BATCH MODAL (Wireframe 4.3 with Auto Cost per Bale Calculation)
// ----------------------------------------------------------------------------------
window.openNewBatchModal = function() {
  const isFinance = store.canViewFinancials();
  const availablePlots = store.data.plots.filter(p => p.status === 'Empty' || p.bales === 0);
  const autoBatchNum = store.generateBatchNumber();

  modalTitle.textContent = 'New Production Batch';
  modalBody.innerHTML = `
    <div class="form-auto-calc-layout">
      <!-- Left Form Inputs -->
      <form id="newBatchForm">
        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label">Batch Number (Auto)</label>
            <input type="text" id="b_batchNumber" class="form-input" value="${autoBatchNum}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Production Date</label>
            <input type="date" id="b_prodDate" class="form-input" value="${store.getCurrentDate()}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Raw Material Used (kg)</label>
            <input type="number" id="b_rawKg" class="form-input" value="26500" min="1" required />
          </div>
        </div>

        ${isFinance ? `
          <div class="form-grid-3">
            <div class="form-group">
              <label class="form-label">Raw Material Cost (₹)</label>
              <input type="number" id="b_rawCost" class="form-input" value="195000" min="0" required />
            </div>
            <div class="form-group">
              <label class="form-label">Labour Charges (₹)</label>
              <input type="number" id="b_labour" class="form-input" value="18000" min="0" />
            </div>
            <div class="form-group">
              <label class="form-label">Wrapping / Twine (₹)</label>
              <input type="number" id="b_wrapping" class="form-input" value="12000" min="0" />
            </div>
          </div>

          <div class="form-grid-3">
            <div class="form-group">
              <label class="form-label">Machinery / Fuel (₹)</label>
              <input type="number" id="b_machinery" class="form-input" value="9000" min="0" />
            </div>
            <div class="form-group">
              <label class="form-label">Other Expenses (₹)</label>
              <input type="number" id="b_other" class="form-input" value="4000" min="0" />
            </div>
            <div class="form-group">
              <label class="form-label">Finished Bales Count</label>
              <input type="number" id="b_finishedBales" class="form-input" value="875" min="1" required />
            </div>
          </div>
        ` : `
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Finished Bales Produced</label>
              <input type="number" id="b_finishedBales" class="form-input" value="875" min="1" required />
            </div>
          </div>
        `}

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Plot Assigned (Pick from A/B/C/D)</label>
            <select id="b_plotAssigned" class="form-select" required>
              ${availablePlots.length === 0 ? `<option value="A17">A17 (Default Plot)</option>` : ''}
              ${availablePlots.map(p => `<option value="${p.id}">Plot ${p.id} (Section ${p.section})</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Fermentation Start Date</label>
            <input type="date" id="b_fermStart" class="form-input" value="${store.getCurrentDate()}" required />
          </div>
        </div>

        <div style="font-size:0.8rem; color:var(--text-muted); margin: 8px 0 16px 0;">
          Saving this batch occupies the plot and automatically starts the 30-day fermentation countdown.
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px;">
          <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
          <button type="submit" class="btn-primary">Save Batch</button>
        </div>
      </form>

      <!-- Right Auto Calculation Panel (Wireframe 4.3) -->
      ${isFinance ? `
        <div class="calc-sidebar-box">
          <div class="calc-box-title">
            <span>⚡</span> <span>Auto Calculation</span>
          </div>

          <div class="calc-line-item highlight">
            <span>Total Production Cost:</span>
            <span class="val" id="calc_totalProdCost">₹ 2,38,000</span>
          </div>

          <div class="calc-line-item">
            <span>Cost per Bale:</span>
            <strong style="color:var(--brand-blue); font-size:1.15rem;" id="calc_costPerBale">₹ 272</strong>
          </div>

          <div class="calc-line-item">
            <span>Raw material / bale:</span>
            <strong id="calc_rawPerBale">₹ 223</strong>
          </div>

          <div class="calc-line-item">
            <span>Labour / bale:</span>
            <strong id="calc_labourPerBale">₹ 21</strong>
          </div>

          <div class="calc-line-item">
            <span>Other / bale:</span>
            <strong id="calc_otherPerBale">₹ 28</strong>
          </div>

          <div style="margin-top:16px; padding-top:12px; border-top:1.5px dashed var(--border-light); font-size:0.85rem;">
            Ready date: <strong id="calc_readyDate" class="text-green">${store.formatDate(store.addDays(store.getCurrentDate(), 30))} (day 30)</strong>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  if (isFinance) {
    const updateBatchCalc = () => {
      const rawCost = Number(document.getElementById('b_rawCost').value) || 0;
      const labour = Number(document.getElementById('b_labour').value) || 0;
      const wrapping = Number(document.getElementById('b_wrapping').value) || 0;
      const machinery = Number(document.getElementById('b_machinery').value) || 0;
      const other = Number(document.getElementById('b_other').value) || 0;
      const bales = Number(document.getElementById('b_finishedBales').value) || 1;

      const total = rawCost + labour + wrapping + machinery + other;
      const perBale = Math.round(total / bales);
      const rawBale = Math.round(rawCost / bales);
      const labourBale = Math.round(labour / bales);
      const otherBale = Math.round((wrapping + machinery + other) / bales);

      document.getElementById('calc_totalProdCost').textContent = store.formatINR(total);
      document.getElementById('calc_costPerBale').textContent = `₹ ${perBale}`;
      document.getElementById('calc_rawPerBale').textContent = `₹ ${rawBale}`;
      document.getElementById('calc_labourPerBale').textContent = `₹ ${labourBale}`;
      document.getElementById('calc_otherPerBale').textContent = `₹ ${otherBale}`;

      const fermStart = document.getElementById('b_fermStart').value || store.getCurrentDate();
      document.getElementById('calc_readyDate').textContent = `${store.formatDate(store.addDays(fermStart, 30))} (day 30)`;
    };

    ['b_rawCost', 'b_labour', 'b_wrapping', 'b_machinery', 'b_other', 'b_finishedBales', 'b_fermStart'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', updateBatchCalc);
    });
  }

  document.getElementById('newBatchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    store.addBatch({
      batchNumber: document.getElementById('b_batchNumber').value,
      productionDate: document.getElementById('b_prodDate').value,
      rawMaterialKg: document.getElementById('b_rawKg').value,
      rawMaterialCost: isFinance ? document.getElementById('b_rawCost').value : 0,
      labourCost: isFinance ? document.getElementById('b_labour').value : 0,
      wrappingCost: isFinance ? document.getElementById('b_wrapping').value : 0,
      machineryCost: isFinance ? document.getElementById('b_machinery').value : 0,
      otherCost: isFinance ? document.getElementById('b_other').value : 0,
      finishedBales: document.getElementById('b_finishedBales').value,
      plotAssigned: document.getElementById('b_plotAssigned').value,
      fermentationStart: document.getElementById('b_fermStart').value
    });

    closeModal();
    renderProduction();
  });

  openModal();
};

// ----------------------------------------------------------------------------------
// 4.5 SALES, INVOICES & CUSTOMER CREDIT
// ----------------------------------------------------------------------------------
function renderSales() {
  const isFinance = store.canViewFinancials();
  if (!isFinance) {
    appContent.innerHTML = `<div style="padding:40px; text-align:center;">Staff cannot access sales invoices and customer credit records.</div>`;
    return;
  }

  const sales = store.data.sales;
  const customers = store.data.customers;
  const today = store.getCurrentDate();

  appContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        Sell from ready stock plots, issue invoices, track credit limits, and maintain append-only payment histories.
      </div>
      <div>
        <button class="btn-primary" onclick="window.openNewInvoiceModal()">＋ New Bale Invoice</button>
      </div>
    </div>

    <!-- Customer Credit Balances Summary -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin-bottom:24px;">
      ${customers.map(cust => `
        <div class="finance-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-weight:700; font-size:1.05rem; color:var(--primary-navy);">${cust.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${cust.phone}</div>
            </div>
            <span class="badge ${cust.balancePending > cust.creditLimit ? 'badge-overdue' : 'badge-receive'}">
              Limit: ${store.formatINR(cust.creditLimit, true)}
            </span>
          </div>

          <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-light); display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
            <div>
              <span style="color:var(--text-muted); font-size:0.75rem; display:block;">Total Purchases:</span>
              <strong>${store.formatINR(cust.totalPurchased)}</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); font-size:0.75rem; display:block;">Pending Receivable:</span>
              <strong style="color:var(--red-accent); font-size:1rem;">${store.formatINR(cust.balancePending)}</strong>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Invoices List Table -->
    <div class="section-box">
      <div class="section-box-header">
        <div class="box-title">Bale Invoices & Customer Receivables</div>
      </div>

      <div class="data-table-wrapper">
        <table class="app-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Bales Sold</th>
              <th>Rate / Bale</th>
              <th>Invoice Total</th>
              <th>Paid</th>
              <th>Pending</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${sales.map(s => {
              const isOverdue = s.balancePending > 0 && s.dueDate && new Date(s.dueDate) < new Date(today);
              return `
                <tr>
                  <td><strong style="color:var(--brand-blue);">${s.invoiceNumber}</strong></td>
                  <td>${store.formatDate(s.date)}</td>
                  <td><strong>${s.customerName}</strong></td>
                  <td>${store.formatNumber(s.balesCount)} bales</td>
                  <td>₹ ${s.ratePerBale}</td>
                  <td><strong>${store.formatINR(s.invoiceTotal)}</strong></td>
                  <td><span class="text-green">${store.formatINR(s.amountPaid)}</span></td>
                  <td>
                    <span class="${s.balancePending > 0 ? 'text-red' : 'text-green'} text-bold">
                      ${store.formatINR(s.balancePending)}
                    </span>
                    ${isOverdue ? '<span class="badge badge-overdue" style="margin-left:4px;">OVERDUE</span>' : ''}
                  </td>
                  <td>${store.formatDate(s.dueDate)}</td>
                  <td>
                    <span class="badge ${s.status === 'Paid' ? 'badge-ready' : 'badge-fermenting'}">
                      ${s.status}
                    </span>
                  </td>
                  <td>
                    <button class="btn-navy" style="padding:5px 10px; font-size:0.8rem;" onclick="window.viewInvoiceDetail('${s.id}')">
                      View / Pay
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------------
// VIEW INVOICE & APPEND-ONLY PAYMENT HISTORY (Wireframe 4.5)
// ----------------------------------------------------------------------------------
window.viewInvoiceDetail = function(invoiceId) {
  const sale = store.data.sales.find(s => s.id === invoiceId);
  if (!sale) return;

  const today = store.getCurrentDate();
  const isOverdue = sale.balancePending > 0 && sale.dueDate && new Date(sale.dueDate) < new Date(today);

  modalTitle.textContent = `Invoice ${sale.invoiceNumber} • ${sale.customerName}`;
  modalBody.innerHTML = `
    <!-- Top Summary Grid -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; background:var(--grey-bg); padding:18px; border-radius:var(--radius-md); margin-bottom:20px;">
      <div>
        <div style="font-size:0.82rem; color:var(--text-muted);">Invoice Total</div>
        <div style="font-size:1.35rem; font-weight:700; color:var(--primary-navy);">${store.formatINR(sale.invoiceTotal)}</div>
        <div style="font-size:0.85rem; color:var(--text-sub); margin-top:4px;">
          ${store.formatNumber(sale.balesCount)} bales @ ₹ ${sale.ratePerBale}
        </div>
      </div>

      <div>
        <div style="font-size:0.82rem; color:var(--text-muted);">Credit Pending</div>
        <div style="font-size:1.35rem; font-weight:700; color:${sale.balancePending > 0 ? 'var(--red-accent)' : 'var(--green-accent)'};">
          ${store.formatINR(sale.balancePending)}
        </div>
        <div style="font-size:0.85rem; margin-top:4px;">
          Due Date: <strong>${store.formatDate(sale.dueDate)}</strong>
          ${isOverdue ? '<span class="badge badge-overdue" style="margin-left:6px;">OVERDUE</span>' : ''}
        </div>
      </div>
    </div>

    <!-- Stock Source Allocation Breakdown -->
    <div style="margin-bottom:20px;">
      <h4 style="font-size:0.9rem; font-weight:700; margin-bottom:8px; color:var(--primary-navy);">Stock Taken From:</h4>
      <table class="app-table" style="font-size:0.82rem;">
        <thead>
          <tr>
            <th>Plot</th>
            <th>Batch</th>
            <th>Bales Dispatched</th>
          </tr>
        </thead>
        <tbody>
          ${(sale.stockAllocations || []).map(alloc => `
            <tr>
              <td><span class="badge badge-ready">Plot ${alloc.plotId}</span></td>
              <td><strong>${alloc.batchNumber}</strong></td>
              <td><strong>${store.formatNumber(alloc.bales)} bales</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- Payment History (Wireframe 4.5: Permanent, Append-Only) -->
    <div style="margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <h4 style="font-size:0.9rem; font-weight:700; color:var(--primary-navy);">
          Payment History <span style="font-weight:400; font-size:0.75rem; color:var(--text-muted);">(Append-only, permanent audit log)</span>
        </h4>
      </div>

      <table class="app-table" style="font-size:0.82rem;">
        <thead>
          <tr>
            <th>Date</th>
            <th>Mode</th>
            <th>Amount Paid</th>
            <th>Balance After</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          ${(sale.paymentHistory && sale.paymentHistory.length > 0) ? sale.paymentHistory.map(pay => `
            <tr>
              <td>${pay.date}</td>
              <td><span class="badge badge-blue">${pay.mode}</span></td>
              <td><strong class="text-green">${store.formatINR(pay.amountPaid)}</strong></td>
              <td><strong>${store.formatINR(pay.balanceAfter)}</strong></td>
              <td>${pay.note || '--'}</td>
            </tr>
          `).join('') : `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No payments recorded yet</td></tr>`}
        </tbody>
      </table>
    </div>

    <!-- Action Buttons -->
    <div style="display:flex; gap:10px; justify-content:flex-end;">
      ${sale.balancePending > 0 ? `
        <button class="btn-primary" onclick="window.openAddPaymentModal('${sale.id}')">
          ＋ Add Payment
        </button>
      ` : ''}
      <button class="btn-secondary" onclick="window.attachSaleReceipt('${sale.id}')">
        📎 Attach Receipt
      </button>
    </div>
  `;

  openModal();
};

window.openAddPaymentModal = function(saleId) {
  const sale = store.data.sales.find(s => s.id === saleId);
  if (!sale) return;

  modalTitle.textContent = `Record Payment • ${sale.invoiceNumber}`;
  modalBody.innerHTML = `
    <form id="recordPaymentForm">
      <div style="background:var(--grey-bg); padding:12px; border-radius:var(--radius-md); margin-bottom:16px;">
        <div>Customer: <strong>${sale.customerName}</strong></div>
        <div>Current Pending: <strong class="text-red">${store.formatINR(sale.balancePending)}</strong></div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Payment Date</label>
          <input type="text" id="pay_date" class="form-input" value="${store.formatDate(store.getCurrentDate())}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Amount Paid (₹)</label>
          <input type="number" id="pay_amount" class="form-input" max="${sale.balancePending}" value="${Math.min(40000, sale.balancePending)}" min="1" required />
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Payment Mode</label>
          <select id="pay_mode" class="form-select">
            <option value="UPI">UPI</option>
            <option value="Cash" selected>Cash</option>
            <option value="Bank Transfer">Bank Transfer (NEFT/RTGS)</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Payment Note</label>
          <input type="text" id="pay_note" class="form-input" value="Part payment" />
        </div>
      </div>

      <div style="font-size:0.78rem; color:var(--text-muted); margin:12px 0;">
        ⚠️ Payment entries are append-only and cannot be altered once saved.
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="btn-secondary" onclick="window.viewInvoiceDetail('${sale.id}')">Back</button>
        <button type="submit" class="btn-primary">Record Payment</button>
      </div>
    </form>
  `;

  document.getElementById('recordPaymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    store.addSalePayment(sale.id, {
      date: document.getElementById('pay_date').value,
      amountPaid: document.getElementById('pay_amount').value,
      mode: document.getElementById('pay_mode').value,
      note: document.getElementById('pay_note').value
    });

    window.viewInvoiceDetail(sale.id);
  });
};

// ----------------------------------------------------------------------------------
// NEW SALE / INVOICE CREATION MODAL
// ----------------------------------------------------------------------------------
window.openNewInvoiceModal = function(opts = {}) {
  const readyPlots = store.data.plots.filter(p => p.status === 'Ready' && p.bales > 0);
  const customers = store.data.customers;

  modalTitle.textContent = 'New Bale Invoice';
  modalBody.innerHTML = `
    <form id="newSaleInvoiceForm">
      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label">Customer</label>
          <select id="s_customer" class="form-select" required>
            ${customers.map(c => `<option value="${c.id}">${c.name} (Bal: ${store.formatINR(c.balancePending)})</option>`).join('')}
            <option value="new">+ Add New Customer</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Invoice Date</label>
          <input type="date" id="s_date" class="form-input" value="${store.getCurrentDate()}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Due Date for Balance</label>
          <input type="date" id="s_dueDate" class="form-input" value="${store.addDays(store.getCurrentDate(), 30)}" required />
        </div>
      </div>

      <!-- Ready Plots Multi-Selector (Only Ready Plots Allowed) -->
      <div style="background:#f0fdf4; border:1px solid var(--green-border); border-radius:var(--radius-md); padding:16px; margin-bottom:16px;">
        <div style="font-weight:700; color:var(--green-text); font-size:0.9rem; margin-bottom:8px;">
          🌾 Select Ready Plots for Stock Dispatch
        </div>
        ${readyPlots.length === 0 ? `<div style="color:var(--text-muted); font-size:0.85rem;">No ready-for-sale plots available! Complete fermentation first.</div>` : ''}
        
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:10px;">
          ${readyPlots.map(p => {
            const isChecked = opts.preselectedPlotId === p.id;
            return `
              <label style="display:flex; align-items:center; gap:8px; background:#fff; padding:8px 10px; border-radius:var(--radius-sm); border:1px solid var(--border-light); cursor:pointer;">
                <input type="checkbox" name="selectedReadyPlots" value="${p.id}" data-max="${p.bales}" ${isChecked ? 'checked' : ''} />
                <div>
                  <strong>Plot ${p.id}</strong> (${p.batchNumber})
                  <div style="font-size:0.75rem; color:var(--text-muted);">${p.bales} bales available</div>
                </div>
              </label>
            `;
          }).join('')}
        </div>
      </div>

      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label">Total Bales Sold</label>
          <input type="number" id="s_balesCount" class="form-input" value="700" min="1" required />
        </div>
        <div class="form-group">
          <label class="form-label">Rate / Bale (₹)</label>
          <input type="number" id="s_ratePerBale" class="form-input" value="285" min="1" required />
        </div>
        <div class="form-group">
          <label class="form-label">GST Rate (%)</label>
          <input type="number" id="s_gstRate" class="form-input" value="0" min="0" max="28" />
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Amount Paid Now (Advance ₹)</label>
          <input type="number" id="s_amountPaid" class="form-input" value="50000" min="0" />
        </div>
        <div class="form-group">
          <label class="form-label">Payment Mode</label>
          <select id="s_mode" class="form-select">
            <option value="UPI" selected>UPI</option>
            <option value="Cash">Cash</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
      </div>

      <!-- Live Calculation Card -->
      <div style="background:var(--grey-bg); border-radius:var(--radius-md); padding:14px; margin:16px 0; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Invoice Total:</span>
          <div style="font-size:1.3rem; font-weight:700; color:var(--brand-blue);" id="s_calcInvoiceTotal">₹ 1,99,500</div>
        </div>
        <div>
          <span style="font-size:0.8rem; color:var(--text-muted);">Balance Pending:</span>
          <div style="font-size:1.3rem; font-weight:700; color:var(--red-accent);" id="s_calcPending">₹ 1,49,500</div>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Generate Invoice</button>
      </div>
    </form>
  `;

  const updateSaleCalc = () => {
    const bales = Number(document.getElementById('s_balesCount').value) || 0;
    const rate = Number(document.getElementById('s_ratePerBale').value) || 0;
    const gstRate = Number(document.getElementById('s_gstRate').value) || 0;
    const paid = Number(document.getElementById('s_amountPaid').value) || 0;

    const sub = bales * rate;
    const gst = Math.round((sub * gstRate) / 100);
    const total = sub + gst;
    const pending = Math.max(0, total - paid);

    document.getElementById('s_calcInvoiceTotal').textContent = store.formatINR(total);
    document.getElementById('s_calcPending').textContent = store.formatINR(pending);
  };

  ['s_balesCount', 's_ratePerBale', 's_gstRate', 's_amountPaid'].forEach(id => {
    document.getElementById(id).addEventListener('input', updateSaleCalc);
  });

  document.getElementById('newSaleInvoiceForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const custId = document.getElementById('s_customer').value;
    const customer = store.data.customers.find(c => c.id === custId) || { name: 'Direct Customer' };

    // Collect plot allocations
    const checkedCheckboxes = Array.from(document.querySelectorAll('input[name="selectedReadyPlots"]:checked'));
    const totalBales = Number(document.getElementById('s_balesCount').value) || 0;
    let remainingToAllocate = totalBales;
    const allocations = [];

    checkedCheckboxes.forEach(cb => {
      const plotId = cb.value;
      const plot = store.data.plots.find(p => p.id === plotId);
      if (plot && remainingToAllocate > 0) {
        const take = Math.min(plot.bales, remainingToAllocate);
        allocations.push({ plotId, bales: take });
        remainingToAllocate -= take;
      }
    });

    store.addSale({
      customerId: custId,
      customerName: customer.name,
      date: document.getElementById('s_date').value,
      dueDate: document.getElementById('s_dueDate').value,
      balesCount: totalBales,
      ratePerBale: document.getElementById('s_ratePerBale').value,
      gstRate: document.getElementById('s_gstRate').value,
      amountPaid: document.getElementById('s_amountPaid').value,
      paymentMode: document.getElementById('s_mode').value,
      allocations
    });

    closeModal();
    renderSales();
  });

  openModal();
};

// ----------------------------------------------------------------------------------
// 4.6 EXPENSES
// ----------------------------------------------------------------------------------
function renderExpenses() {
  const isFinance = store.canViewFinancials();
  if (!isFinance) {
    appContent.innerHTML = `<div style="padding:40px; text-align:center;">Staff cannot access operating expenses.</div>`;
    return;
  }

  const expenses = store.data.expenses;

  appContent.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        Record every business expense in one simple list so profit is always based on real numbers.
      </div>
      <div>
        <button class="btn-primary" onclick="window.openNewExpenseModal()">＋ Add Expense</button>
      </div>
    </div>

    <!-- Expenses Table -->
    <div class="section-box">
      <div class="section-box-header">
        <div class="box-title">Operating & Factory Expense Log</div>
      </div>

      <div class="data-table-wrapper">
        <table class="app-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Paid To</th>
              <th>Reason / Particulars</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Related Batch</th>
              <th>Attachment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${expenses.map(exp => `
              <tr>
                <td>${store.formatDate(exp.date)}</td>
                <td><strong>${exp.paidTo}</strong></td>
                <td>${exp.reason}</td>
                <td><span class="badge badge-blue">${exp.category}</span></td>
                <td><strong class="text-red">${store.formatINR(exp.amount)}</strong></td>
                <td>${exp.mode}</td>
                <td>${exp.relatedBatch ? `<strong style="color:var(--brand-blue);">${exp.relatedBatch}</strong>` : '--'}</td>
                <td>
                  ${exp.attachment ? `
                    <button class="attach-btn" onclick="window.viewAttachment('${exp.attachment.name}')">
                      📎 Bill
                    </button>
                  ` : '<span style="color:var(--text-muted); font-size:0.8rem;">None</span>'}
                </td>
                <td>
                  <button class="btn-danger" onclick="window.deleteExpense('${exp.id}')">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

window.openNewExpenseModal = function() {
  modalTitle.textContent = 'Add Business Expense';
  modalBody.innerHTML = `
    <form id="newExpenseForm">
      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Paid To</label>
          <input type="text" id="exp_paidTo" class="form-input" placeholder="e.g. Diesel pump, Factory Labour Gang" required />
        </div>
        <div class="form-group">
          <label class="form-label">Amount (₹)</label>
          <input type="number" id="exp_amount" class="form-input" min="1" placeholder="e.g. 3500" required />
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" id="exp_date" class="form-input" value="${store.getCurrentDate()}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Payment Mode</label>
          <select id="exp_mode" class="form-select">
            <option value="Cash" selected>Cash</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Category</label>
          <select id="exp_category" class="form-select">
            <option value="Production" selected>Production (Labour, wrapping, fuel, electricity)</option>
            <option value="Employees">Employees (Salaries, daily wages, advances)</option>
            <option value="Transport">Transport (Freight, driver payments)</option>
            <option value="Factory">Factory (Rent, water, repairs)</option>
            <option value="Sales">Sales (Commission, brokerage, delivery)</option>
            <option value="Office and admin">Office and admin (Accountant, phone, internet)</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Related Batch (Optional)</label>
          <select id="exp_batch" class="form-select">
            <option value="">None (General Factory Expense)</option>
            ${store.data.batches.map(b => `<option value="${b.batchNumber}">${b.batchNumber}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-group mb-16">
        <label class="form-label">Reason / Particulars</label>
        <input type="text" id="exp_reason" class="form-input" placeholder="e.g. Baler machinery diesel & tractor fuel" required />
      </div>

      <!-- Attachment Simulation -->
      <div class="attachment-box">
        <div>
          <div style="font-weight:600; font-size:0.85rem;">Attach Bill Photo / Voucher (Optional)</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Proof for audits and taxation</div>
        </div>
        <div class="attachment-buttons">
          <label class="attach-btn" style="cursor:pointer;">
            📷 Photo / File
            <input type="file" id="exp_fileInput" style="display:none;" />
          </label>
          <span id="expAttachmentTag" class="attach-preview-tag">receipt.jpg</span>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Save Expense</button>
      </div>
    </form>
  `;

  document.getElementById('newExpenseForm').addEventListener('submit', (e) => {
    e.preventDefault();
    store.addExpense({
      paidTo: document.getElementById('exp_paidTo').value,
      amount: document.getElementById('exp_amount').value,
      date: document.getElementById('exp_date').value,
      mode: document.getElementById('exp_mode').value,
      category: document.getElementById('exp_category').value,
      relatedBatch: document.getElementById('exp_batch').value,
      reason: document.getElementById('exp_reason').value,
      attachment: { name: document.getElementById('expAttachmentTag').textContent, type: 'image' }
    });

    closeModal();
    renderExpenses();
  });

  openModal();
};

window.deleteExpense = function(id) {
  if (confirm('Are you sure you want to delete this expense record?')) {
    store.deleteRecord('expense', id);
    renderExpenses();
  }
};

// ----------------------------------------------------------------------------------
// 4.7 REPORTS (Profit & Loss, Balances, Cost & Profit Per Batch, Excel Export)
// ----------------------------------------------------------------------------------
let activeReportTab = 'pnl';

function renderReports() {
  const isFinance = store.canViewFinancials();
  if (!isFinance) {
    appContent.innerHTML = `<div style="padding:40px; text-align:center;">Staff cannot access financial reports.</div>`;
    return;
  }

  appContent.innerHTML = `
    <!-- Reports Sub-navigation & Export -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div class="filters-group">
        <button class="filter-chip ${activeReportTab === 'pnl' ? 'active' : ''}" onclick="window.switchReport('pnl')">📊 Profit & Loss</button>
        <button class="filter-chip ${activeReportTab === 'customers' ? 'active' : ''}" onclick="window.switchReport('customers')">💼 Customer Balances</button>
        <button class="filter-chip ${activeReportTab === 'suppliers' ? 'active' : ''}" onclick="window.switchReport('suppliers')">🛒 Supplier Balances</button>
        <button class="filter-chip ${activeReportTab === 'batches' ? 'active' : ''}" onclick="window.switchReport('batches')">🏭 Cost & Profit / Batch</button>
      </div>

      <div>
        <button class="btn-navy" onclick="window.exportCurrentReport()">📥 Download Excel / CSV</button>
      </div>
    </div>

    <!-- Active Report Body -->
    <div id="reportContainer">
      ${renderActiveReportContent()}
    </div>
  `;
}

function renderActiveReportContent() {
  if (activeReportTab === 'pnl') {
    const totalSales = store.data.sales.reduce((sum, s) => sum + s.invoiceTotal, 0);
    const totalCOGS = store.data.sales.reduce((sum, s) => sum + (s.cogsTotal || (s.balesCount * 218)), 0);
    const grossProfit = totalSales - totalCOGS;

    // Group expenses by category
    const categoryTotals = {};
    store.data.expenses.forEach(e => {
      categoryTotals[e.category] = (categoryTotals[e.category] || 0) + Number(e.amount);
    });
    const totalExpenses = Object.values(categoryTotals).reduce((a, b) => a + b, 0);
    const netProfit = grossProfit - totalExpenses;

    return `
      <div class="section-box" style="max-width:850px; margin:0 auto;">
        <div class="section-box-header">
          <div class="box-title">Profit & Loss Statement (Comprehensive)</div>
          <span style="font-size:0.85rem; color:var(--text-muted);">Calculated automatically from system entries</span>
        </div>

        <table class="app-table">
          <tbody>
            <tr style="background:#f8fafc; font-weight:700;">
              <td>Revenue from Bale Sales</td>
              <td style="text-align:right; font-size:1.1rem; color:var(--brand-blue);">${store.formatINR(totalSales)}</td>
            </tr>
            <tr>
              <td style="padding-left:24px; color:var(--text-sub);">Less: Cost of Goods Sold (COGS from batches)</td>
              <td style="text-align:right; color:var(--red-accent);">${store.formatINR(totalCOGS)}</td>
            </tr>
            <tr style="background:#f0fdf4; font-weight:700; border-top:2px solid var(--border-light); border-bottom:2px solid var(--border-light);">
              <td>Gross Profit</td>
              <td style="text-align:right; font-size:1.15rem; color:var(--green-text);">${store.formatINR(grossProfit)}</td>
            </tr>

            <tr style="background:#f8fafc; font-weight:700;">
              <td colspan="2">Operating Expenses by Category</td>
            </tr>
            ${Object.entries(categoryTotals).map(([cat, amt]) => `
              <tr>
                <td style="padding-left:24px; color:var(--text-sub);">${cat} Expenses</td>
                <td style="text-align:right;">${store.formatINR(amt)}</td>
              </tr>
            `).join('')}
            <tr style="font-weight:600; color:var(--red-text);">
              <td style="padding-left:24px;">Total Operating Expenses</td>
              <td style="text-align:right;">${store.formatINR(totalExpenses)}</td>
            </tr>

            <tr style="background:${netProfit >= 0 ? '#dcfce7' : '#fee2e2'}; font-weight:700; font-size:1.25rem;">
              <td>Net Profit (Before Tax)</td>
              <td style="text-align:right; color:${netProfit >= 0 ? 'var(--green-text)' : 'var(--red-text)'};">${store.formatINR(netProfit)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  if (activeReportTab === 'customers') {
    return `
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">Customer Balances & Receivables</div>
        </div>
        <table class="app-table" id="exportTable">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total Purchased</th>
              <th>Total Paid</th>
              <th>Balance Pending</th>
              <th>Credit Limit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${store.data.customers.map(c => `
              <tr>
                <td><strong>${c.name}</strong></td>
                <td>${c.phone}</td>
                <td>${store.formatINR(c.totalPurchased)}</td>
                <td>${store.formatINR(c.totalPaid)}</td>
                <td><strong class="text-red">${store.formatINR(c.balancePending)}</strong></td>
                <td>${store.formatINR(c.creditLimit)}</td>
                <td>
                  <span class="badge ${c.balancePending > 0 ? 'badge-overdue' : 'badge-ready'}">
                    ${c.balancePending > 0 ? 'Pending Dues' : 'Zero Balance'}
                  </span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  if (activeReportTab === 'suppliers') {
    return `
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">Supplier Balances & Payables</div>
        </div>
        <table class="app-table" id="exportTable">
          <thead>
            <tr>
              <th>Supplier</th>
              <th>Phone</th>
              <th>City</th>
              <th>Total Purchased</th>
              <th>Total Paid</th>
              <th>Balance Pending</th>
            </tr>
          </thead>
          <tbody>
            ${store.data.suppliers.map(s => `
              <tr>
                <td><strong>${s.name}</strong></td>
                <td>${s.phone}</td>
                <td>${s.city}</td>
                <td>${store.formatINR(s.totalPurchased)}</td>
                <td>${store.formatINR(s.totalPaid)}</td>
                <td><strong class="text-red">${store.formatINR(s.balancePending)}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  if (activeReportTab === 'batches') {
    return `
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">Cost and Profit per Batch</div>
        </div>
        <table class="app-table" id="exportTable">
          <thead>
            <tr>
              <th>Batch</th>
              <th>Finished Bales</th>
              <th>Total Prod Cost</th>
              <th>Cost / Bale</th>
              <th>Estimated Revenue (@ ₹285)</th>
              <th>Batch Profit</th>
              <th>Profit / Bale</th>
            </tr>
          </thead>
          <tbody>
            ${store.data.batches.map(b => {
              const estRevenue = b.finishedBales * 285;
              const batchProfit = estRevenue - b.totalProductionCost;
              const profitPerBale = 285 - b.costPerBale;
              return `
                <tr>
                  <td><strong style="color:var(--brand-blue);">${b.batchNumber}</strong></td>
                  <td>${store.formatNumber(b.finishedBales)}</td>
                  <td>${store.formatINR(b.totalProductionCost)}</td>
                  <td><span class="badge badge-blue">₹ ${b.costPerBale}</span></td>
                  <td>${store.formatINR(estRevenue)}</td>
                  <td><strong class="text-green">${store.formatINR(batchProfit)}</strong></td>
                  <td><span class="badge badge-ready">+ ₹ ${profitPerBale} / bale</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

window.switchReport = function(tab) {
  activeReportTab = tab;
  renderReports();
};

window.exportCurrentReport = function() {
  const table = document.querySelector('.section-box table');
  if (!table) return alert('No table found to export');

  let csvContent = 'data:text/csv;charset=utf-8,';
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
    const cols = row.querySelectorAll('th, td');
    const rowData = Array.from(cols).map(col => `"${col.innerText.replace(/"/g, '""').replace(/\n/g, ' ')}"`);
    csvContent += rowData.join(',') + '\r\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `bale_report_${activeReportTab}_${store.getCurrentDate()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// ----------------------------------------------------------------------------------
// 4.9 SETTINGS
// ----------------------------------------------------------------------------------
function renderSettings() {
  const isOwner = store.canManageUsers();

  appContent.innerHTML = `
    <div style="max-width:800px; margin:0 auto;">
      <!-- Fermentation & System Configurations -->
      <div class="section-box mb-20">
        <div class="section-box-header">
          <div class="box-title">⚙️ Factory & Fermentation Parameters</div>
        </div>

        <form id="settingsForm">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Fermentation Duration (Days)</label>
              <input type="number" id="setting_fermDays" class="form-input" value="${store.data.settings.fermentationDays}" min="1" max="90" required />
              <small style="color:var(--text-muted); font-size:0.75rem;">Default 30 days. Day 30 automatically flags batch as Ready.</small>
            </div>
            <div class="form-group">
              <label class="form-label">Simulation Current Date (YYYY-MM-DD)</label>
              <input type="date" id="setting_currentDate" class="form-input" value="${store.getCurrentDate()}" required />
              <small style="color:var(--text-muted); font-size:0.75rem;">Change date to test fermentation day increments.</small>
            </div>
          </div>

          <div style="display:flex; justify-content:flex-end; margin-top:16px;">
            <button type="submit" class="btn-primary">Save Settings</button>
          </div>
        </form>
      </div>

      <!-- Add New Plots Expansion -->
      <div class="section-box mb-20">
        <div class="section-box-header">
          <div class="box-title">🌱 Add New Yard Plot (Section C & D)</div>
        </div>
        <form id="addPlotForm">
          <div class="form-grid-2">
            <div class="form-group">
              <label class="form-label">Plot Identifier</label>
              <input type="text" id="new_plotId" class="form-input" placeholder="e.g. C3, D2" required />
            </div>
            <div class="form-group">
              <label class="form-label">Section</label>
              <select id="new_plotSection" class="form-select">
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C" selected>Section C</option>
                <option value="D">Section D</option>
              </select>
            </div>
          </div>
          <div style="display:flex; justify-content:flex-end; margin-top:16px;">
            <button type="submit" class="btn-navy">+ Create Plot</button>
          </div>
        </form>
      </div>

      <!-- Factory Reset Data -->
      <div class="section-box" style="border-color:#fca5a5; background:#fff5f5;">
        <div class="section-box-header" style="border-color:#fecaca;">
          <div class="box-title" style="color:#b91c1c;">⚠️ Sample Data & Reset</div>
        </div>
        <p style="font-size:0.85rem; color:#7f1d1d; margin-bottom:14px;">
          Restore the app state back to the official Version 1 PRD wireframe figures (K. Rao Traders, Sri Hay Traders, Plots A1-A40).
        </p>
        <button class="btn-danger" onclick="window.resetData()">Reset to Wireframe Defaults</button>
      </div>
    </div>
  `;

  document.getElementById('settingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    store.data.settings.fermentationDays = Number(document.getElementById('setting_fermDays').value);
    store.setCurrentDate(document.getElementById('setting_currentDate').value);
    alert('Settings saved successfully!');
    renderSettings();
  });

  document.getElementById('addPlotForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const plotId = document.getElementById('new_plotId').value.trim().toUpperCase();
    const section = document.getElementById('new_plotSection').value;
    try {
      store.addPlot(plotId, section);
      alert(`Plot ${plotId} created successfully in Section ${section}!`);
      document.getElementById('new_plotId').value = '';
    } catch (err) {
      alert(err.message);
    }
  });
}

window.resetData = function() {
  if (confirm('Reset all plots, batches, purchases, and sales to default wireframe figures?')) {
    store.resetToDefault();
    render();
    alert('Reset complete!');
  }
};

// ----------------------------------------------------------------------------------
// ATTACHMENT VIEWING MODAL (Section 4.8)
// ----------------------------------------------------------------------------------
window.viewAttachment = function(fileName) {
  modalTitle.textContent = `Attachment: ${fileName}`;
  modalBody.innerHTML = `
    <div style="text-align:center; padding:20px; background:var(--grey-bg); border-radius:var(--radius-md);">
      <div style="font-size:3rem; margin-bottom:10px;">📄</div>
      <div style="font-weight:700; font-size:1.1rem; color:var(--primary-navy);">${fileName}</div>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">Official Invoice / Weighment Receipt Attachment</div>

      <div style="border:1px dashed #cbd5e1; border-radius:var(--radius-md); padding:20px; background:#fff; margin:20px auto; max-width:400px; text-align:left; font-family:monospace; font-size:0.8rem; line-height:1.6;">
        --- OFFICIAL TAX DOCUMENT ---<br/>
        File: ${fileName}<br/>
        Verified By: Agro Weighbridge Station #2<br/>
        Format: PDF / High-Res Image<br/>
        Status: Verified & Stored on Cloud
      </div>

      <div style="display:flex; justify-content:center; gap:10px; margin-top:16px;">
        <button class="btn-navy" onclick="alert('Downloading attachment ${fileName}...')">📥 Download File</button>
        <button class="btn-secondary" onclick="window.closeModal()">Close</button>
      </div>
    </div>
  `;
  openModal();
};

window.attachSaleReceipt = function(saleId) {
  modalTitle.textContent = `Attach Payment Receipt`;
  modalBody.innerHTML = `
    <div style="padding:10px;">
      <div class="attachment-box">
        <div>
          <div style="font-weight:600; font-size:0.85rem;">Upload Bank Counterfoil or Payment Screenshot</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">Stored permanently against this invoice</div>
        </div>
        <div class="attachment-buttons">
          <input type="file" id="receiptFile" class="form-input" />
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px;">
        <button class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button class="btn-primary" onclick="alert('Receipt uploaded successfully!'); window.closeModal();">Save Receipt</button>
      </div>
    </div>
  `;
  openModal();
};

// ----------------------------------------------------------------------------------
// Quick Action Router
// ----------------------------------------------------------------------------------
function handleQuickAction(action) {
  switch (action) {
    case 'new-expense':
      window.openNewExpenseModal();
      break;
    case 'new-production':
      window.openNewBatchModal();
      break;
    case 'new-purchase':
      window.openNewPurchaseModal();
      break;
    case 'new-sale':
      window.openNewInvoiceModal();
      break;
    case 'update-stock':
      window.openMoveStockModal('A1');
      break;
  }
}

// Modal Open/Close
function openModal() {
  commonModalOverlay.classList.add('open');
}

function closeModal() {
  commonModalOverlay.classList.remove('open');
}

// Global helpers for inline HTML event handlers
window.appNav = navigateTo;
window.closeModal = closeModal;
window.setPlotSection = (sec) => { activePlotSection = sec; renderPlots(); };
window.setPlotStatus = (st) => { activePlotFilter = st; renderPlots(); };
window.openAddPlotModal = () => { navigateTo('settings'); };

// Boot app
init();
