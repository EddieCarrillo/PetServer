var _  = require('lodash')

var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.port,
  //7 Days in hours
  expireTime: '168 h',
  secrets: {
    jwt: process.env.JWT || 'lemon'
  }
};


process.env.NODE_ENV = process.env.NODE_ENV || config.dev
config.env = process.env.NODE_ENV

//Depends on current configuration
var envConfig;

try{
  envConfig = require('./' + config.env)
  envConfig = envConfig || {}


}catch(err){
  envConfig || {}
}

module.exports = _.merge(config, envConfig)
