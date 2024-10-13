"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var chai_1 = require("chai");
// 1. GET Request
// Define the URL you want to make a request to
//const apiUrl: string = 'https://reqres.in/api/users/2'; 
// Create an Axios configuration object 
var axiosConfig = {
    method: 'GET',
    url: 'https://reqres.in/api/users/2',
    headers: {},
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
//post request
var axiosConfig1 = {
    method: 'POST',
    url: 'https://reqres.in/api/users',
    data: {
        "name": "morpheus",
        "job": "leader"
    }
};
(0, axios_1.default)(axiosConfig1).then(function (response) {
    console.log('API response', response.data);
    (0, chai_1.expect)(response.status).to.be.equal(200);
}).catch(function (error) {
    console.error("Error in request: ".concat(error));
});
