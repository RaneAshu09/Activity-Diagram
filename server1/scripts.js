const xml2json = require("xml-to-json");
const fs = require("fs");

let finalConfig = new Array();

// conversion of XMI to JSON
exports.convertXMITOJSON = (filepathstring) => {
  console.log("called.");
  return new Promise((resolve, reject) => {
    xml2json(
      {
        input: filepathstring,
        output: "./test.json",
      },
      function (err, result) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};
