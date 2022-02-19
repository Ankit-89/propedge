let BaseUrl = '';

if (process.env['API_KEY'] !== 'mock') {
  BaseUrl = 'https://dev.api.propedge.hostnow.site';
}
export const API = {
  URL: BaseUrl,

  User: {
    Login: '/api/v1/auth/login',
    LogOut: '/api/logout',
  },
  Auth: {
    VerifyOtp: '/api/v1/auth/login/verify-otp',
  },
  Post: {
    List: '/posts',
  },
  Property: {
    propertyUnits: '/api/v1/property-units',
    List: '/api/v1/properties',
    SearchUnits: '/api/v1/units',
    Units: '/api/v1/units/property',
    UnitDetail: '/api/v1/units',
    ElementUnits: '/api/v1/checklist',
    OwnerUnits: '/api/v1/units/owner',
    ImageUpload: `/api/v1/media-uploads/public/upload`,
    AuditSessions: '/api/v1/audit-sessions/',
    OwnerSubmit: `/owner/submit`,
  },
  Notification: {
    List: '/api/v1/notifications',
  },
  Menu: {
    AboutUs: '/api/v1/about',
    Terms: '/api/v1/terms-condition',
    Privacy: '/api/v1/private-policy',
    Cancellation: '/api/v1/cancellation-policy',
    AllPages: '/api/v1/settings/pages',
  },
  Appointment: {
    List: '/api/v1/appointments',
    Start: '/api/v1/audit-sessions/start',
    UploadImage: '/api/v1/media-uploads/public/upload',
    SubmitAppointment: '/api/v1/audit-sessions',
    End: '/api/v1/audit-sessions',
    Disable: '/api/v1/checklist-management/checklist-item/disable',
    Enable: '/api/v1/checklist-management/checklist-item/enable'
  },

  AuditElement: {
    StartAudit: `/api/v1/audit-sessions/start`,
  }
};
