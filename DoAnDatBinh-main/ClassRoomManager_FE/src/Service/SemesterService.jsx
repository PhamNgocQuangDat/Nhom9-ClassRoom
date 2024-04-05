import {URL_API} from '../Api/apiUrl'
import axios from "axios"

export const getSemesters = async () => {
    try {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.SemesterManager.getList,
        headers: { }
      };
      
      const response = await axios.request(config); 
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }

  }

  export const createSemester = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.SemesterManager.create,
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

  export const updateSemester = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: URL_API.SemesterManager.update,
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

  export const deleteSemester = async ( id) => {
    try {
      let data = '';
  
      const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: URL_API.SemesterManager.delete+`/${id}`,
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
