// Description: This file handles the not found route for the Node.js application.

// Not Found Handler
const handle = {};

handle.notFoundHandler = (requestProperties, callback) => {

    callback(404, {
        message: 'Your requested URL was not found on this server.',
    })
}

module.exports = handle;
