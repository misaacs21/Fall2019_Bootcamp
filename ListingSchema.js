var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var listingSchema = new Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    coordinates: {
        latitude: {type: Number, required: false},
        longitude: {type: Number, required: false}
    },
    address: String
});

listingSchema.pre('save', function(next) {
    var currentDate = new Date();

    this.updated_at = currentDate;

    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
