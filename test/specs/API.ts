import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { expect} from 'chai';

// import { describe } from 'mocha';
// import { it } from 'mocha';

// describe('API Tests', ()=>{
//     it('Get API', async()=>{
//         const responce = await axios.get('https://reqres.in/api/users/2');
//         expect (responce.status).to.equal(200);
//         //expect (responce.data).to.have.property

//     })
// })


// Define your custom request headers
// const headers: Record<string, string> = {
//     'Authorization': 'Bearer YourAccessToken', // Example: Add an authorization header
//     'Custom-Header': 'CustomValue', // Add any custom headers you need
//   };
  
  // Define the URL you want to make a request to
  const apiUrl: string = 'https://reqres.in/api/users/2'; // Replace with your API endpoint URL
  
  // Create an Axios configuration object with headers
  const axiosConfig: AxiosRequestConfig = {
    method: 'GET', // Replace with the HTTP method you need
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