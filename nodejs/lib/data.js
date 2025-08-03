//dependencies

const fs = require('fs');
const path = require('path');

const lib = {};

//base directory of data folder
lib.baseDir = path.join(__dirname, '/../.data/');

//write data to file
lib.create = function(dir, file,  data, callback) {
    fs.open(lib.baseDir + dir + '/' + file + '.json', 'wx', function (err, fileDescriptor) {
        if(!err && fileDescriptor) {
            //convert data to string 
            const stringData = JSON.stringify(data);

            //write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if(!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if(!err3) {
                            callback(false);
                        } else {
                            callback('Error closing new file');
                        }
                    })
                } else {
                    callback('Error writing to new file');
                }
            });
        } else {
            callback(err);
        }
    })
}

module.export = lib;