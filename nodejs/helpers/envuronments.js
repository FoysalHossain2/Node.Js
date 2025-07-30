// title: Environments Helper
// description: Handle all environments related things


// dependencies
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
}

environments.production= {
    port: 5000,
    envName: 'production',
}

//determine which environment was passed 

const currentEnvironment = typeof(process.env.NODE_ENV) === 'sting' ? process.env.NODE_ENV : 'string';

// export corresponding environment object
const environmentToExport  = typeof( environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

// export module
module.exports = environmentToExport;