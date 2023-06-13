import {message} from 'antd'
import axiosInstance from "../helper/axiosInstance";
import { setToken } from '../helper/FormHHelper';

export const registrationRequest =  async (userName, password, photo, role, social) => {
    try {
      const URL = `/register`;
      const PostBody = { userName, password, photo, role, social };
      
      const response = await axiosInstance.post(URL, PostBody);
      
      if (response.status === 200) {
        if (response.data.status === "fail") {
          if (response.data.data.keyPattern.email === 1) {
            message.error("Email Already Exist");
            return false;
          } else {
            message.error("Something Went Wrong 1");
            return false;
          }
        } else {
            message.success("Registration Success");
          return true;
        }
      } else {
        message.error("Something Went Wrong");
        return false;
      }
    } catch (error) {
        message.error("Something Went Wrong");
      return false;
    }
  }

  export const loginRequest = async (userName, password) => {
    try {
      const loginData = {
        userName: userName,
        password: password,
      };
  
      // Make a POST request to the login endpoint
      const response = await axiosInstance.post('/login', loginData);
  
      // Handle the response
      if (response.status === 200) {
        setToken(response.data.token);
        message.success('Login Success');
        return true;
      } else {
        message.error('Invalid Email or Password');
        return false;
      }
    } catch (error) {
      console.error(error)
      message.error("Something went wrong");
      return false;
    }
  };
  