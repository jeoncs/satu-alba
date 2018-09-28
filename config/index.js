var config = {
	local: {
		mode: 'local',
		port: '3030'
	},
	staging: {
		mode: 'staging',
		port: '4000'
	},
	production: {
		mode: 'production',
		port: '5000'
	},
	mongo: {
		host: '127.0.0.1',
		port: '27017'
	}
};

module.exports = function(mode){
	// return config[mode || process.argv[2] || 'local'] || config.local;
	return config;
};