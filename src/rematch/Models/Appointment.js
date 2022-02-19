import {AppointmentHandler} from '../../utils/API/API';
export const Appointment = {
  state: {
    arrList: [],
    appointmentDetails: {},
    isIdle: true,
    ongoingAppointment: {},
    waitingForOwnerFeedback: false,
    isFatching: true,
  },
  reducers: {
    setAppointmentList(state, payload) {
      return {
        ...state,
        arrList: payload,
      };
    },
    setOngoingAppointment(state, payload) {
      return {
        ...state,
        ongoingAppointment: payload,
      };
    },
    setDetails(state, payload) {
      return {
        ...state,
        appointmentDetails: payload,
        isFatching: false,
      };
    },
    setIdle(state, payload) {
      return {
        ...state,
        isFatching: payload,
      };
    },
    setOwnerFeedback(state, payload) {
      return {
        ...state,
        waitingForOwnerFeedback: payload,
      };
    },
  },
  effects: dispatch => ({
    async GetAppointmentList(payload) {
      try {
        const {data} = await AppointmentHandler.AppointmentList({
          page: 1,
          page_size: 100,
          status: payload.tab,
          access_token: payload.access_token,
        }).toPromise();
        dispatch.Appointment.setAppointmentList(data);
      } catch (error) {
        console.log('error', error);
      }
    },
    async GetAppointmentDetails(payload) {
      dispatch.Appointment.setIdle(true);
      try {
        const {data} = await AppointmentHandler.getAppointmentDetails(
          payload,
        ).toPromise();
        dispatch.Appointment.setDetails(data);
      } catch (error) {
        console.log('error', error);
      }
    },
    async uploadImage(payload) {
      try {
        const {data} = await AppointmentHandler.uploadImage(
          payload,
        ).toPromise();
        return data;
      } catch (error) {
        console.log('error', error);
      }
    },
    async submitAppointment(payload) {
      try {
        const {data} = await AppointmentHandler.submitAppointment(
          payload,
        ).toPromise();
        if (data.owner_feedback_status === 'pending') {
          dispatch.Appointment.setOwnerFeedback(true);
        }
        return data;
      } catch (error) {
        console.log('error', error);
      }
    },
    async StartAppointment(payload) {
      try {
        const {data} = await AppointmentHandler.startAppointment(
          payload,
        ).toPromise();
        dispatch.Appointment.setOngoingAppointment(data);
        dispatch.Appointment.setOwnerFeedback(false);
        return data;
      } catch (error) {
        console.log('error', error);
        return '';
      }
    },
    async EndAppointment(payload) {
      try {
        const {data} = await AppointmentHandler.endAppointment(
          payload,
        ).toPromise();
        return data;
      } catch (error) {
        console.log('error', error);
        return '';
      }
    },
    async ChangeElementStatus(payload) {
      return new Promise(async function (resolve, reject) {
        if (!payload.value) {
          const {data} = await AppointmentHandler.enableElement(
            payload,
          ).toPromise();
          resolve(true);
        } else {
          const {data} = await AppointmentHandler.disableElement(
            payload,
          ).toPromise();
          resolve(true);
        }
      });
    },
  }),
};
