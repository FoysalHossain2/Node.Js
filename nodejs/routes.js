/**
 * Title: Routes 
 * Description: Application Routes
 */

//dependencies
const {sampleHandler} = require('./handlers/RouteHanders/sampleHandler');
const { tokenHandler } = require('./handlers/RouteHanders/tokenhandler');
const {userHandler} = require('./handlers/RouteHanders/userHandler')

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler
}

module.exports = routes;