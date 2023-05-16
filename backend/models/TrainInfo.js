var mongoose = require('mongoose');

const trainInfoSchema = new mongoose.Schema({
    "Train_No": Number,
    "Train_Name": String,
    "Source_Station_Name": String,
    "Destination_Station_Name": String,
    "days": String
});


module.exports = mongoose.model('trainInfoModel', trainInfoSchema);