//dependencies

const fs = require('fs');
const path = require('path');

const lib = {};

//base directory of data folder
lib.baseDir = path.join(__dirname, '/../.data/');


// write data of the folder
lib.create = function (dir,file, data, callback) {

    //open file for writing 
    fs.open(lib.baseDir + dir+ '/' + file + '.json', 'wx', function(err, fileDescriptor) {
        if (!err && fileDescriptor) {
            //convert data to string 
            const stringData = JSON.stringify(data);

            //write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, function(err2)  {
                 if(!err2) {
                    fs.close(fileDescriptor, function(err3) {
                        if(!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file')
                        }
                    })
                } else {
                    callback('Error writing to new file!');
                }
            })

        } else {
            callback(err)
        }
    })
};

//read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.baseDir + dir} / ${file}.json`, 'utf8', (err, data) => {
        callback(err, data)
    });
}

//update existing file
lib.update = (dir, file, data, callback) => {
    //file open for writhing 
    fs.open(`${lib.baseDir + dir} / ${file}.json`, 'r+', (err, fileDescriptor) => {
        if(!err && fileDescriptor){
            //convert the data to string
            const stringData = JSON.stringify(data);

            //truncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if(!err1){
                    // wite to the file and close it
                    fs.writeFile(fileDescriptor, stringData, (err2) => {
                        if(!err2) {
                            //close the file 
                            fs.close(fileDescriptor, (err3) => {
                                if(!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing file!')

                                }
                            })
                        } else {
                            callback('Error writing to file!')
                        }
                    })
                } else {
                    console.log('Error truncation file!');
                }
             })

        }else {
            console.log(`Error updating. File may not exist`);
        }
    } )
}

//delete data
lib.delete = (dir, file, callback) => {
    
}


module.exports = lib;