import {URL_API} from '../Api/apiUrl'
import axios from "axios"


export const login_User = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.Login.login_user,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  };

  export const login_Student = async ( Data) => {
    try {
      const data = JSON.stringify(Data); 
  
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: URL_API.Login.login_student,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  };

  export const CheckInformation = async ( token) => {
    try {
     
  
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: URL_API.Login.checkInformation,
        headers: { 
          'Authorization': 'Bearer ' + `${token}`
        }
      };
  
      const response = await axios.request(config); 
     
      return response.data; 
    } catch (error) {
      // console.log(error);
      return null;
    }
  }