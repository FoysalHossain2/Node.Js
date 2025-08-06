/**
 * Title: Routes 
 * Description: Application Routes
 */

//dependencies
const {sampleHandler} = require('./handlers/RouteHanders/sampleHandler');
const {userHandler} = require('./handlers/RouteHanders/userHandler')

const routes = {
    sample: sampleHandler,
    user: userHandler,
}

module.exports = routes;