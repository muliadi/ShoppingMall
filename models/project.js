var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productDB = mongoose.createConnection('mongodb://SeongJongKim:123qweasd@ds055709.mongolab.com:55709/project');

module.exports = productDB.model('things',{
	item_id: String,
	upper_category: String,
	sub_category: String,
	brand: String,
	things: String,
	price: Number,
	description: String,
	delivery_charge: Number,
	picture_url: String,
	qty: Number,
	dummyqty : Number
});

mongoose.connection.close();