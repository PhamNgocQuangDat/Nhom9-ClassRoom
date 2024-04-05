import {URL_API} from '../Api/apiUrl'
import axios from "axios"

export const getBuildings = async () => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.BuildingManager.getList,
        headers: { }
      };
      
      const response = await axios.request(config); 
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }

  }

  export const createBuilding = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.BuildingManager.createBuilding,
        headers: { 'Content-Type': 'application/json' },
        data: data,
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  };

  export const updateBuilding = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: URL_API.BuildingManager.updateBuilding,
        headers: { 'Content-Type': 'application/json' },
        data: data,
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  };

  export const deleteBuilding = async ( id) => {
    try {
      let data = '';
  
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: URL_API.BuildingManager.deleteBuilding+`/${id}`,
        headers: { },
        data: data,
      };
  
      const response = await axios.request(config); 
    //  console.log(response)
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  };
