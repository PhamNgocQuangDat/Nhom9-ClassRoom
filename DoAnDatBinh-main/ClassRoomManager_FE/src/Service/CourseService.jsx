import {URL_API} from '../Api/apiUrl'
import axios from "axios"

export const getCources = async () => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.CourseManager.getList,
        headers: { }
      };
      
      const response = await axios.request(config); 
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }

  }

  export const createCource = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.CourseManager.create,
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

  export const updateCource = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: URL_API.CourseManager.update,
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

  export const deleteCource = async ( id) => {
    try {
      let data = '';
  
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: URL_API.CourseManager.delete+`/${id}`,
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
