var config = {};

config.pep_port = 8070;

// Set this var to undefined if you don't want the server to listen on HTTPS
config.https = {
    enabled: false,
    cert_file: 'cert/cert.crt',
    key_file: 'cert/key.key',
    port: 443
};

config.account_host = 'http://localhost:8000';

config.keystone_host = 'localhost';
config.keystone_port = 8050;

config.app_host = 'localhost';
config.app_port = '1028';

config.username = 'pepProxy';
config.password = 'pepProxy';

// in seconds
config.chache_time = 300;

// if enabled PEP checks permissions with AuthZForce GE. 
// only compatible with oauth2 tokens engine
config.azf = {
	enabled: true,
    host: 'localhost',
    port: 8081,
    path: '/authzforce/domains/5e022256-6d0f-4eb8-aa9d-77db3d4ad141/pdp'
};

// options: oauth2/keystone
config.tokens_engine = 'oauth2';

config.magic_key = undefined;

module.exports = config;
