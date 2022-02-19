import { ElementHandler } from '../../utils/API/API';
export const AuditElement = {
    state: {
        elementUnits: [],
        startAudit:null,
        actionLoading: false,
    },
    reducers: {
        setElements(state, payload) {
            return {
                ...state,
                elementUnits: payload,
            };
        },
        setStartAudit(state, payload) {
            return {
                ...state,
                startAudit: payload,
            };
        },
        setActionLoading(state, payload) {
            return {
                ...state,
                actionLoading: payload,
            };
        },
    },
    effects: dispatch => ({
        async GetOwnerElementUnits(params) {
            try {
                const { data } = await ElementHandler.getElementUnits(
                    params,
                ).toPromise();
                dispatch.AuditElement.setElements(data);
            } catch (error) {
                console.log('error', error);
            }
        },
        async PostElementImage(payload) {
            try {
                dispatch.AuditElement.setActionLoading(true)
                const data = await ElementHandler.fileUpload(payload);
                dispatch.AuditElement.setActionLoading(false)
                if (data.data) {
                    let newData = { ...data.data };
                    return newData;
                } else {
                    return {};
                }
            } catch (error) {
                console.log('error', error);
            }
        },
        async SubmitOwnerElement(payload) {
            try {
                dispatch.AuditElement.setActionLoading(true)
                const data = await ElementHandler.postOwnerSubmit(payload).toPromise()
                dispatch.AuditElement.setActionLoading(false)
                console.log(data)
                return {...data}
            } catch (error) {
                console.log('error', error);
            }
        },
        async StartAudit(payload) {
            try {
                const response = await ElementHandler.startAuditSession(payload).toPromise();
                const newData = {...response};
                console.log('New Data:', newData);
                dispatch.AuditElement.setStartAudit(response)
                return newData
            } catch (error) {
                console.log('error===', error);
                const newData = {...error};
                return newData

            }
        },
        async EndAudit(payload) {
            console.log('payload::',payload)
            try {
                dispatch.AuditElement.setActionLoading(true)
                const response = await ElementHandler.endAuditSession(payload).toPromise();
                dispatch.AuditElement.setActionLoading(false)
                const newData = {...response};
                console.log('New Data:', newData);
                return newData
            } catch(error) {
                console.log('error===', error);
                const newData = {...error};
                return newData
            }
        }

    }),
};
