/**
 * title: Routes
 * description: Application Routes
 */


//dependencies
const { error } = require('console');
const data = require('../../lib/data')

//module scaffolding 
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
  const firstName = typeof(requestProperties.body.firstName) === 'string' && requestProperties.
  body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;

  const LastName = typeof(requestProperties.body.LastName) === 'string' && requestProperties.
  body.LastName.trim().length > 0 ? requestProperties.body.LastName : false;

  const phone = typeof(requestProperties.body.phone) === 'string' && requestProperties.
  body.phone.trim().length == 11 ? requestProperties.body.phone : false;

  const password = typeof(requestProperties.body.password) === 'string' && requestProperties.
  body.password.trim().length == 11 ? requestProperties.body.password : false;

  const tosAgreement = typeof(requestProperties.body.tosAgreement) === 'string' && requestProperties.
  body.tosAgreement.trim().length == 11 ? requestProperties.body.tosAgreement : false;

  if (firstName && LastName && phone && password && tosAgreement) {
    //make sure that the user doesn't already exists
    data.read('users', phone, (err, user) => {
      if (err) {
        let userObject = {
          firstName,
          LastName,
          phone,
        }
      } else {
        callback(500, {
          error: 'There was a problem in server side!',
        })
      }
    });

  } else {
    callback(400, {
      error: 'you have a problem in your request'
    })
  }

};

handler.users.get = (requestProperties, callback) => {
 
};

handler.users.put = (requestProperties, callback) => {
   
};

handler.users.delete = (requestProperties, callback) => {

};



module.exports = handler;