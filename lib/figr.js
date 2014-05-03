var path = require('path'),
	fs = require('fs'),
	extend = require('extend'),
	resolve = path.resolve,
	exists = fs.existsSync,
	read = fs.readFileSync;

function jsonify(resource) {
	if( exists(resource+'.js') ) 
		return require(resource);
	if( exists(resource+'.json') ) 
		return JSON.parse( read(resource+'.json') );
	throw new Error('\''+resource+'\' doesn\'t exist.');
}

var result = (function loadConfig() {
	var config_dir = resolve(process.cwd(),'config'),
		env = process.env.NODE_ENV || 'development',
		env_file = resolve( config_dir, env ),
		all_file = resolve( config_dir, 'all'),
		result;
	try {
		result = extend ( 
			true,
			{},
			jsonify(all_file),
			jsonify(env_file) 
		);
	}
	catch (err) {
		throw err;
	}
	return result;
})();


/*
	If you have a Connect or Express app running, you can pass it in to bootstrap
	the config settings.
	
	In either case it returns the resulting config.
*/

function figr(app){
	var key;
	if(app && app.set) {
		for(key in result) {
			app.set(key, result[key]);
		}
	}
	return result;
};
module.exports = figr;