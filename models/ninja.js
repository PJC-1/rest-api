const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// "geometry": {
//   "type": "Point",
//   "coordinates": [125.6, 10.1]
// }

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create a ninja Schemem and & Model.
const NinjaScheme = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaScheme);

module.exports = Ninja;
