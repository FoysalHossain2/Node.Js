/**
 * Title: not Found Handler
 * Description: not Found Handler for testing purposes
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(404, {
        message: 'Your requested URL was not found',
    })

};


module.exports = handler;