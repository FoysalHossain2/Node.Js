/**
 * Title: Utilities 
 * Description: Impotent Utilities 
 */

//dependencies

//module scaffolding 
const crypto = require('crypto');
const utilities = {};
 
//parse JSON string to Object
utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString);
    } catch (error) {
        
    }

    return output
}

//hash string 
utilities.hash = (str) => {
   if (typeof(str) === 'string' && str.length > 0) {
        let hash = crypto
    .createHmac('sha256', 'hdjhrjdhrdfhdjf') // Using createHmac instead of createMmac
    .update(str)
    .digest('hex');


   }
}

module.exports = utilities;