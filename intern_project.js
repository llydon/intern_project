const express = require('express');
const app = express();
//Express is the web server

//PortNum is going to be 3000 now for default testing. Might need to make changes for use with Docker.
const portNum = process.env.PORT || 50404; //Port will dynamically change depending on the assigment from the server.

//Timestamp will use the unix format
const timeStamp = Math.floor(new Date().getTime() / 1000);

const output = {
    "message": "My name is Lindsey Lydon",
    "timestamp": timeStamp
};
//Had to move the JSON object to be defined before it is called.
app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json'); //this will change the HTTP header to JSON
    res.json(output);
});
//request to the server and response from the server. Response should be the JSON object.
//once the string is sent the connection is closed.
app.listen(portNum, '0.0.0.0', () => {console.log('Server is running on port ', portNum)}); //example of server check for use with docker.
//It may need to check ports to verify communication with the server.
//This should listen in at the given port# and then responds with a message to console. 

//Another possible way for the outut to be printed, still think Express is the way to go.
console.log(JSON.stringify(output));
