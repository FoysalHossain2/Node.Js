// 
const handle = {};

handle.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties); 

    callback(200, {
        message: 'this is a sample handler response',
    });
}

module.exports = handle;
