// essential requirements
var express = require('express');
var path = require('path');

// .env config 
require('dotenv').config();

// additional requirements
var app = express();

// port and heroku connections
var port = process.env.PORT || 5000;

// directing to the static files from client side 
// removed ```app.use(express.static('public'));``` 
// from later in the code because it produced more 
//errors than before by only using it.
app.use(express.static('server/public'));

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;

// GitHub API User Options
var user_options = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

// Moved API call into server to protect oAuthToken
app.get('/github/user', function (req, res) {
  request(user_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

// GitHub API Repo Options
var repo_options = {
  url: 'https://api.github.com/users/' + username + '/repos',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

// Moved API call into server to protect oAuthToken
app.get('/github/repos', function (req, res) {
  request(repo_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

// Port listening to spin up server
app.listen(port, function () {
  console.log('localhost running on port', port);
});