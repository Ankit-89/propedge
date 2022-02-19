import APIHandler from '../APIHandler';
import { API } from '../../common';

export default {
  AppointmentList: data =>
    APIHandler.get(
      API.URL +
      API.Appointment.List +
      `?status=${data.status}&page=${data.page}&page_size=${data.page_size}`, {
      Authorization: `Bearer ${data.access_token}`
    }
    ),
  getAppointmentDetails: data =>
    APIHandler.get(API.URL + API.Appointment.List + `/${data.id}`, {
      Authorization: `Bearer ${data.access_token}`
    }),
  startAppointment: data =>
    APIHandler.post(API.URL + API.Appointment.Start, {
      appointment_id: data.id
    }, {
      Authorization: `Bearer ${data.access_token}`
    }),
  uploadImage: data =>
    APIHandler.post(API.URL + API.Appointment.UploadImage, data),
  submitAppointment: data => {
    const id = data.id;
    const access_token = data.access_token;
    delete data.id;
    delete data.access_token;
    return APIHandler.post(API.URL + API.Appointment.SubmitAppointment + `/${id}/auditor/submit`, {
      ...data
  }, {
    Authorization: `Bearer ${access_token}`
  })
  },
  endAppointment: data =>
    APIHandler.post(API.URL + API.Appointment.End + `/${data.id}/end`,{}, {
      Authorization: `Bearer ${data.access_token}`
  }),
  disableElement: data =>
    APIHandler.post(API.URL + API.Appointment.Disable,{
      "checklist_area_id": data.checklist_area_id,
      "checklist_group_id": data.checklist_group_id,
      "checklist_item_id": data.checklist_item_id,
      "property_unit_id": data.property_unit_id,
    }, {
      // Authorization: `Bearer ${data.access_token}`
  }),
  enableElement: data =>
    APIHandler.post(API.URL + API.Appointment.Enable,{
      "checklist_area_id": data.checklist_area_id,
      "checklist_group_id": data.checklist_group_id,
      "checklist_item_id": data.checklist_item_id,
      "property_unit_id": data.property_unit_id,
    }, {
      // Authorization: `Bearer ${data.access_token}`
  }),
};
