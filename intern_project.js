const express = require('express');
const app = express();
//Express is the web server

//PortNum is going to be 3000 now for default testing. Might need to make changes for use with Docker.
const portNum = 3000;

//Timestamp will use the unix format
const timeStamp = Math.floor(new Date().getTime() / 1000);

const output = {
    "message": "My name is Lindsey Lydon",
    "timestamp": timeStamp
};
//Had to move the JSON object to be defined before it is called.
app.get('/', (req, res) => {
    res.set('json', 'application/json'); //this will change the HTTP header to JSON
    res.send(output);
});
//request to the server and response from the server. Response should be the JSON object.
//once the string is sent the connection is closed.
app.listen(portNum, () => console.log('Server ready at ', {$portNum})); //example of server check for use with docker.
//It may need to check ports to verify communication with the server.
//This should listen in at the given port# and then responds with a message to console. 

//Another possible way for the outut to be printed, still think Express is the way to go.
console.log(JSON.stringify(output));
