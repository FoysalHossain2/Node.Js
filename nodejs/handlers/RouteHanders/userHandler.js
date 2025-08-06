/**
 * title: Routes
 * description: Application Routes
 */


//dependencies
const handler = {};

handler.userHandler = (requestProperties, callback) => {
   const acceptedMethods = ['get', 'post', 'put', 'delete'];
   if (acceptedMethods.indexOf(requestProperties) > -1) {
     handler._users[requestProperties.method](requestProperties, callback);
   } else {
    callback(405);
   }
    
};

handler.users = {}; 
 
handler.users.post = (requestProperties, callback) => {

};

handler.users.get = (requestProperties, callback) => {
callback(200)
};

handler.users.put = (requestProperties, callback) => {

};

handler.users.delete = (requestProperties, callback) => {

};



module.exports = handler;