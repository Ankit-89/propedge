import APIHandler from '../APIHandler';
import { API } from '../../common';

export default {
    getElementUnits: data =>
        APIHandler.get(
            API.URL +
            API.Property.ElementUnits +
            `?property_unit_id=${data.id}`
        ),
    fileUpload: data =>
        APIHandler.uploadImage(API.URL + API.Property.ImageUpload, data),

    postOwnerSubmit: data =>
        APIHandler.post(API.URL + API.Property.AuditSessions + data.id + API.Property.OwnerSubmit, data.body),

    startAuditSession: data =>
        APIHandler.post(API.URL + API.AuditElement.StartAudit, data),
    endAuditSession: data =>
        APIHandler.post(API.URL + API.Property.AuditSessions + data + '/end'),
};
