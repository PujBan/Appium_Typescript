import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { expect} from 'chai';

  // 1. GET Request
  // Define the URL you want to make a request to
  const apiUrl: string = 'https://reqres.in/api/users/2'; 
  
  // Create an Axios configuration object 
  const axiosConfig: AxiosRequestConfig = {
    method: 'GET', 
    url: apiUrl,
    //headers: headers,
  };
  
  // Make the HTTP request using Axios
  axios(axiosConfig).then((response) => {
      // Process the API response
      console.log('API response:', response.data);
      expect (response.status).to.equal(200);
      console.log('API status code:', response.status)
  
      // Perform actions based on the response
      if (response.data != null) {
        console.log('API test passed!');
      } else {
        console.error('API test failed!');
      }
    })
    .catch((error) => {
      // Handle any errors
      console.error(`Error making API request: ${error}`);
    });