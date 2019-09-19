var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);
var getModule = mongoose.model('Listing',Listing.ListingSchema);

var findLibraryWest = function() {
    getModule.find({'code' : 'LBW'}, function(err, data) {
        if (err) throw (err);
        console.log(JSON.stringify(data));
    });
};
var removeCable = function() {
    getModule.find({'code' : 'CABL'}, function(err, data) {
        if (err) throw (err);
        console.log(JSON.stringify(data));
        getModule.deleteOne({'code': 'CABL'}, function (err, data) {
            if (err) throw (err);
        });
    });
};

var updatePhelpsLab = function() {
    getModule.updateOne({'code' : 'PHL'}, {'address' : '1953 Museum Rd, Gainesville, FL 32603'}, function(err,data) {
        if (err) throw (err);
        getModule.find({'code' : 'PHL'}, function(err,data) {
            if (err) throw (err);
            console.log(JSON.stringify(data));
        });
    });
};

var retrieveAllListings = function() {
    getModule.find({}, function(err,data) {
        if (err) throw (err);
        console.log(JSON.stringify(data));
    });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
