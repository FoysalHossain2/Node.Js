/**
 * title: Routes
 * description: Application Routes
 */


//dependencies
const { error } = require('console');
const data = require('../../lib/data');
const { hash } = require('../../helpers/utilities');

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

handler._users = {}; 
 
handler._users.post = (requestProperties, callback) => {
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
    data.read('users', phone, (err1, user) => {
      if (err1) {
        let userObject = {
          firstName,
          LastName,
          phone,
          password: hash(password),
          tosAgreement
        }
        //store the user to db
        data.create('users', phone, userObject,(err2) => {
          if (!err2) {
            callback(200, {
              'message': 'User was created successfully!',
            })
          } else {
            callback(500, {'error': 'could nto carete user!'});
          }
        })

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

handler._users.get = (requestProperties, callback) => {
 
};

handler._users.put = (requestProperties, callback) => {
   
};

handler._users.delete = (requestProperties, callback) => {

};



module.exports = handler;