import {URL_API} from '../Api/apiUrl'
import axios from "axios"

export const getTypeClassRooms = async () => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.TypeClassRoomManager.getList,
        headers: { }
      };
      
      const response = await axios.request(config); 
      return response.data; 
    } catch (error) {
      console.log(error);
      return null;
    }

  }
  export const createTypeClassRoom = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.TypeClassRoomManager.createTypeClassRoom,
        headers: { 'Content-Type': 'application/json' },
        data: data,
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  export const updateTypeClassRoom = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: URL_API.TypeClassRoomManager.updateTypeClassRoom,
        headers: { 'Content-Type': 'application/json' },
        data: data,
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
    
      return null;
    }
  };

  export const deleteTypeClassRoom = async ( id) => {
    try {
      let data = '';
  
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: URL_API.TypeClassRoomManager.deleteTypeClassRoom+`/${id}`,
        headers: { },
        data: data,
      };
  
      const response = await axios.request(config); 
     console.log(response)
      return response.data; 
    } catch (error) {
      
      return null;
    }
  };

  