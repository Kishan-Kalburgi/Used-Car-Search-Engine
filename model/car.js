const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var carSchema = new Schema({
  make:  String,
  model: String,
  year:   String,
  type: String,
  features: String,
  purchaseDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cars', carSchema);