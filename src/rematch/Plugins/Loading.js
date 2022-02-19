import createLoadingPlugin from '@rematch/loading';

export const loadingPlugin = createLoadingPlugin({
  whitelist: [
    'Auth/loginUser',
    'Auth/loginOutUser',
    'Property/GetUnitDetail',
    'Property/SearchUnit',
    'Property/GetUnit',
    'Property/GetProperty',
    'Property/GetElementUnits',
    'AuditElement/GetOwnerElementUnits',
    'AuditElement/PostElementImage',
    'AuditElement/SubmitOwnerElement',
    'Menu/GetAboutUs', 
    'Menu/GetAllPages', 
    'Invoice/updateInvoice', 
    'Invoice/sendInvoice', 
    'Invoice/paidInvoice', 
    'Invoice/refundInvoice', 
    'Invoice/voidInvoice'
  ],
});
