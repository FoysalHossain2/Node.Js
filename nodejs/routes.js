/**
 * Title: Routes 
 * Description: Application Routes
 */

//dependencies
const {sampleHandler} = require('./handlers/RouteHanders/sampleHandler');

const routes = {
    'sample': sampleHandler,
}

module.exports = routes;