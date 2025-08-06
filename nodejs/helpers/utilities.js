/**
 * Title: Utilities 
 * Description: Impotent Utilities 
 */

//dependencies

//module scaffolding 
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

module.exports = utilities;