const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

const fetcher = (url, filePath) => {
  // async request to url
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error when requesting:', error);
    } else {
      // async writefile
      fs.writeFile(filePath, body, (writeError) => {
        if (writeError) {
          console.error('Error writing file:', writeError);
        } else {
          // get the length of the body string
          const fileSize = body.length;
          console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
        }
      });
    }
  });
};

fetcher(url, filePath);