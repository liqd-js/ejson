'use strict';

const EJSON = require('../lib/ejson');

let ejson = EJSON.stringify({ foo: [ 1, 'bar', new Date() ] });

console.log( ejson );

console.log( EJSON.parse( ejson ));