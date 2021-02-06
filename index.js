var tmi = require('tmi.js');
var request = require('request');
const express = require('express');
var http = require('http');

const app = express();
const userChannel = process.env.CHANNEL;

setInterval(function() {
		http.get(process.env.HEROKU_URL);
	}, 600000); //every 10 minutes

var ans = '';

var options = {
	options: {
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity: {
		username: process.env.USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [userChannel]
};

var client = new tmi.client(options);
// Connect the client to the server
client.connect();


client.on('connected', function(address, port){
	client.action(userChannel, `LUL`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Listening on ${port}`);
});
