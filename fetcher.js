/*
function should take two command line arguments:
1. a URL
2. a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/

//Get input from command line
let url = process.argv.slice(2);

//Use node 'request' package to make HTTP requests
const request = require('request');

//Send HTTP request to url specified in the command line
request(url[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  //Use node filesystem to write to a file
  const fs = require('fs');
  const content = body;

  //Write contents of body to file specified in the commandline
  fs.writeFile(url[1], content, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${url[1]}`);
    }
  });
});