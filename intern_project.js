const express = require('express')
const app = express()
//Express is the web server

app.get('/', (req, res) => {
    res.set('json', 'application/json') //this will change the HTTP header to JSON
    res.send(output);
});
//request to the server and response from the server. Response should be the JSON object.
//once the string is sent the connection is closed.
app.listen(portNum, () => console.log('Server ready'))
//This should listen in at the given port# and then responds with a message to console. 

output.app //Express JSON app object reference

//Timestamp will use the unix format
const timeStamp = Math.floor(new Date().getTime() / 1000);

const output = {
    "message": "My name is Lindsey Lydon",
    "timestamp": timeStamp
};

//Another possible way for the outut to be printed, still think Express is the way to go.
console.log(JSON.stringify(output));
