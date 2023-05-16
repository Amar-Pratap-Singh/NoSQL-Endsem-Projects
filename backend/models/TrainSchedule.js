var mongoose = require('mongoose');

const trainScheduleSchema = new mongoose.Schema({
    "SN": Number,
    "Train_No": Number,
    "Station_Code": String,
    "FirstAC": Number,
    "SecondAC": Number,
    "ThirdAC": Number,
    "SL": Number,
    "Station_Name": String,
    "Route_Number": Number,
    "Arrival_time": String,
    "Departure_Time": String,
    "Distance": Number
});


module.exports = mongoose.model('trainScheduleModel', trainScheduleSchema);