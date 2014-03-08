var assert = require('assert'),
	figr = require('..'),
	express = require('express'),
	app = express();
	figr(app);
describe('figr', function(){
	it('should exist',function(){
		assert.notEqual(figr,null);
	});
});
describe('app',function(){
	it('should have a property called "type"',function(){
		assert(app.get('type'),"is not truthy");
	});
	it('should have a property called "type"',function(){
		assert(app.get('foo'),"is not truthy");
	});
})
