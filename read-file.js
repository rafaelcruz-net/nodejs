const { readFile } = require("fs");

module.exports = {
    readFileCustom: (filename, callback) => {
        readFile(filename, 'utf8', (err, file) => {
            callback(file);
        });
    }
};

