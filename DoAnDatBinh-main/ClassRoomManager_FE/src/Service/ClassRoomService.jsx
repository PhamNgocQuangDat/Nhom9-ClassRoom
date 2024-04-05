import {URL_API} from '../Api/apiUrl'
import axios from "axios"

export const getClassRooms = async () => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.ClassRoomManager.getList,
        headers: { }
      };
      
      const response = await axios.request(config); 
      return response.data; 
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  export const createClassRoom = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.ClassRoomManager.createClassRoom,
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

  export const updateClassRoom = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: URL_API.ClassRoomManager.updateClassRoom,
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

  export const deleteClassRoom = async ( id) => {
    try {
      let data = '';
  
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: URL_API.ClassRoomManager.deleteClassRoom+`/${id}`,
        headers: { },
        data: data,
      };
  
      const response = await axios.request(config); 
     console.log(response)
      return response.data; 
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  