'use strict';

var Mongoose = require('mongoose');
exports.register = function(server, options, next) {
    Mongoose.connect('mongodb://localhost:27017/hapi-db');
    next();
};


exports.register.attributes = {
    name: 'hapiMongoose',
    version: '0.1.0'
};