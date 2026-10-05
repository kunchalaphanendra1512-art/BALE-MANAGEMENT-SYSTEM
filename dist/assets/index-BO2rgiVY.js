(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}})();const G={settings:{fermentationDays:30,currencySymbol:"INR",companyName:"Sri Balaji Agro Bales",gstin:"36AAAAA0000A1Z5",phone:"+91 98765 43210",address:"Plot 45, Industrial Area, Warangal, Telangana - 506001",currentDate:"2026-10-05",activeRole:"Owner"},rawMaterial:{stockKg:42500,averageCostPerKg:4.8},suppliers:[{id:"sup-1",name:"K. Rao Traders",phone:"+91 94401 23456",city:"Khammam",totalPurchased:58e4,totalPaid:493e3,balancePending:87e3},{id:"sup-2",name:"Supplier K. Rao",phone:"+91 98480 11223",city:"Nalgonda",totalPurchased:245e3,totalPaid:19e4,balancePending:55e3},{id:"sup-3",name:"Krishna Biomass Depot",phone:"+91 91234 56789",city:"Miryalaguda",totalPurchased:31e4,totalPaid:26e4,balancePending:5e4}],customers:[{id:"cust-1",name:"Sri Hay Traders",phone:"+91 98850 99887",address:"Shop 14, Grain Market, Hyderabad",gstNumber:"36ABCDE1234F1Z8",creditLimit:3e5,totalPurchased:125e4,totalPaid:11e5,balancePending:15e4,lastPurchaseDate:"10-10-2026"},{id:"cust-2",name:"Ravi Farms",phone:"+91 97000 44556",address:"Dairy Complex Road, Karimnagar",gstNumber:"36FGHIJ5678K1Z2",creditLimit:25e4,totalPurchased:84e4,totalPaid:73e4,balancePending:11e4,lastPurchaseDate:"28-09-2026"},{id:"cust-3",name:"Deccan Agro Exports",phone:"+91 99490 88776",address:"Dry Port Hub, Secunderabad",gstNumber:"36KLMNO9012P1Z4",creditLimit:5e5,totalPurchased:16e5,totalPaid:1375e3,balancePending:225e3,lastPurchaseDate:"01-10-2026"}],purchases:[{id:"pur-1",supplierId:"sup-1",supplierName:"K. Rao Traders",date:"2026-10-03",invoiceNo:"KR-4471",material:"Hay (loose)",quantity:30,unit:"ton",rate:4e3,materialCost:12e4,transport:12e3,loading:2e3,commission:3e3,other:0,gstRate:0,gstAmount:0,actualCost:137e3,amountPaid:5e4,balancePending:87e3,paymentMode:"UPI",dueDate:"2026-10-30",rateVsLastBuy:"neutral",rateDifference:0,attachment:{name:"bill_kr4471.pdf",type:"pdf",date:"03-10-2026"}},{id:"pur-2",supplierId:"sup-2",supplierName:"Supplier K. Rao",date:"2026-09-24",invoiceNo:"SKR-889",material:"Hay (loose)",quantity:25,unit:"ton",rate:3900,materialCost:97500,transport:1e4,loading:1500,commission:2e3,other:0,gstRate:0,gstAmount:0,actualCost:111e3,amountPaid:56e3,balancePending:55e3,paymentMode:"Bank Transfer",dueDate:"2026-10-08",rateVsLastBuy:"down",rateDifference:-100,attachment:{name:"bill_skr889.jpg",type:"image",date:"24-09-2026"}}],batches:[{id:"batch-1",batchNumber:"HB-2026-08-007",productionDate:"2026-08-15",rawMaterialKg:28e3,rawMaterialCost:19e4,labourCost:17500,wrappingCost:11500,machineryCost:8500,otherCost:3500,totalProductionCost:231e3,finishedBales:1060,costPerBale:218,rawMaterialPerBale:179,labourPerBale:16.5,otherPerBale:22.5,plotAssigned:"A1",fermentationStart:"2026-08-15",readyDate:"2026-09-14",status:"Ready"},{id:"batch-2",batchNumber:"HB-2026-09-014",productionDate:"2026-09-17",rawMaterialKg:24e3,rawMaterialCost:165e3,labourCost:15e3,wrappingCost:1e4,machineryCost:7500,otherCost:3500,totalProductionCost:201e3,finishedBales:920,costPerBale:218,rawMaterialPerBale:179,labourPerBale:16,otherPerBale:23,plotAssigned:"A12",fermentationStart:"2026-09-17",readyDate:"2026-10-17",status:"Fermenting"},{id:"batch-3",batchNumber:"HB-2026-09-016",productionDate:"2026-09-19",rawMaterialKg:25e3,rawMaterialCost:172e3,labourCost:16e3,wrappingCost:11e3,machineryCost:8e3,otherCost:3e3,totalProductionCost:21e4,finishedBales:950,costPerBale:221,rawMaterialPerBale:181,labourPerBale:17,otherPerBale:23,plotAssigned:"A13",fermentationStart:"2026-09-19",readyDate:"2026-10-19",status:"Fermenting"},{id:"batch-4",batchNumber:"HB-2026-09-019",productionDate:"2026-09-24",rawMaterialKg:24500,rawMaterialCost:17e4,labourCost:15500,wrappingCost:10500,machineryCost:7800,otherCost:3200,totalProductionCost:207e3,finishedBales:930,costPerBale:222,rawMaterialPerBale:183,labourPerBale:17,otherPerBale:22,plotAssigned:"B3",fermentationStart:"2026-09-24",readyDate:"2026-10-24",status:"Fermenting"},{id:"batch-5",batchNumber:"HB-2026-10-001",productionDate:"2026-10-03",rawMaterialKg:26500,rawMaterialCost:195e3,labourCost:18e3,wrappingCost:12e3,machineryCost:9e3,otherCost:4e3,totalProductionCost:238e3,finishedBales:875,costPerBale:272,rawMaterialPerBale:223,labourPerBale:21,otherPerBale:28,plotAssigned:"A17",fermentationStart:"2026-10-03",readyDate:"2026-11-02",status:"Fermenting"}],plots:[{id:"A1",section:"A",bales:200,batchId:"batch-1",batchNumber:"HB-2026-08-007",prodDate:"2026-08-15",fermStart:"2026-08-15",costPerBale:218,status:"Ready"},{id:"A2",section:"A",bales:180,batchId:"batch-1",batchNumber:"HB-2026-08-007",prodDate:"2026-08-15",fermStart:"2026-08-15",costPerBale:218,status:"Ready"},{id:"A3",section:"A",bales:220,batchId:"batch-2",batchNumber:"HB-2026-09-14",prodDate:"2026-09-21",fermStart:"2026-09-21",costPerBale:220,status:"Fermenting"},{id:"A4",section:"A",bales:190,batchId:"batch-2",batchNumber:"HB-2026-09-14",prodDate:"2026-09-19",fermStart:"2026-09-19",costPerBale:220,status:"Fermenting"},{id:"A5",section:"A",bales:240,batchId:"batch-2",batchNumber:"HB-2026-09-14",prodDate:"2026-09-17",fermStart:"2026-09-17",costPerBale:220,status:"Fermenting"},{id:"A6",section:"A",bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"},{id:"A12",section:"A",bales:180,batchId:"batch-2",batchNumber:"HB-2026-09-014",prodDate:"2026-09-17",fermStart:"2026-09-17",costPerBale:218,status:"Fermenting"},{id:"A13",section:"A",bales:220,batchId:"batch-3",batchNumber:"HB-2026-09-016",prodDate:"2026-09-19",fermStart:"2026-09-19",costPerBale:221,status:"Fermenting"},{id:"A17",section:"A",bales:875,batchId:"batch-5",batchNumber:"HB-2026-10-001",prodDate:"2026-10-03",fermStart:"2026-10-03",costPerBale:272,status:"Fermenting"},{id:"B1",section:"B",bales:150,batchId:"batch-3",batchNumber:"HB-2026-09-13",prodDate:"2026-09-13",fermStart:"2026-09-13",costPerBale:215,status:"Fermenting"},{id:"B2",section:"B",bales:210,batchId:"batch-3",batchNumber:"HB-2026-09-11",prodDate:"2026-09-11",fermStart:"2026-09-11",costPerBale:215,status:"Fermenting"},{id:"B3",section:"B",bales:175,batchId:"batch-1",batchNumber:"HB-2026-08-007",prodDate:"2026-08-15",fermStart:"2026-08-15",costPerBale:218,status:"Ready"},{id:"B4",section:"B",bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"},{id:"B5",section:"B",bales:230,batchId:"batch-4",batchNumber:"HB-2026-09-22",prodDate:"2026-09-22",fermStart:"2026-09-22",costPerBale:220,status:"Fermenting"},{id:"B6",section:"B",bales:200,batchId:"batch-1",batchNumber:"HB-2026-08-007",prodDate:"2026-08-15",fermStart:"2026-08-15",costPerBale:218,status:"Ready"},{id:"B7",section:"B",bales:485,batchId:"batch-1",batchNumber:"HB-2026-08-007",prodDate:"2026-08-15",fermStart:"2026-08-15",costPerBale:218,status:"Ready"},{id:"C1",section:"C",bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"},{id:"C2",section:"C",bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"},{id:"D1",section:"D",bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"}],sales:[{id:"inv-0042",invoiceNumber:"INV-0042",customerId:"cust-1",customerName:"Sri Hay Traders",date:"2026-10-02",dueDate:"2026-11-02",balesCount:700,ratePerBale:285,subtotal:199500,gstRate:0,gstAmount:0,invoiceTotal:2e5,cogsTotal:152600,amountPaid:5e4,balancePending:15e4,status:"Partially Paid",stockAllocations:[{plotId:"A1",batchNumber:"HB-2026-08-007",bales:400,costPerBale:218},{plotId:"A2",batchNumber:"HB-2026-08-007",bales:300,costPerBale:218}],paymentHistory:[{id:"pay-001",date:"10-10-2026",mode:"UPI",amountPaid:5e4,balanceAfter:15e4,note:"Advance"},{id:"pay-002",date:"25-10-2026",mode:"Cash",amountPaid:4e4,balanceAfter:11e4,note:"Part payment"}]},{id:"inv-0041",invoiceNumber:"INV-0041",customerId:"cust-2",customerName:"Ravi Farms",date:"2026-09-28",dueDate:"2026-10-09",balesCount:400,ratePerBale:285,subtotal:114e3,gstRate:0,gstAmount:0,invoiceTotal:114e3,cogsTotal:87200,amountPaid:4e3,balancePending:11e4,status:"Pending",stockAllocations:[{plotId:"B3",batchNumber:"HB-2026-08-007",bales:400,costPerBale:218}],paymentHistory:[{id:"pay-003",date:"28-09-2026",mode:"UPI",amountPaid:4e3,balanceAfter:11e4,note:"Token advance"}]},{id:"inv-0040",invoiceNumber:"INV-0040",customerId:"cust-3",customerName:"Deccan Agro Exports",date:"2026-10-01",dueDate:"2026-10-15",balesCount:5350,ratePerBale:285,subtotal:1526e3,gstRate:0,gstAmount:0,invoiceTotal:1526e3,cogsTotal:1050200,amountPaid:1301e3,balancePending:225e3,status:"Partially Paid",stockAllocations:[{plotId:"B6",batchNumber:"HB-2026-08-007",bales:200,costPerBale:218}],paymentHistory:[{id:"pay-004",date:"01-10-2026",mode:"Bank Transfer",amountPaid:1301e3,balanceAfter:225e3,note:"NEFT transfer"}]}],expenses:[{id:"exp-1",date:"2026-10-02",paidTo:"Diesel Pump - Highway Fuel",reason:"Baler machinery diesel & tractor fuel",amount:3500,category:"Production",mode:"Cash",relatedBatch:"HB-2026-10-001",attachment:{name:"diesel_bill_oct2.jpg",type:"image"}},{id:"exp-2",date:"2026-10-01",paidTo:"Factory Labour Gang",reason:"Stacking and twine tying contract",amount:18e3,category:"Production",mode:"Cash",relatedBatch:"HB-2026-10-001",attachment:null},{id:"exp-3",date:"2026-10-03",paidTo:"Sri Rama Twine Depot",reason:"Polypropylene bale twine rolls",amount:12e3,category:"Production",mode:"UPI",relatedBatch:"HB-2026-10-001",attachment:{name:"twine_bill.pdf",type:"pdf"}},{id:"exp-4",date:"2026-10-04",paidTo:"Monthly Factory Rent",reason:"Factory shed lease for October",amount:45e3,category:"Factory",mode:"Bank Transfer",relatedBatch:"",attachment:null},{id:"exp-5",date:"2026-10-05",paidTo:"Staff Salaries",reason:"Accountant & yard supervisor monthly pay",amount:55e3,category:"Employees",mode:"Bank Transfer",relatedBatch:"",attachment:null},{id:"exp-6",date:"2026-09-29",paidTo:"Lorry Freight Logistics",reason:"Transport from field collection points",amount:32e3,category:"Transport",mode:"UPI",relatedBatch:"",attachment:null}],upcomingPaymentsSchedule:[{who:"Sri Hay Traders",type:"Receive",amount:4e4,due:"06 Oct 2026",linkType:"customer",id:"cust-1"},{who:"Supplier K. Rao",type:"Pay",amount:55e3,due:"08 Oct 2026",linkType:"supplier",id:"sup-2"},{who:"Ravi Farms",type:"Receive",amount:11e4,due:"09 Oct 2026",linkType:"customer",id:"cust-2"},{who:"K. Rao Traders",type:"Pay",amount:87e3,due:"30 Oct 2026",linkType:"supplier",id:"sup-1"}]},W="BALE_MANAGEMENT_DATA_V1";class nt{constructor(){this.listeners=new Set,this.data=this.load(),this.runFermentationDailyCheck()}load(){try{const t=localStorage.getItem(W);if(t)return JSON.parse(t)}catch(t){console.error("Error loading state from localStorage:",t)}return JSON.parse(JSON.stringify(G))}save(){try{localStorage.setItem(W,JSON.stringify(this.data))}catch(t){console.error("Error saving state to localStorage:",t)}this.notify()}resetToDefault(){this.data=JSON.parse(JSON.stringify(G)),this.save()}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(const t of this.listeners)t(this.data)}getCurrentDate(){return this.data.settings.currentDate||"2026-10-05"}setCurrentDate(t){this.data.settings.currentDate=t,this.runFermentationDailyCheck(),this.save()}formatDate(t){if(!t)return"--";if(t.includes("-")&&t.split("-")[0].length===4){const[o,e,n]=t.split("-");return`${n}-${e}-${o}`}return t}formatINR(t,o=!1){if(t==null||isNaN(t))return"₹ 0";const e=Math.round(Number(t));if(o&&Math.abs(e)>=1e5)return`₹ ${(e/1e5).toFixed(2).replace(/\.00$/,"")} L`;const n=e<0,i=Math.abs(e).toString();let r="";if(i.length>3){const c=i.substring(i.length-3);r=i.substring(0,i.length-3).replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+c}else r=i;return`${n?"-":""}₹ ${r}`}formatNumber(t){if(t==null||isNaN(t))return"0";const o=Math.round(Number(t)),e=Math.abs(o).toString();if(e.length>3){const n=e.substring(e.length-3),i=e.substring(0,e.length-3);return(o<0?"-":"")+i.replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+n}return(o<0?"-":"")+e}getDaysDifference(t,o){try{const e=new Date(t),i=new Date(o).getTime()-e.getTime();return Math.floor(i/(1e3*60*60*24))}catch{return 0}}addDays(t,o){const e=new Date(t);e.setDate(e.getDate()+Number(o));const n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${i}-${r}`}runFermentationDailyCheck(){const t=this.getCurrentDate(),o=this.data.settings.fermentationDays||30;this.data.plots.forEach(e=>{e.status==="Fermenting"&&e.fermStart&&this.getDaysDifference(e.fermStart,t)>=o&&(e.status="Ready")}),this.data.batches.forEach(e=>{e.status==="Fermenting"&&e.fermentationStart&&this.getDaysDifference(e.fermentationStart,t)>=o&&(e.status="Ready")})}getRole(){return this.data.settings.activeRole||"Owner"}setRole(t){this.data.settings.activeRole=t,this.save()}canViewFinancials(){return this.getRole()!=="Staff"}canEditFinancials(){return this.getRole()==="Owner"||this.getRole()==="Accountant"}canDelete(){return this.getRole()==="Owner"||this.getRole()==="Accountant"}canManageUsers(){return this.getRole()==="Owner"}getDashboardMetrics(t="2026-10"){const o=this.getRole(),e=this.getCurrentDate(),n=this.data.plots.filter(d=>d.status==="Ready").reduce((d,b)=>d+(Number(b.bales)||0),0),i=this.data.plots.filter(d=>d.status==="Fermenting").reduce((d,b)=>d+(Number(b.bales)||0),0),r=this.data.sales.reduce((d,b)=>d+(Number(b.balancePending)||0),0),c=this.data.purchases.reduce((d,b)=>d+(Number(b.balancePending)||0),0),m=this.data.sales.filter(d=>(d.date||"").startsWith(t)).reduce((d,b)=>d+(Number(b.invoiceTotal)||0),0),l=this.data.sales.filter(d=>(d.date||"").startsWith(t)).reduce((d,b)=>d+(Number(b.cogsTotal)||b.balesCount*218),0),u=this.data.expenses.filter(d=>(d.date||"").startsWith(t)).reduce((d,b)=>d+(Number(b.amount)||0),0),p=m-l,g=p-u,f=this.data.rawMaterial.stockKg||42500,h=Math.round(f/28),x=this.data.sales.filter(d=>(d.date||"").startsWith(t)).reduce((d,b)=>d+(Number(b.balesCount)||0),0),P=this.data.settings.fermentationDays||30,y=this.data.plots.filter(d=>d.status==="Fermenting"&&d.fermStart).map(d=>{const b=Math.max(0,this.getDaysDifference(d.fermStart,e)),R=Math.max(0,P-b);return{plot:d.id,batch:d.batchNumber,bales:d.bales,daysLeft:R,daysPassed:b,readyDate:this.addDays(d.fermStart,P)}}).sort((d,b)=>d.daysLeft-b.daysLeft).slice(0,6),v=this.getUpcomingPayments();return{role:o,readyBales:n,fermentingBales:i,customerDues:r,supplierDues:c,monthSales:m,monthCOGS:l,monthExpenses:u,grossProfit:p,netProfit:g,rawMaterialKg:f,rawMaterialBalesEquiv:h,monthSoldBales:x,batchesReadySoon:y,upcomingPayments:v}}getUpcomingPayments(){const t=new Date(this.getCurrentDate()),o=[];return this.data.sales.forEach(e=>{if(e.balancePending>0&&e.dueDate){const n=new Date(e.dueDate),i=Math.ceil((n-t)/(1e3*60*60*24)),r=i<0;o.push({who:e.customerName,type:"Receive",amount:e.balancePending,dueDate:e.dueDate,dueFormatted:this.formatDate(e.dueDate),diffDays:i,isOverdue:r,refId:e.id,entityType:"sale"})}}),this.data.purchases.forEach(e=>{if(e.balancePending>0&&e.dueDate){const n=new Date(e.dueDate),i=Math.ceil((n-t)/(1e3*60*60*24)),r=i<0;o.push({who:e.supplierName,type:"Pay",amount:e.balancePending,dueDate:e.dueDate,dueFormatted:this.formatDate(e.dueDate),diffDays:i,isOverdue:r,refId:e.id,entityType:"purchase"})}}),o.sort((e,n)=>new Date(e.dueDate)-new Date(n.dueDate))}addPurchase(t){const o="pur-"+Date.now(),e=Number(t.quantity)||0,n=Number(t.rate)||0,i=e*n,r=Number(t.transport)||0,c=Number(t.loading)||0,m=Number(t.commission)||0,l=Number(t.other)||0,u=Number(t.gstRate)||0,p=i+r+c+m+l,g=Math.round(p*u/100),f=p+g,h=Number(t.amountPaid)||0,x=Math.max(0,f-h),P=this.data.purchases.filter(T=>T.material.toLowerCase()===t.material.toLowerCase());let y="neutral",v=0;if(P.length>0){const T=P[0];v=n-T.rate,v>0?y="up":v<0&&(y="down")}const d={id:o,supplierId:t.supplierId||"sup-custom",supplierName:t.supplierName,date:t.date||this.getCurrentDate(),invoiceNo:t.invoiceNo,material:t.material,quantity:e,unit:t.unit,rate:n,materialCost:i,transport:r,loading:c,commission:m,other:l,gstRate:u,gstAmount:g,actualCost:f,amountPaid:h,balancePending:x,paymentMode:t.paymentMode,dueDate:t.dueDate,rateVsLastBuy:y,rateDifference:v,attachment:t.attachment||null};this.data.purchases.unshift(d);let b=e;t.unit==="ton"?b=e*1e3:t.unit==="load"?b=e*5e3:t.unit==="bale"&&(b=e*28),this.data.rawMaterial.stockKg=(this.data.rawMaterial.stockKg||0)+b;let R=this.data.suppliers.find(T=>T.name.toLowerCase()===t.supplierName.toLowerCase());return R?(R.totalPurchased+=f,R.totalPaid+=h,R.balancePending+=x):this.data.suppliers.push({id:"sup-"+Date.now(),name:t.supplierName,phone:t.phone||"",city:"Local",totalPurchased:f,totalPaid:h,balancePending:x}),this.save(),d}generateBatchNumber(){const t=new Date(this.getCurrentDate()),o=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),n=this.data.batches.filter(r=>r.batchNumber.startsWith(`HB-${o}-${e}`)).length,i=String(n+1).padStart(3,"0");return`HB-${o}-${e}-${i}`}addBatch(t){const o="batch-"+Date.now(),e=Number(t.rawMaterialKg)||0,n=Number(t.rawMaterialCost)||0,i=Number(t.labourCost)||0,r=Number(t.wrappingCost)||0,c=Number(t.machineryCost)||0,m=Number(t.otherCost)||0,l=Number(t.finishedBales)||1,u=n+i+r+c+m,p=Math.round(u/l),g=Math.round(n/l),f=Math.round(i/l),h=Math.round((r+c+m)/l),x=t.fermentationStart||this.getCurrentDate(),P=this.addDays(x,this.data.settings.fermentationDays||30),y={id:o,batchNumber:t.batchNumber||this.generateBatchNumber(),productionDate:t.productionDate||this.getCurrentDate(),rawMaterialKg:e,rawMaterialCost:n,labourCost:i,wrappingCost:r,machineryCost:c,otherCost:m,totalProductionCost:u,finishedBales:l,costPerBale:p,rawMaterialPerBale:g,labourPerBale:f,otherPerBale:h,plotAssigned:t.plotAssigned,fermentationStart:x,readyDate:P,status:"Fermenting"};this.data.batches.unshift(y),this.data.rawMaterial.stockKg=Math.max(0,(this.data.rawMaterial.stockKg||0)-e);const v=this.data.plots.find(d=>d.id===t.plotAssigned);return v&&(v.bales=l,v.batchId=o,v.batchNumber=y.batchNumber,v.prodDate=y.productionDate,v.fermStart=x,v.costPerBale=p,v.status="Fermenting"),this.save(),y}updatePlotStock(t,o,e=null){const n=this.data.plots.find(i=>i.id===t);n&&(n.bales=Math.max(0,Number(o)),n.bales===0?(n.status="Empty",n.batchId=null,n.batchNumber="",n.fermStart=""):e&&(n.status=e),this.save())}addPlot(t,o="C"){if(this.data.plots.some(e=>e.id===t))throw new Error(`Plot ${t} already exists`);this.data.plots.push({id:t,section:o,bales:0,batchId:null,batchNumber:"",prodDate:"",fermStart:"",costPerBale:0,status:"Empty"}),this.save()}addSale(t){const o="inv-"+Date.now(),e=t.invoiceNumber||`INV-${String(this.data.sales.length+43).padStart(4,"0")}`,n=Number(t.balesCount)||0,i=Number(t.ratePerBale)||0,r=n*i,c=Number(t.gstRate)||0,m=Math.round(r*c/100),l=r+m,u=Number(t.amountPaid)||0,p=Math.max(0,l-u);let g=0;const f=[];t.allocations&&t.allocations.length>0?t.allocations.forEach(y=>{const v=this.data.plots.find(d=>d.id===y.plotId);if(v){const d=Math.min(v.bales,Number(y.bales));v.bales-=d;const b=v.costPerBale||218;g+=d*b,f.push({plotId:v.id,batchNumber:v.batchNumber,bales:d,costPerBale:b}),v.bales<=0&&(v.status="Empty",v.batchId=null,v.batchNumber="",v.fermStart="")}}):g=n*218;const h=[];u>0&&h.push({id:"pay-"+Date.now(),date:this.formatDate(t.date||this.getCurrentDate()),mode:t.paymentMode||"UPI",amountPaid:u,balanceAfter:p,note:t.paymentNote||"Advance payment at sale"});const x={id:o,invoiceNumber:e,customerId:t.customerId,customerName:t.customerName,date:t.date||this.getCurrentDate(),dueDate:t.dueDate,balesCount:n,ratePerBale:i,subtotal:r,gstRate:c,gstAmount:m,invoiceTotal:l,cogsTotal:g,amountPaid:u,balancePending:p,status:p===0?"Paid":u>0?"Partially Paid":"Pending",stockAllocations:f,paymentHistory:h};this.data.sales.unshift(x);let P=this.data.customers.find(y=>y.id===t.customerId||y.name.toLowerCase()===t.customerName.toLowerCase());return P?(P.totalPurchased+=l,P.totalPaid+=u,P.balancePending+=p,P.lastPurchaseDate=this.formatDate(t.date||this.getCurrentDate())):this.data.customers.push({id:"cust-"+Date.now(),name:t.customerName,phone:t.phone||"",address:t.address||"",gstNumber:t.gstNumber||"",creditLimit:3e5,totalPurchased:l,totalPaid:u,balancePending:p,lastPurchaseDate:this.formatDate(t.date||this.getCurrentDate())}),this.save(),x}addSalePayment(t,o){const e=this.data.sales.find(c=>c.id===t);if(!e)return;const n=Number(o.amountPaid)||0,i=Math.max(0,e.balancePending-n);e.amountPaid+=n,e.balancePending=i,e.status=i===0?"Paid":"Partially Paid",e.paymentHistory.push({id:"pay-"+Date.now(),date:o.date||this.formatDate(this.getCurrentDate()),mode:o.mode||"Cash",amountPaid:n,balanceAfter:i,note:o.note||"Part payment"});const r=this.data.customers.find(c=>c.name.toLowerCase()===e.customerName.toLowerCase());r&&(r.totalPaid+=n,r.balancePending=Math.max(0,r.balancePending-n)),this.save()}addExpense(t){const e={id:"exp-"+Date.now(),date:t.date||this.getCurrentDate(),paidTo:t.paidTo,reason:t.reason,amount:Number(t.amount)||0,category:t.category,mode:t.mode||"Cash",relatedBatch:t.relatedBatch||"",attachment:t.attachment||null};return this.data.expenses.unshift(e),this.save(),e}deleteRecord(t,o){return this.canDelete()?(t==="expense"?this.data.expenses=this.data.expenses.filter(e=>e.id!==o):t==="purchase"?this.data.purchases=this.data.purchases.filter(e=>e.id!==o):t==="sale"&&(this.data.sales=this.data.sales.filter(e=>e.id!==o)),this.save(),!0):(alert("Access Denied: Only Owner and Accountant can delete records."),!1)}}const a=new nt;let q="dashboard",k="2026-10",E="ALL",I="ALL",L="";const w=document.getElementById("appContent"),D=document.getElementById("pageTitle"),st=document.getElementById("currentDateDisplay"),K=document.getElementById("roleSelector"),ot=document.getElementById("currentRoleText"),Y=document.getElementById("roleNoticeBanner"),J=document.getElementById("quickActionHeaderBtn"),j=document.getElementById("mobileFabBtn"),M=document.getElementById("quickMenuPopover"),z=document.getElementById("mobileMoreBtn"),A=document.getElementById("moreMenuPopover"),H=document.getElementById("commonModalOverlay"),N=document.getElementById("modalTitle"),$=document.getElementById("modalBody"),it=document.getElementById("modalCloseBtn");function rt(){lt(),Q(),O(),a.subscribe(()=>{Q(),O()})}function lt(){document.querySelectorAll(".sidebar-nav .nav-item").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-tab");_(o)})}),document.querySelectorAll(".mobile-bottom-bar .mobile-nav-btn").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-tab");o&&_(o)})}),K.value=a.getRole(),K.addEventListener("change",t=>{a.setRole(t.target.value)});const s=t=>{t.stopPropagation(),A.classList.remove("open"),M.classList.toggle("open")};J.addEventListener("click",s),j&&j.addEventListener("click",s),z&&z.addEventListener("click",t=>{t.stopPropagation(),M.classList.remove("open"),A.classList.toggle("open")}),M.querySelectorAll(".quick-menu-item").forEach(t=>{t.addEventListener("click",()=>{M.classList.remove("open");const o=t.getAttribute("data-action");ct(o)})}),A.querySelectorAll(".quick-menu-item").forEach(t=>{t.addEventListener("click",()=>{A.classList.remove("open");const o=t.getAttribute("data-tab");o&&_(o)})}),document.addEventListener("click",t=>{!M.contains(t.target)&&t.target!==J&&t.target!==j&&M.classList.remove("open"),z&&!A.contains(t.target)&&t.target!==z&&A.classList.remove("open")}),it.addEventListener("click",C),H.addEventListener("click",t=>{t.target===H&&C()})}function Q(){const s=a.getRole();K.value=s,ot.textContent=s,st.textContent=a.formatDate(a.getCurrentDate()),s==="Staff"?(Y.classList.remove("hidden"),document.querySelectorAll(".finance-required").forEach(t=>t.classList.add("hidden")),["purchases","sales","expenses","reports"].includes(q)&&(q="dashboard")):(Y.classList.add("hidden"),document.querySelectorAll(".finance-required").forEach(t=>t.classList.remove("hidden")))}function _(s){q=s,document.querySelectorAll(".sidebar-nav .nav-item").forEach(t=>{t.getAttribute("data-tab")===s?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll(".mobile-bottom-bar .mobile-nav-btn").forEach(t=>{t.getAttribute("data-tab")===s?t.classList.add("active"):t.classList.remove("active")}),O()}function O(){switch(q){case"dashboard":D.textContent=a.getRole()==="Staff"?"Staff Yard Dashboard":"Owner Dashboard",U();break;case"plots":D.textContent="Plots and Fermentation",F();break;case"production":D.textContent="Production Batches",X();break;case"purchases":D.textContent="Purchases and Supplier Balances",Z();break;case"sales":D.textContent="Sales, Invoices & Customer Credit",tt();break;case"expenses":D.textContent="Business Expenses",V();break;case"reports":D.textContent="Financial & Stock Reports",et();break;case"settings":D.textContent="System & Yard Settings",at();break;default:U()}}function U(){const s=a.getDashboardMetrics(k),t=a.canViewFinancials();w.innerHTML=`
    <!-- Month Selector Bar -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:10px;">
      <div style="font-size:0.9rem; color:var(--text-sub);">
        Overview for <strong>${s.role}</strong> • All bale operations & real-time accounts
      </div>
      ${t?`
        <div style="display:flex; align-items:center; gap:8px;">
          <label style="font-size:0.85rem; font-weight:600; color:var(--text-sub);">Reporting Month:</label>
          <select id="dashMonthSelect" class="form-select" style="padding:6px 12px; font-weight:600;">
            <option value="2026-10" ${k==="2026-10"?"selected":""}>October 2026</option>
            <option value="2026-09" ${k==="2026-09"?"selected":""}>September 2026</option>
            <option value="2026-08" ${k==="2026-08"?"selected":""}>August 2026</option>
          </select>
        </div>
      `:""}
    </div>

    <!-- Top KPI Cards Grid -->
    <div class="kpi-cards-grid">
      <div class="kpi-card ready" onclick="window.appNav('plots', {status: 'Ready'})">
        <div class="kpi-label">Ready for Sale</div>
        <div class="kpi-value text-green">${a.formatNumber(s.readyBales)} <span style="font-size:1rem; font-weight:500;">bales</span></div>
        <div class="kpi-subtext">🌾 Fully fermented & in plots</div>
      </div>

      <div class="kpi-card fermenting" onclick="window.appNav('plots', {status: 'Fermenting'})">
        <div class="kpi-label">Fermenting</div>
        <div class="kpi-value text-amber">${a.formatNumber(s.fermentingBales)} <span style="font-size:1rem; font-weight:500;">bales</span></div>
        <div class="kpi-subtext">⏳ Counting towards 30 days</div>
      </div>

      ${t?`
        <div class="kpi-card customer-due" onclick="window.appNav('sales')">
          <div class="kpi-label">Customers Owe You</div>
          <div class="kpi-value text-red">${a.formatINR(s.customerDues)}</div>
          <div class="kpi-subtext">💼 Total receivables balance</div>
        </div>

        <div class="kpi-card supplier-due" onclick="window.appNav('purchases')">
          <div class="kpi-label">You Owe Suppliers</div>
          <div class="kpi-value text-blue">${a.formatINR(s.supplierDues)}</div>
          <div class="kpi-subtext">🛒 Total payables balance</div>
        </div>
      `:`
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
    ${t?`
      <div class="month-finance-row">
        <div class="finance-card">
          <div class="kpi-label">Sales This Month (${k})</div>
          <div class="kpi-value text-blue">${a.formatINR(s.monthSales)}</div>
          <div class="kpi-subtext">Invoiced sales revenue</div>
        </div>

        <div class="finance-card">
          <div class="kpi-label">Expenses This Month</div>
          <div class="kpi-value text-red">${a.formatINR(s.monthExpenses)}</div>
          <div class="kpi-subtext">Factory, labour, diesel & operations</div>
        </div>

        <div class="finance-card ${s.netProfit>=0?"profit-positive":"profit-loss"}">
          <div class="kpi-label">Profit This Month</div>
          <div class="kpi-value">${a.formatINR(s.netProfit)}</div>
          <div class="kpi-subtext">${s.netProfit>=0?"▲ Net profit after COGS & expenses":"▼ Net operating loss"}</div>
        </div>
      </div>
    `:""}

    <!-- Stock by Stage Bar -->
    <div class="stage-card">
      <div class="stage-header">
        <div class="stage-title">Stock by Stage (Bales & Raw Material)</div>
        <div style="font-size:0.84rem; font-weight:600; color:var(--text-sub);">
          Raw Stock: ${a.formatNumber(s.rawMaterialKg)} kg (~${a.formatNumber(s.rawMaterialBalesEquiv)} bales)
        </div>
      </div>

      <div class="stacked-bar-container">
        <div class="stacked-segment segment-raw" style="width: 25%;" title="Raw Material: ${s.rawMaterialKg} kg">Raw (${a.formatNumber(s.rawMaterialBalesEquiv)})</div>
        <div class="stacked-segment segment-fermenting" style="width: 35%;" title="Fermenting: ${s.fermentingBales} bales">Fermenting (${a.formatNumber(s.fermentingBales)})</div>
        <div class="stacked-segment segment-ready" style="width: 20%;" title="Ready: ${s.readyBales} bales">Ready (${a.formatNumber(s.readyBales)})</div>
        <div class="stacked-segment segment-sold" style="width: 20%;" title="Sold This Month: ${s.monthSoldBales} bales">Sold (${a.formatNumber(s.monthSoldBales)})</div>
      </div>

      <div class="stage-legend">
        <div class="legend-item"><span class="legend-dot" style="background:#64748b;"></span> Raw material (${a.formatNumber(s.rawMaterialKg)} kg)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#d97706;"></span> Fermenting (${a.formatNumber(s.fermentingBales)} bales)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#16a34a;"></span> Ready for sale (${a.formatNumber(s.readyBales)} bales)</div>
        <div class="legend-item"><span class="legend-dot" style="background:#2563eb;"></span> Sold in month (${a.formatNumber(s.monthSoldBales)} bales)</div>
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
              ${s.batchesReadySoon.length===0?'<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No active fermenting batches</td></tr>':""}
              ${s.batchesReadySoon.map(e=>`
                <tr style="cursor:pointer;" onclick="window.openPlotDetail('${e.plot}')">
                  <td><strong style="color:var(--brand-blue);">${e.batch}</strong></td>
                  <td><span class="badge badge-fermenting">${e.plot}</span></td>
                  <td><strong>${e.bales}</strong></td>
                  <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span class="badge badge-fermenting">${e.daysLeft} days</span>
                      <small style="color:var(--text-muted); font-size:0.75rem;">(${a.formatDate(e.readyDate)})</small>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Upcoming Payments in Next 7 Days -->
      <div class="section-box">
        <div class="section-box-header">
          <div class="box-title">💳 Upcoming Payments (Next 7–30 Days)</div>
          ${t?`<button class="btn-secondary" style="padding:4px 10px; font-size:0.78rem;" onclick="window.appNav('reports')">View Balances</button>`:""}
        </div>

        ${t?`
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
                ${s.upcomingPayments.length===0?'<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No pending dues</td></tr>':""}
                ${s.upcomingPayments.slice(0,6).map(e=>`
                  <tr>
                    <td><strong>${e.who}</strong></td>
                    <td>
                      <span class="badge ${e.type==="Receive"?"badge-receive":"badge-pay"}">
                        ${e.type==="Receive"?"↓ Receive":"↑ Pay"}
                      </span>
                    </td>
                    <td><strong class="${e.type==="Receive"?"text-green":"text-red"}">${a.formatINR(e.amount)}</strong></td>
                    <td>
                      <div style="display:flex; align-items:center; gap:6px;">
                        <span>${e.dueFormatted}</span>
                        ${e.isOverdue?'<span class="badge badge-overdue">OVERDUE</span>':""}
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `:`
          <div style="padding:28px; text-align:center; color:var(--text-muted);">
            Payment details are restricted to Owner and Accountant roles.
          </div>
        `}
      </div>
    </div>
  `;const o=document.getElementById("dashMonthSelect");o&&o.addEventListener("change",e=>{k=e.target.value,U()})}function F(){const s=a.data.plots,t=a.getCurrentDate(),o=a.data.settings.fermentationDays||30,e=s.filter(l=>{if(I!=="ALL"&&l.section!==I||E!=="ALL"&&l.status!==E)return!1;if(L){const u=L.toLowerCase(),p=l.id.toLowerCase().includes(u),g=(l.batchNumber||"").toLowerCase().includes(u);if(!p&&!g)return!1}return!0}),n=s.length,i=s.filter(l=>l.status==="Ready").length,r=s.filter(l=>l.status==="Fermenting").length,c=s.filter(l=>l.status==="Empty").length;w.innerHTML=`
    <!-- Controls Bar -->
    <div class="plots-controls-bar">
      <div class="filters-group">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-sub); margin-right:4px;">Section:</span>
        <button class="filter-chip ${I==="ALL"?"active":""}" onclick="window.setPlotSection('ALL')">All</button>
        <button class="filter-chip ${I==="A"?"active":""}" onclick="window.setPlotSection('A')">Section A (1-40)</button>
        <button class="filter-chip ${I==="B"?"active":""}" onclick="window.setPlotSection('B')">Section B (1-30)</button>
        <button class="filter-chip ${I==="C"?"active":""}" onclick="window.setPlotSection('C')">Section C</button>
        <button class="filter-chip ${I==="D"?"active":""}" onclick="window.setPlotSection('D')">Section D</button>
      </div>

      <div class="filters-group">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-sub); margin-right:4px;">Status:</span>
        <button class="filter-chip ${E==="ALL"?"active":""}" onclick="window.setPlotStatus('ALL')">All (${n})</button>
        <button class="filter-chip ${E==="Fermenting"?"active":""}" onclick="window.setPlotStatus('Fermenting')">⏳ Fermenting (${r})</button>
        <button class="filter-chip ${E==="Ready"?"active":""}" onclick="window.setPlotStatus('Ready')">🌾 Ready (${i})</button>
        <button class="filter-chip ${E==="Empty"?"active":""}" onclick="window.setPlotStatus('Empty')">⚪ Empty (${c})</button>
      </div>

      <div style="display:flex; align-items:center; gap:8px;">
        <input type="text" id="plotSearchInput" class="search-input" placeholder="Search plot (e.g. A12) or batch..." value="${L}" />
        <button class="btn-navy" onclick="window.openAddPlotModal()">+ Add Plot</button>
      </div>
    </div>

    <!-- Plots Grid -->
    <div class="plots-grid">
      ${e.map(l=>{let u="empty",p="Empty",g=0,f="";if(l.status==="Ready")u="ready",p="Ready";else if(l.status==="Fermenting"){u="fermenting";const h=Math.max(1,a.getDaysDifference(l.fermStart,t));f=`Day ${Math.min(o,h)} of ${o}`,p=f,g=Math.min(100,Math.round(h/o*100))}return`
          <div class="plot-tile ${u}" onclick="window.openPlotDetail('${l.id}')">
            <div>
              <div class="plot-id">${l.id}</div>
              <div class="plot-bales">${l.bales>0?`${a.formatNumber(l.bales)} bales`:'<span style="color:#94a3b8;">Empty</span>'}</div>
            </div>

            <div>
              <span class="plot-status-label">${p}</span>
              ${l.status==="Fermenting"?`
                <div class="plot-progress-mini">
                  <div class="plot-progress-mini-bar" style="width: ${g}%;"></div>
                </div>
              `:""}
            </div>
          </div>
        `}).join("")}
    </div>

    <div style="text-align:center; color:var(--text-muted); font-size:0.85rem; margin-top:20px;">
      💡 Tip: Tap any plot tile to inspect batch details, see fermentation countdown, update stock count, or initiate a sale.
    </div>
  `;const m=document.getElementById("plotSearchInput");m&&m.addEventListener("input",l=>{L=l.target.value,F();const u=document.getElementById("plotSearchInput");u.focus(),u.setSelectionRange(u.value.length,u.value.length)})}window.openPlotDetail=function(s){const t=a.data.plots.find(l=>l.id===s);if(!t)return;const o=a.getCurrentDate(),e=a.data.settings.fermentationDays||30,n=a.canViewFinancials();let i=0,r="--",c=0,m=0;t.fermStart&&(i=Math.max(0,a.getDaysDifference(t.fermStart,o)),r=a.addDays(t.fermStart,e),m=Math.min(100,Math.round(i/e*100))),t.bales>0&&(c=(t.bales||0)*(t.costPerBale||218)),N.textContent=`Plot ${t.id} Detail Card`,$.innerHTML=`
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <div>
        <span class="badge ${t.status==="Ready"?"badge-ready":t.status==="Fermenting"?"badge-fermenting":"badge-empty"}" style="font-size:0.9rem; padding:4px 12px;">
          ${t.status}
        </span>
      </div>
      <div style="font-size:0.85rem; color:var(--text-muted);">
        Section ${t.section} • Capacity ~1000 bales
      </div>
    </div>

    <div style="background:var(--grey-bg); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.9rem;">
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Batch Assigned:</span>
          <strong>${t.batchNumber||"None (Empty Plot)"}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Bales Stored:</span>
          <strong style="font-size:1.1rem; color:var(--primary-navy);">${a.formatNumber(t.bales)} bales</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Production Date:</span>
          <strong>${a.formatDate(t.prodDate)}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); font-size:0.8rem; display:block;">Fermentation Start:</span>
          <strong>${a.formatDate(t.fermStart)}</strong>
        </div>
      </div>
    </div>

    ${t.status==="Fermenting"?`
      <div style="border:1px solid var(--amber-border); background:var(--amber-bg); border-radius:var(--radius-md); padding:16px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <strong style="color:var(--amber-text);">Fermentation Progress: Day ${i} of ${e}</strong>
          <span style="font-weight:700; color:var(--amber-text);">${m}%</span>
        </div>
        <div style="height:10px; background:#fff; border-radius:5px; overflow:hidden;">
          <div style="height:100%; width:${m}%; background:var(--amber-accent);"></div>
        </div>
        <div style="margin-top:8px; font-size:0.84rem; color:var(--amber-text);">
          Ready for sale on: <strong>${a.formatDate(r)}</strong> (${Math.max(0,e-i)} days left)
        </div>
      </div>
    `:""}

    ${n&&t.bales>0?`
      <div style="display:flex; justify-content:space-between; align-items:center; background:#f0fdf4; border:1px solid var(--green-border); padding:14px 16px; border-radius:var(--radius-md); margin-bottom:20px;">
        <div>
          <span style="font-size:0.8rem; color:var(--green-text); display:block;">Approximate Stock Value:</span>
          <small style="color:var(--text-muted);">(${t.bales} bales × ₹${t.costPerBale||218}/bale cost)</small>
        </div>
        <div style="font-size:1.4rem; font-weight:700; color:var(--green-text);">
          ${a.formatINR(c)}
        </div>
      </div>
    `:""}

    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      <button class="btn-navy" style="flex:1;" onclick="window.openMoveStockModal('${t.id}')">
        📦 Move / Update Stock
      </button>

      ${t.status==="Ready"&&n?`
        <button class="btn-primary" style="flex:1;" onclick="window.startSaleFromPlot('${t.id}')">
          💼 Sell From This Plot
        </button>
      `:""}
    </div>
  `,S()};window.openMoveStockModal=function(s){const t=a.data.plots.find(o=>o.id===s);t&&(N.textContent=`Update Stock - Plot ${t.id}`,$.innerHTML=`
    <form id="moveStockForm">
      <div class="form-group mb-12">
        <label class="form-label">Current Stored Bales</label>
        <input type="number" id="updateBalesInput" class="form-input" value="${t.bales}" min="0" required />
      </div>

      <div class="form-group mb-16">
        <label class="form-label">Plot Status</label>
        <select id="updateStatusSelect" class="form-select">
          <option value="Ready" ${t.status==="Ready"?"selected":""}>Ready for Sale</option>
          <option value="Fermenting" ${t.status==="Fermenting"?"selected":""}>Fermenting</option>
          <option value="Empty" ${t.status==="Empty"?"selected":""}>Empty</option>
        </select>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px;">
        <button type="button" class="btn-secondary" onclick="window.closeModal()">Cancel</button>
        <button type="submit" class="btn-primary">Save Changes</button>
      </div>
    </form>
  `,document.getElementById("moveStockForm").addEventListener("submit",o=>{o.preventDefault();const e=Number(document.getElementById("updateBalesInput").value),n=document.getElementById("updateStatusSelect").value;a.updatePlotStock(s,e,n),C(),F()}))};window.startSaleFromPlot=function(s){C(),_("sales"),setTimeout(()=>{window.openNewInvoiceModal({preselectedPlotId:s})},100)};function Z(){if(!a.canViewFinancials()){w.innerHTML='<div style="padding:40px; text-align:center;">Staff cannot access purchase prices and supplier financials.</div>';return}const t=a.data.purchases,o=a.data.suppliers;w.innerHTML=`
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
      ${o.map(e=>`
        <div class="finance-card" style="position:relative;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-weight:700; font-size:1.05rem; color:var(--primary-navy);">${e.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${e.city} • ${e.phone}</div>
            </div>
            <span class="badge ${e.balancePending>0?"badge-pay":"badge-ready"}">
              ${e.balancePending>0?"Pending":"Cleared"}
            </span>
          </div>

          <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-light); display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
            <div>
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Total Purchased:</span>
              <strong>${a.formatINR(e.totalPurchased)}</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); display:block; font-size:0.75rem;">Balance Pending:</span>
              <strong style="color:var(--red-accent); font-size:1rem;">${a.formatINR(e.balancePending)}</strong>
            </div>
          </div>
        </div>
      `).join("")}
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
            ${t.map(e=>`
              <tr>
                <td>${a.formatDate(e.date)}</td>
                <td><strong>${e.invoiceNo}</strong></td>
                <td>${e.supplierName}</td>
                <td>${e.material}</td>
                <td>${e.quantity} ${e.unit}</td>
                <td>
                  ${a.formatINR(e.rate)}
                  ${e.rateVsLastBuy==="up"?'<span class="rate-vs-buy-tag up" style="display:inline-flex; padding:1px 5px; font-size:0.7rem;">▲ +₹'+e.rateDifference+"</span>":""}
                  ${e.rateVsLastBuy==="down"?'<span class="rate-vs-buy-tag down" style="display:inline-flex; padding:1px 5px; font-size:0.7rem;">▼ -₹'+Math.abs(e.rateDifference)+"</span>":""}
                </td>
                <td><strong style="color:var(--brand-blue);">${a.formatINR(e.actualCost)}</strong></td>
                <td><span class="text-green">${a.formatINR(e.amountPaid)}</span></td>
                <td><span class="${e.balancePending>0?"text-red":"text-green"} text-bold">${a.formatINR(e.balancePending)}</span></td>
                <td>${a.formatDate(e.dueDate)}</td>
                <td>
                  ${e.attachment?`
                    <button class="attach-btn" onclick="window.viewAttachment('${e.attachment.name}')">
                      📎 ${e.attachment.name}
                    </button>
                  `:'<span style="color:var(--text-muted); font-size:0.8rem;">No bill</span>'}
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}window.openNewPurchaseModal=function(){N.textContent="Record Raw Material Purchase",$.innerHTML=`
    <div class="form-auto-calc-layout">
      <!-- Left Form Inputs -->
      <form id="newPurchaseForm">
        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label">Supplier</label>
            <input type="text" id="p_supplier" class="form-input" list="supplierList" value="K. Rao Traders" required />
            <datalist id="supplierList">
              ${a.data.suppliers.map(o=>`<option value="${o.name}"></option>`).join("")}
            </datalist>
          </div>
          <div class="form-group">
            <label class="form-label">Purchase Date</label>
            <input type="date" id="p_date" class="form-input" value="${a.getCurrentDate()}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Bill / Invoice No.</label>
            <input type="text" id="p_invoiceNo" class="form-input" value="KR-${Math.floor(1e3+Math.random()*9e3)}" required />
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
            <input type="date" id="p_dueDate" class="form-input" value="${a.addDays(a.getCurrentDate(),25)}" />
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
  `;const s=()=>{const o=Number(document.getElementById("p_quantity").value)||0,e=Number(document.getElementById("p_rate").value)||0,n=o*e,i=Number(document.getElementById("p_transport").value)||0,r=Number(document.getElementById("p_loading").value)||0,c=Number(document.getElementById("p_commission").value)||0,m=Number(document.getElementById("p_other").value)||0,l=Number(document.getElementById("p_gstRate").value)||0,u=n+i+r+c+m,p=Math.round(u*l/100),g=u+p,f=Number(document.getElementById("p_amountPaid").value)||0,h=Math.max(0,g-f);document.getElementById("calc_materialCost").textContent=a.formatINR(n),document.getElementById("calc_transport").textContent=a.formatINR(i),document.getElementById("calc_loading").textContent=a.formatINR(r),document.getElementById("calc_commission").textContent=a.formatINR(c),document.getElementById("calc_other").textContent=a.formatINR(m),document.getElementById("calc_gst").textContent=a.formatINR(p),document.getElementById("calc_actualCost").textContent=a.formatINR(g),document.getElementById("calc_paid").textContent=a.formatINR(f),document.getElementById("calc_pending").textContent=a.formatINR(h)};["p_quantity","p_rate","p_transport","p_loading","p_commission","p_other","p_gstRate","p_amountPaid"].forEach(o=>{document.getElementById(o).addEventListener("input",s)});const t=document.getElementById("p_fileInput");t.addEventListener("change",()=>{t.files.length>0&&(document.getElementById("attachedFileNameTag").textContent=t.files[0].name)}),document.getElementById("newPurchaseForm").addEventListener("submit",o=>{o.preventDefault(),a.addPurchase({supplierName:document.getElementById("p_supplier").value,date:document.getElementById("p_date").value,invoiceNo:document.getElementById("p_invoiceNo").value,material:document.getElementById("p_material").value,quantity:document.getElementById("p_quantity").value,unit:document.getElementById("p_unit").value,rate:document.getElementById("p_rate").value,transport:document.getElementById("p_transport").value,loading:document.getElementById("p_loading").value,commission:document.getElementById("p_commission").value,other:document.getElementById("p_other").value,gstRate:document.getElementById("p_gstRate").value,amountPaid:document.getElementById("p_amountPaid").value,paymentMode:document.getElementById("p_mode").value,dueDate:document.getElementById("p_dueDate").value,attachment:{name:document.getElementById("attachedFileNameTag").textContent,type:"pdf"}}),C(),Z()}),S()};function X(){const s=a.data.batches,t=a.canViewFinancials();w.innerHTML=`
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
              ${t?`
                <th>Total Prod Cost</th>
                <th>Cost / Bale</th>
              `:""}
              <th>Assigned Plot</th>
              <th>Fermentation Start</th>
              <th>Ready Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${s.map(o=>`
              <tr>
                <td><strong style="color:var(--brand-blue);">${o.batchNumber}</strong></td>
                <td>${a.formatDate(o.productionDate)}</td>
                <td>${a.formatNumber(o.rawMaterialKg)} kg</td>
                <td><strong>${a.formatNumber(o.finishedBales)}</strong></td>
                ${t?`
                  <td><strong>${a.formatINR(o.totalProductionCost)}</strong></td>
                  <td><span class="badge badge-blue">₹ ${o.costPerBale}</span></td>
                `:""}
                <td><span class="badge ${o.status==="Ready"?"badge-ready":"badge-fermenting"}">${o.plotAssigned}</span></td>
                <td>${a.formatDate(o.fermentationStart)}</td>
                <td>${a.formatDate(o.readyDate)}</td>
                <td>
                  <span class="badge ${o.status==="Ready"?"badge-ready":"badge-fermenting"}">
                    ${o.status}
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}window.openNewBatchModal=function(){const s=a.canViewFinancials(),t=a.data.plots.filter(e=>e.status==="Empty"||e.bales===0),o=a.generateBatchNumber();if(N.textContent="New Production Batch",$.innerHTML=`
    <div class="form-auto-calc-layout">
      <!-- Left Form Inputs -->
      <form id="newBatchForm">
        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label">Batch Number (Auto)</label>
            <input type="text" id="b_batchNumber" class="form-input" value="${o}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Production Date</label>
            <input type="date" id="b_prodDate" class="form-input" value="${a.getCurrentDate()}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Raw Material Used (kg)</label>
            <input type="number" id="b_rawKg" class="form-input" value="26500" min="1" required />
          </div>
        </div>

        ${s?`
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
        `:`
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
              ${t.length===0?'<option value="A17">A17 (Default Plot)</option>':""}
              ${t.map(e=>`<option value="${e.id}">Plot ${e.id} (Section ${e.section})</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Fermentation Start Date</label>
            <input type="date" id="b_fermStart" class="form-input" value="${a.getCurrentDate()}" required />
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
      ${s?`
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
            Ready date: <strong id="calc_readyDate" class="text-green">${a.formatDate(a.addDays(a.getCurrentDate(),30))} (day 30)</strong>
          </div>
        </div>
      `:""}
    </div>
  `,s){const e=()=>{const n=Number(document.getElementById("b_rawCost").value)||0,i=Number(document.getElementById("b_labour").value)||0,r=Number(document.getElementById("b_wrapping").value)||0,c=Number(document.getElementById("b_machinery").value)||0,m=Number(document.getElementById("b_other").value)||0,l=Number(document.getElementById("b_finishedBales").value)||1,u=n+i+r+c+m,p=Math.round(u/l),g=Math.round(n/l),f=Math.round(i/l),h=Math.round((r+c+m)/l);document.getElementById("calc_totalProdCost").textContent=a.formatINR(u),document.getElementById("calc_costPerBale").textContent=`₹ ${p}`,document.getElementById("calc_rawPerBale").textContent=`₹ ${g}`,document.getElementById("calc_labourPerBale").textContent=`₹ ${f}`,document.getElementById("calc_otherPerBale").textContent=`₹ ${h}`;const x=document.getElementById("b_fermStart").value||a.getCurrentDate();document.getElementById("calc_readyDate").textContent=`${a.formatDate(a.addDays(x,30))} (day 30)`};["b_rawCost","b_labour","b_wrapping","b_machinery","b_other","b_finishedBales","b_fermStart"].forEach(n=>{const i=document.getElementById(n);i&&i.addEventListener("input",e)})}document.getElementById("newBatchForm").addEventListener("submit",e=>{e.preventDefault(),a.addBatch({batchNumber:document.getElementById("b_batchNumber").value,productionDate:document.getElementById("b_prodDate").value,rawMaterialKg:document.getElementById("b_rawKg").value,rawMaterialCost:s?document.getElementById("b_rawCost").value:0,labourCost:s?document.getElementById("b_labour").value:0,wrappingCost:s?document.getElementById("b_wrapping").value:0,machineryCost:s?document.getElementById("b_machinery").value:0,otherCost:s?document.getElementById("b_other").value:0,finishedBales:document.getElementById("b_finishedBales").value,plotAssigned:document.getElementById("b_plotAssigned").value,fermentationStart:document.getElementById("b_fermStart").value}),C(),X()}),S()};function tt(){if(!a.canViewFinancials()){w.innerHTML='<div style="padding:40px; text-align:center;">Staff cannot access sales invoices and customer credit records.</div>';return}const t=a.data.sales,o=a.data.customers,e=a.getCurrentDate();w.innerHTML=`
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
      ${o.map(n=>`
        <div class="finance-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div>
              <div style="font-weight:700; font-size:1.05rem; color:var(--primary-navy);">${n.name}</div>
              <div style="font-size:0.8rem; color:var(--text-muted);">${n.phone}</div>
            </div>
            <span class="badge ${n.balancePending>n.creditLimit?"badge-overdue":"badge-receive"}">
              Limit: ${a.formatINR(n.creditLimit,!0)}
            </span>
          </div>

          <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-light); display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.85rem;">
            <div>
              <span style="color:var(--text-muted); font-size:0.75rem; display:block;">Total Purchases:</span>
              <strong>${a.formatINR(n.totalPurchased)}</strong>
            </div>
            <div>
              <span style="color:var(--text-muted); font-size:0.75rem; display:block;">Pending Receivable:</span>
              <strong style="color:var(--red-accent); font-size:1rem;">${a.formatINR(n.balancePending)}</strong>
            </div>
          </div>
        </div>
      `).join("")}
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
            ${t.map(n=>{const i=n.balancePending>0&&n.dueDate&&new Date(n.dueDate)<new Date(e);return`
                <tr>
                  <td><strong style="color:var(--brand-blue);">${n.invoiceNumber}</strong></td>
                  <td>${a.formatDate(n.date)}</td>
                  <td><strong>${n.customerName}</strong></td>
                  <td>${a.formatNumber(n.balesCount)} bales</td>
                  <td>₹ ${n.ratePerBale}</td>
                  <td><strong>${a.formatINR(n.invoiceTotal)}</strong></td>
                  <td><span class="text-green">${a.formatINR(n.amountPaid)}</span></td>
                  <td>
                    <span class="${n.balancePending>0?"text-red":"text-green"} text-bold">
                      ${a.formatINR(n.balancePending)}
                    </span>
                    ${i?'<span class="badge badge-overdue" style="margin-left:4px;">OVERDUE</span>':""}
                  </td>
                  <td>${a.formatDate(n.dueDate)}</td>
                  <td>
                    <span class="badge ${n.status==="Paid"?"badge-ready":"badge-fermenting"}">
                      ${n.status}
                    </span>
                  </td>
                  <td>
                    <button class="btn-navy" style="padding:5px 10px; font-size:0.8rem;" onclick="window.viewInvoiceDetail('${n.id}')">
                      View / Pay
                    </button>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}window.viewInvoiceDetail=function(s){const t=a.data.sales.find(n=>n.id===s);if(!t)return;const o=a.getCurrentDate(),e=t.balancePending>0&&t.dueDate&&new Date(t.dueDate)<new Date(o);N.textContent=`Invoice ${t.invoiceNumber} • ${t.customerName}`,$.innerHTML=`
    <!-- Top Summary Grid -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; background:var(--grey-bg); padding:18px; border-radius:var(--radius-md); margin-bottom:20px;">
      <div>
        <div style="font-size:0.82rem; color:var(--text-muted);">Invoice Total</div>
        <div style="font-size:1.35rem; font-weight:700; color:var(--primary-navy);">${a.formatINR(t.invoiceTotal)}</div>
        <div style="font-size:0.85rem; color:var(--text-sub); margin-top:4px;">
          ${a.formatNumber(t.balesCount)} bales @ ₹ ${t.ratePerBale}
        </div>
      </div>

      <div>
        <div style="font-size:0.82rem; color:var(--text-muted);">Credit Pending</div>
        <div style="font-size:1.35rem; font-weight:700; color:${t.balancePending>0?"var(--red-accent)":"var(--green-accent)"};">
          ${a.formatINR(t.balancePending)}
        </div>
        <div style="font-size:0.85rem; margin-top:4px;">
          Due Date: <strong>${a.formatDate(t.dueDate)}</strong>
          ${e?'<span class="badge badge-overdue" style="margin-left:6px;">OVERDUE</span>':""}
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
          ${(t.stockAllocations||[]).map(n=>`
            <tr>
              <td><span class="badge badge-ready">Plot ${n.plotId}</span></td>
              <td><strong>${n.batchNumber}</strong></td>
              <td><strong>${a.formatNumber(n.bales)} bales</strong></td>
            </tr>
          `).join("")}
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
          ${t.paymentHistory&&t.paymentHistory.length>0?t.paymentHistory.map(n=>`
            <tr>
              <td>${n.date}</td>
              <td><span class="badge badge-blue">${n.mode}</span></td>
              <td><strong class="text-green">${a.formatINR(n.amountPaid)}</strong></td>
              <td><strong>${a.formatINR(n.balanceAfter)}</strong></td>
              <td>${n.note||"--"}</td>
            </tr>
          `).join(""):'<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No payments recorded yet</td></tr>'}
        </tbody>
      </table>
    </div>

    <!-- Action Buttons -->
    <div style="display:flex; gap:10px; justify-content:flex-end;">
      ${t.balancePending>0?`
        <button class="btn-primary" onclick="window.openAddPaymentModal('${t.id}')">
          ＋ Add Payment
        </button>
      `:""}
      <button class="btn-secondary" onclick="window.attachSaleReceipt('${t.id}')">
        📎 Attach Receipt
      </button>
    </div>
  `,S()};window.openAddPaymentModal=function(s){const t=a.data.sales.find(o=>o.id===s);t&&(N.textContent=`Record Payment • ${t.invoiceNumber}`,$.innerHTML=`
    <form id="recordPaymentForm">
      <div style="background:var(--grey-bg); padding:12px; border-radius:var(--radius-md); margin-bottom:16px;">
        <div>Customer: <strong>${t.customerName}</strong></div>
        <div>Current Pending: <strong class="text-red">${a.formatINR(t.balancePending)}</strong></div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">Payment Date</label>
          <input type="text" id="pay_date" class="form-input" value="${a.formatDate(a.getCurrentDate())}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Amount Paid (₹)</label>
          <input type="number" id="pay_amount" class="form-input" max="${t.balancePending}" value="${Math.min(4e4,t.balancePending)}" min="1" required />
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
        <button type="button" class="btn-secondary" onclick="window.viewInvoiceDetail('${t.id}')">Back</button>
        <button type="submit" class="btn-primary">Record Payment</button>
      </div>
    </form>
  `,document.getElementById("recordPaymentForm").addEventListener("submit",o=>{o.preventDefault(),a.addSalePayment(t.id,{date:document.getElementById("pay_date").value,amountPaid:document.getElementById("pay_amount").value,mode:document.getElementById("pay_mode").value,note:document.getElementById("pay_note").value}),window.viewInvoiceDetail(t.id)}))};window.openNewInvoiceModal=function(s={}){const t=a.data.plots.filter(n=>n.status==="Ready"&&n.bales>0),o=a.data.customers;N.textContent="New Bale Invoice",$.innerHTML=`
    <form id="newSaleInvoiceForm">
      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label">Customer</label>
          <select id="s_customer" class="form-select" required>
            ${o.map(n=>`<option value="${n.id}">${n.name} (Bal: ${a.formatINR(n.balancePending)})</option>`).join("")}
            <option value="new">+ Add New Customer</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Invoice Date</label>
          <input type="date" id="s_date" class="form-input" value="${a.getCurrentDate()}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Due Date for Balance</label>
          <input type="date" id="s_dueDate" class="form-input" value="${a.addDays(a.getCurrentDate(),30)}" required />
        </div>
      </div>

      <!-- Ready Plots Multi-Selector (Only Ready Plots Allowed) -->
      <div style="background:#f0fdf4; border:1px solid var(--green-border); border-radius:var(--radius-md); padding:16px; margin-bottom:16px;">
        <div style="font-weight:700; color:var(--green-text); font-size:0.9rem; margin-bottom:8px;">
          🌾 Select Ready Plots for Stock Dispatch
        </div>
        ${t.length===0?'<div style="color:var(--text-muted); font-size:0.85rem;">No ready-for-sale plots available! Complete fermentation first.</div>':""}
        
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:10px;">
          ${t.map(n=>{const i=s.preselectedPlotId===n.id;return`
              <label style="display:flex; align-items:center; gap:8px; background:#fff; padding:8px 10px; border-radius:var(--radius-sm); border:1px solid var(--border-light); cursor:pointer;">
                <input type="checkbox" name="selectedReadyPlots" value="${n.id}" data-max="${n.bales}" ${i?"checked":""} />
                <div>
                  <strong>Plot ${n.id}</strong> (${n.batchNumber})
                  <div style="font-size:0.75rem; color:var(--text-muted);">${n.bales} bales available</div>
                </div>
              </label>
            `}).join("")}
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
  `;const e=()=>{const n=Number(document.getElementById("s_balesCount").value)||0,i=Number(document.getElementById("s_ratePerBale").value)||0,r=Number(document.getElementById("s_gstRate").value)||0,c=Number(document.getElementById("s_amountPaid").value)||0,m=n*i,l=Math.round(m*r/100),u=m+l,p=Math.max(0,u-c);document.getElementById("s_calcInvoiceTotal").textContent=a.formatINR(u),document.getElementById("s_calcPending").textContent=a.formatINR(p)};["s_balesCount","s_ratePerBale","s_gstRate","s_amountPaid"].forEach(n=>{document.getElementById(n).addEventListener("input",e)}),document.getElementById("newSaleInvoiceForm").addEventListener("submit",n=>{n.preventDefault();const i=document.getElementById("s_customer").value,r=a.data.customers.find(p=>p.id===i)||{name:"Direct Customer"},c=Array.from(document.querySelectorAll('input[name="selectedReadyPlots"]:checked')),m=Number(document.getElementById("s_balesCount").value)||0;let l=m;const u=[];c.forEach(p=>{const g=p.value,f=a.data.plots.find(h=>h.id===g);if(f&&l>0){const h=Math.min(f.bales,l);u.push({plotId:g,bales:h}),l-=h}}),a.addSale({customerId:i,customerName:r.name,date:document.getElementById("s_date").value,dueDate:document.getElementById("s_dueDate").value,balesCount:m,ratePerBale:document.getElementById("s_ratePerBale").value,gstRate:document.getElementById("s_gstRate").value,amountPaid:document.getElementById("s_amountPaid").value,paymentMode:document.getElementById("s_mode").value,allocations:u}),C(),tt()}),S()};function V(){if(!a.canViewFinancials()){w.innerHTML='<div style="padding:40px; text-align:center;">Staff cannot access operating expenses.</div>';return}const t=a.data.expenses;w.innerHTML=`
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
            ${t.map(o=>`
              <tr>
                <td>${a.formatDate(o.date)}</td>
                <td><strong>${o.paidTo}</strong></td>
                <td>${o.reason}</td>
                <td><span class="badge badge-blue">${o.category}</span></td>
                <td><strong class="text-red">${a.formatINR(o.amount)}</strong></td>
                <td>${o.mode}</td>
                <td>${o.relatedBatch?`<strong style="color:var(--brand-blue);">${o.relatedBatch}</strong>`:"--"}</td>
                <td>
                  ${o.attachment?`
                    <button class="attach-btn" onclick="window.viewAttachment('${o.attachment.name}')">
                      📎 Bill
                    </button>
                  `:'<span style="color:var(--text-muted); font-size:0.8rem;">None</span>'}
                </td>
                <td>
                  <button class="btn-danger" onclick="window.deleteExpense('${o.id}')">Delete</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `}window.openNewExpenseModal=function(){N.textContent="Add Business Expense",$.innerHTML=`
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
          <input type="date" id="exp_date" class="form-input" value="${a.getCurrentDate()}" required />
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
            ${a.data.batches.map(s=>`<option value="${s.batchNumber}">${s.batchNumber}</option>`).join("")}
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
  `,document.getElementById("newExpenseForm").addEventListener("submit",s=>{s.preventDefault(),a.addExpense({paidTo:document.getElementById("exp_paidTo").value,amount:document.getElementById("exp_amount").value,date:document.getElementById("exp_date").value,mode:document.getElementById("exp_mode").value,category:document.getElementById("exp_category").value,relatedBatch:document.getElementById("exp_batch").value,reason:document.getElementById("exp_reason").value,attachment:{name:document.getElementById("expAttachmentTag").textContent,type:"image"}}),C(),V()}),S()};window.deleteExpense=function(s){confirm("Are you sure you want to delete this expense record?")&&(a.deleteRecord("expense",s),V())};let B="pnl";function et(){if(!a.canViewFinancials()){w.innerHTML='<div style="padding:40px; text-align:center;">Staff cannot access financial reports.</div>';return}w.innerHTML=`
    <!-- Reports Sub-navigation & Export -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:10px;">
      <div class="filters-group">
        <button class="filter-chip ${B==="pnl"?"active":""}" onclick="window.switchReport('pnl')">📊 Profit & Loss</button>
        <button class="filter-chip ${B==="customers"?"active":""}" onclick="window.switchReport('customers')">💼 Customer Balances</button>
        <button class="filter-chip ${B==="suppliers"?"active":""}" onclick="window.switchReport('suppliers')">🛒 Supplier Balances</button>
        <button class="filter-chip ${B==="batches"?"active":""}" onclick="window.switchReport('batches')">🏭 Cost & Profit / Batch</button>
      </div>

      <div>
        <button class="btn-navy" onclick="window.exportCurrentReport()">📥 Download Excel / CSV</button>
      </div>
    </div>

    <!-- Active Report Body -->
    <div id="reportContainer">
      ${dt()}
    </div>
  `}function dt(){if(B==="pnl"){const s=a.data.sales.reduce((r,c)=>r+c.invoiceTotal,0),t=a.data.sales.reduce((r,c)=>r+(c.cogsTotal||c.balesCount*218),0),o=s-t,e={};a.data.expenses.forEach(r=>{e[r.category]=(e[r.category]||0)+Number(r.amount)});const n=Object.values(e).reduce((r,c)=>r+c,0),i=o-n;return`
      <div class="section-box" style="max-width:850px; margin:0 auto;">
        <div class="section-box-header">
          <div class="box-title">Profit & Loss Statement (Comprehensive)</div>
          <span style="font-size:0.85rem; color:var(--text-muted);">Calculated automatically from system entries</span>
        </div>

        <table class="app-table">
          <tbody>
            <tr style="background:#f8fafc; font-weight:700;">
              <td>Revenue from Bale Sales</td>
              <td style="text-align:right; font-size:1.1rem; color:var(--brand-blue);">${a.formatINR(s)}</td>
            </tr>
            <tr>
              <td style="padding-left:24px; color:var(--text-sub);">Less: Cost of Goods Sold (COGS from batches)</td>
              <td style="text-align:right; color:var(--red-accent);">${a.formatINR(t)}</td>
            </tr>
            <tr style="background:#f0fdf4; font-weight:700; border-top:2px solid var(--border-light); border-bottom:2px solid var(--border-light);">
              <td>Gross Profit</td>
              <td style="text-align:right; font-size:1.15rem; color:var(--green-text);">${a.formatINR(o)}</td>
            </tr>

            <tr style="background:#f8fafc; font-weight:700;">
              <td colspan="2">Operating Expenses by Category</td>
            </tr>
            ${Object.entries(e).map(([r,c])=>`
              <tr>
                <td style="padding-left:24px; color:var(--text-sub);">${r} Expenses</td>
                <td style="text-align:right;">${a.formatINR(c)}</td>
              </tr>
            `).join("")}
            <tr style="font-weight:600; color:var(--red-text);">
              <td style="padding-left:24px;">Total Operating Expenses</td>
              <td style="text-align:right;">${a.formatINR(n)}</td>
            </tr>

            <tr style="background:${i>=0?"#dcfce7":"#fee2e2"}; font-weight:700; font-size:1.25rem;">
              <td>Net Profit (Before Tax)</td>
              <td style="text-align:right; color:${i>=0?"var(--green-text)":"var(--red-text)"};">${a.formatINR(i)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `}if(B==="customers")return`
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
            ${a.data.customers.map(s=>`
              <tr>
                <td><strong>${s.name}</strong></td>
                <td>${s.phone}</td>
                <td>${a.formatINR(s.totalPurchased)}</td>
                <td>${a.formatINR(s.totalPaid)}</td>
                <td><strong class="text-red">${a.formatINR(s.balancePending)}</strong></td>
                <td>${a.formatINR(s.creditLimit)}</td>
                <td>
                  <span class="badge ${s.balancePending>0?"badge-overdue":"badge-ready"}">
                    ${s.balancePending>0?"Pending Dues":"Zero Balance"}
                  </span>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;if(B==="suppliers")return`
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
            ${a.data.suppliers.map(s=>`
              <tr>
                <td><strong>${s.name}</strong></td>
                <td>${s.phone}</td>
                <td>${s.city}</td>
                <td>${a.formatINR(s.totalPurchased)}</td>
                <td>${a.formatINR(s.totalPaid)}</td>
                <td><strong class="text-red">${a.formatINR(s.balancePending)}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;if(B==="batches")return`
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
            ${a.data.batches.map(s=>{const t=s.finishedBales*285,o=t-s.totalProductionCost,e=285-s.costPerBale;return`
                <tr>
                  <td><strong style="color:var(--brand-blue);">${s.batchNumber}</strong></td>
                  <td>${a.formatNumber(s.finishedBales)}</td>
                  <td>${a.formatINR(s.totalProductionCost)}</td>
                  <td><span class="badge badge-blue">₹ ${s.costPerBale}</span></td>
                  <td>${a.formatINR(t)}</td>
                  <td><strong class="text-green">${a.formatINR(o)}</strong></td>
                  <td><span class="badge badge-ready">+ ₹ ${e} / bale</span></td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `}window.switchReport=function(s){B=s,et()};window.exportCurrentReport=function(){const s=document.querySelector(".section-box table");if(!s)return alert("No table found to export");let t="data:text/csv;charset=utf-8,";s.querySelectorAll("tr").forEach(i=>{const r=i.querySelectorAll("th, td"),c=Array.from(r).map(m=>`"${m.innerText.replace(/"/g,'""').replace(/\n/g," ")}"`);t+=c.join(",")+`\r
`});const e=encodeURI(t),n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download",`bale_report_${B}_${a.getCurrentDate()}.csv`),document.body.appendChild(n),n.click(),document.body.removeChild(n)};function at(){a.canManageUsers(),w.innerHTML=`
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
              <input type="number" id="setting_fermDays" class="form-input" value="${a.data.settings.fermentationDays}" min="1" max="90" required />
              <small style="color:var(--text-muted); font-size:0.75rem;">Default 30 days. Day 30 automatically flags batch as Ready.</small>
            </div>
            <div class="form-group">
              <label class="form-label">Simulation Current Date (YYYY-MM-DD)</label>
              <input type="date" id="setting_currentDate" class="form-input" value="${a.getCurrentDate()}" required />
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
  `,document.getElementById("settingsForm").addEventListener("submit",s=>{s.preventDefault(),a.data.settings.fermentationDays=Number(document.getElementById("setting_fermDays").value),a.setCurrentDate(document.getElementById("setting_currentDate").value),alert("Settings saved successfully!"),at()}),document.getElementById("addPlotForm").addEventListener("submit",s=>{s.preventDefault();const t=document.getElementById("new_plotId").value.trim().toUpperCase(),o=document.getElementById("new_plotSection").value;try{a.addPlot(t,o),alert(`Plot ${t} created successfully in Section ${o}!`),document.getElementById("new_plotId").value=""}catch(e){alert(e.message)}})}window.resetData=function(){confirm("Reset all plots, batches, purchases, and sales to default wireframe figures?")&&(a.resetToDefault(),O(),alert("Reset complete!"))};window.viewAttachment=function(s){N.textContent=`Attachment: ${s}`,$.innerHTML=`
    <div style="text-align:center; padding:20px; background:var(--grey-bg); border-radius:var(--radius-md);">
      <div style="font-size:3rem; margin-bottom:10px;">📄</div>
      <div style="font-weight:700; font-size:1.1rem; color:var(--primary-navy);">${s}</div>
      <div style="font-size:0.82rem; color:var(--text-muted); margin-top:4px;">Official Invoice / Weighment Receipt Attachment</div>

      <div style="border:1px dashed #cbd5e1; border-radius:var(--radius-md); padding:20px; background:#fff; margin:20px auto; max-width:400px; text-align:left; font-family:monospace; font-size:0.8rem; line-height:1.6;">
        --- OFFICIAL TAX DOCUMENT ---<br/>
        File: ${s}<br/>
        Verified By: Agro Weighbridge Station #2<br/>
        Format: PDF / High-Res Image<br/>
        Status: Verified & Stored on Cloud
      </div>

      <div style="display:flex; justify-content:center; gap:10px; margin-top:16px;">
        <button class="btn-navy" onclick="alert('Downloading attachment ${s}...')">📥 Download File</button>
        <button class="btn-secondary" onclick="window.closeModal()">Close</button>
      </div>
    </div>
  `,S()};window.attachSaleReceipt=function(s){N.textContent="Attach Payment Receipt",$.innerHTML=`
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
  `,S()};function ct(s){switch(s){case"new-expense":window.openNewExpenseModal();break;case"new-production":window.openNewBatchModal();break;case"new-purchase":window.openNewPurchaseModal();break;case"new-sale":window.openNewInvoiceModal();break;case"update-stock":window.openMoveStockModal("A1");break}}function S(){H.classList.add("open")}function C(){H.classList.remove("open")}window.appNav=_;window.closeModal=C;window.setPlotSection=s=>{I=s,F()};window.setPlotStatus=s=>{E=s,F()};window.openAddPlotModal=()=>{_("settings")};rt();
