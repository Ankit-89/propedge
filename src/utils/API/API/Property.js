import APIHandler from '../APIHandler';
import {API} from '../../common';

export default {
  PropertyList: data =>
    APIHandler.get(
      API.URL +
        API.Property.List +
        `?page=${data.page}&page_size=${data.pageSize}`,
    ),
  getPropertyUnits: data =>
    APIHandler.get(API.URL + API.Property.propertyUnits + `?page=${data.page}&page_size=${data.pageSize}`), 
    

  getUnits: data =>
    APIHandler.get(
      API.URL +
        API.Property.Units +
        `/${data.propertyId}` +
        `?page=${data.page}&page_size=${data.pageSize}`,
    ),

  getUnitDetail: data =>
    APIHandler.get(API.URL + API.Property.propertyUnits + `/${data.unitNo}`),

  searchUnit: data =>
    APIHandler.get(API.URL + API.Property.propertyUnits + data),
  getElementUnits: data =>
    APIHandler.get(
      API.URL +
        API.Property.ElementUnits +
        `?property_unit_id=${data.id}`
    ),
  getOwnerUnits: data =>
    APIHandler.get(API.URL + API.Property.OwnerUnits + `/${data.id}`),
};
