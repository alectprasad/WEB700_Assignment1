/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Alect Prasad Student ID: 101977239 Date: 5/18/2024
*
********************************************************************************/
//initialize valid routes and responses
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = ["Welcome to WEB700 Assignment 1",
                         "This assignment was prepared by Alect Prasad",
                         "Alect Prasad: aprasad20",
                         "User Logged In",
                         "Main Panel",
                         "Logout Complete"];


function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        //loop through each valid method and route pair and compare with incoming request
        if(JSON.stringify([serverVerbs[i],serverPaths[i]]) == JSON.stringify([httpVerb, path]))
            //a valid routing is found. return response
            return "200: " + serverResponses[i];
    }
    //no valid routing found
    return `404: Unable to process ${httpVerb} request for ${path}`;
};