'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);

fs.readFile('listings.json', 'utf8', function(err, data) {
    if (err) throw (err);
    var listingData = JSON.parse(data).entries;

    listingData.forEach(function(element) {
        new Listing(element).save(function (err, data) {
            if (err) throw (err);
        });
    });
});