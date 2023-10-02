"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var chai_1 = require("chai");
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
var apiUrl = 'https://reqres.in/api/users/2'; // Replace with your API endpoint URL
// Create an Axios configuration object with headers
var axiosConfig = {
    method: 'GET',
    url: apiUrl,
    //headers: headers,
};
// Make the HTTP request using Axios
(0, axios_1.default)(axiosConfig).then(function (response) {
    // Process the API response
    console.log('API response:', response.data);
    (0, chai_1.expect)(response.status).to.equal(200);
    console.log('API status code:', response.status);
    // Perform actions based on the response
    if (response.data != null) {
        console.log('API test passed!');
    }
    else {
        console.error('API test failed!');
    }
})
    .catch(function (error) {
    // Handle any errors
    console.error("Error making API request: ".concat(error));
});
