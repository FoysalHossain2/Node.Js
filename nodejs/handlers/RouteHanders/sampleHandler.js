/**
 * Title: Sample Handler
 * Description: Sample Handler for testing purposes
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample handler response'
    })
    
};


module.exports = handler;