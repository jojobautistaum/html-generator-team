const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('../dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          console.log (err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'HTML file is generated! at ./dist/index.html'
        });
      });
    });
  };

module.exports = writeFile;