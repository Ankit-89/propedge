import store from '..';

import { PropertyHandler, AuthHandler } from '../../utils/API/API';
export const Property = {
  state: {
    arrProperty: [],
    arrUnit: [],
    searchUnits: {},
    elementUnits: [],
    totalUnits: '',
    selectedUnit: {},
    ownerUnits: [],
    isIdle: true,
    isIdleUnitList: true,
  },
  reducers: {
    setProperty(state, payload) {
      return {
        ...state,
        arrProperty: payload,
      };
    },
    setUnit(state, payload) {
      return {
        ...state,
        arrUnit: payload,
      };
    },
    setSelectedUnit(state, payload) {
      return {
        ...state,
        selectedUnit: payload,
      };
    },
    setTotalUnits(state, payload) {
      return {
        ...state,
        totalUnits: payload,
      };
    },
    setSearchUnit(state, payload) {
      return {
        ...state,
        searchUnits: payload,
      };
    },
    setElements(state, payload) {
      return {
        ...state,
        elementUnits: payload,
      };
    },
    setOwnerUnits(state, payload) {
      return {
        ...state,
        ownerUnits: payload,
      };
    },
    setIdle(state, payload) {
      return {
        ...state,
        isIdle: payload,
      };
    },
    setIdleUnitList(state, payload) {
      return {
        ...state,
        isIdleUnitList: payload,
      };
    },
  },
  effects: dispatch => ({
    async GetProperty(payload) {
      try {
        const response = await PropertyHandler.PropertyList({
          page: 1,
          pageSize: 10,
        }).toPromise();
        dispatch.Property.setProperty(response.data);
      } catch (error) {
        console.log('error', error);
      }
    },
    async GetUnit(payload) {
      try {
        dispatch.Property.setIdleUnitList(true);
        const data = await PropertyHandler.getPropertyUnits({ page: 1, pageSize: 100 }).toPromise();
        dispatch.Property.setUnit(data.data);
        dispatch.Property.setTotalUnits(data.meta.pagination.total);
        dispatch.Property.setIdleUnitList(false);
      } catch (error) {
        console.log('error', error);
        return { ...error }
      }
    },
    async GetUnitDetail(payload) {
      try {
        const data = await PropertyHandler.getUnitDetail({
          unitNo: payload,
        }).toPromise();
        dispatch.Property.setSelectedUnit(data.data);
        // dispatch.Property.setTotalUnits(data.meta.pagination.total);
      } catch (error) {
        console.log('error', error);
      }
    },
    async SearchUnit(payload) {
      try {
        dispatch.Property.setIdle(true);
        let endPoint = `?page=1&page_size=100&search=${payload}`
        const data = await PropertyHandler.searchUnit(endPoint).toPromise();
        if (data.data && data.data.length > 0) {
          dispatch.Property.setSearchUnit({
            arrSearchUnit: data.data,
            isNodata: false,
          });
        } else {
          dispatch.Property.setSearchUnit({
            arrSearchUnit: [],
            isNodata: true,
          });
        }
        dispatch.Property.setIdle(false);
      } catch (error) {
        dispatch.Property.setSearchUnit({
          arrSearchUnit: [],
          isNodata: true,
        });
        dispatch.Property.setIdle(false);
        console.log('error', error);
      }
    },
    async GetElementUnits(params) {
      try {
        dispatch.Property.setIdle(false);
        console.log(params.id)
        const { data } = await PropertyHandler.getElementUnits(
          params,
        ).toPromise();
        // const newData = JSON.stringify(data.elementUnits.checkList);
        // console.log(data[0].checkList)
        dispatch.Property.setElements(data.checklist_areas);
        dispatch.Property.setIdle(true);
      } catch (error) {
        dispatch.Property.setIdle(true);
        console.log('error', error);
      }
    },

    async GetOwnerUnits(ownerId) {
      try {
        const { data } = await PropertyHandler.getOwnerUnits({
          id: ownerId,
        }).toPromise();
        dispatch.Property.setOwnerUnits(data.units);
      } catch (error) {
        console.log('error', error);
      }
    },
  }),
};
