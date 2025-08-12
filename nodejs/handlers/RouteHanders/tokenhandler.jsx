/**
 * title: Token Handler
 * description: Application Routes
 */


//dependencies
const data = require('../../lib/data');
// const { hash } = require('../../helpers/utilities');
// const { parseJSON } = require('../../helpers/utilities');

//module scaffolding 
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
   const acceptedMethods = ['get', 'post', 'put', 'delete'];
   if (acceptedMethods.indexOf(requestProperties) > -1) {
     handler._token[requestProperties.method](requestProperties, callback);
   } else {
    callback(405);
   }
    
};

handler._toekn = {}; 
 
handler._toekn.post = (requestProperties, callback) => {
 

};

handler._users.get = (requestProperties, callback) => {
 // check the phone number if valid
    const phone = 
    typeof(requestProperties.queryStringObject.phone) === 'string' && 
    requestProperties.queryStringObject.phone.trim().length === 11 
      ? requestProperties.queryStringObject.phone 
      : false;

  if (phone) {
    //lookup the user 
    data.read('user', phone, (err, u) => {
      const user = { ...parseJSON(u)};
      /*

       */

      if (!err && user) {
        delete user.password;
      } else {
        callback(404, {
             'error': 'Requested user wsa not found!'
          });
      }
    })
  } else {
    callback(404, {
      'error': 'Requested user wsa not found!'
    });
  }

};

handler._users.put = (requestProperties, callback) => {
  const phone = 
    typeof(requestProperties.body.phone) === 'string' && 
    requestProperties.body.phone.trim().length === 11 
      ? requestProperties.body.phone 
      : false;
  const firstName = typeof(requestProperties.body.firstName) === 'string' && 
      requestProperties.body.firstName.trim().length > 0 
      ? requestProperties.body.firstName 
      : false;

  const lastName = typeof(requestProperties.body.LastName) === 'string' && 
      requestProperties.body.LastName.trim().length > 0 
      ? requestProperties.body.LastName 
      : false;


  const password = typeof(requestProperties.body.password) === 'string' && requestProperties.
  body.password.trim().length == 11 ? requestProperties.body.password : false;

  if (phone) {
    if (firstName || lastName || password) {
      // loopkup the user
      data.read('user', phone, (err1, uData) => {
        const userData = {...parseJSON(uData)};
        if (!err1 && userData) {
          if (firstName) {
            userData.firstName = firstName;
          }
          if (lastName) {
            userData.firstName = lastName;
          }
          if (password) {
             userData.password = hash.password;
          }

          //store to database
          data.update('user', phone, userData, (err2) => {
            if (!err2) {
              callback(200, {
                message: "User was updated successfully!",
              })
            } else {
              callback(500, {
                error: 'There was a problame in the server side!',
              })
            }
          })
        } else {
            callback(400, {
           error: "you have a problem in your request!"
         })
        }
      })
      
    } else {
      callback(400, {
        error: "you have a problem in your request!"
      })
    }
  } else {
    callback(404, {
      error: "Invalid phone number, Please try again"
    });
  }


};

handler._users.delete = (requestProperties, callback) => {
   // check the phone number if valid
    const phone = 
    typeof(requestProperties.queryStringObject.phone) === 'string' && 
    requestProperties.queryStringObject.phone.trim().length === 11 
      ? requestProperties.queryStringObject.phone 
      : false;

  if (phone) {
    // lookup the user
    data.read('users', phone, (err1, userData) => {
      if (!err1 && userData) {
        data.delete('users', phone, (err2) => {
          if (!err2) {
            callback(200, {
              message: 'User was successfully deleted!',
            })
          }
        })
      } else {
        callback(400, {
           "error": "There was a server side error!"
        })
      }
    })
    
  } else {
    callback(400, {
      "error": "There was a problem in your request!"
    })
  }
};



module.exports = handler;