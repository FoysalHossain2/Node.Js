/**
 * Title: Environments
 * Description: Handle all environments related things
 */

//dependenciesdfg

//module scaffolding 
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretkey: 'hjakjdfafgjkhahjaj',
}

environments.production = {
    port: 5000,
    envName: 'production',
    secretkey: 'hjakjdfafgjkhahjaj',
};


//determine which environment was passed
 const currentEnvironment = typeof ( process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';


// export corresponding environment object
const environmentToExport  = 
    typeof (environments[currentEnvironment]) === 'object' 
    ? environments[currentEnvironment]
     : environments.staging;


     //export module
module.exports = environmentToExport;