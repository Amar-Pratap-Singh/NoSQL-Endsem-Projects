const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
var trainInfoSchema = require('./models/TrainInfo');
var trainScheduleSchema = require('./models/TrainSchedule');
// var basicsSchema = require('./models/TitleBasics');
const csv = require('fast-csv'); 
const fs = require('fs');
const path = require('path');


const uri = 'mongodb+srv://NoSQLProject:NoSQLProjectPassword@nosqlprojectcluster.r7e4lhb.mongodb.net/?retryWrites=true&w=majority';

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected!");
    }catch(error){
        console.error(error);
    }
}

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});




// ----------------------------------------------- API Endpoints ----------------------------------------------- //
app.get('/', async (req, res) => {
    res.send({reply: "Hi"});
})



// Upload Dataset

app.get('/api/uploadData', (req, res) => {

  const trainInfo = [];
  fs.createReadStream(path.join(__dirname, '/../Dataset/train_info.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', function(data) {
    data['_id'] = new mongoose.Types.ObjectId();
    data['Train_No'] = Number(data.Train_No);
    trainInfo.push(data);
  })
  .on('end', function(){
    trainInfoSchema.insertMany(trainInfo);
    console.log(`${trainInfo.length} names have been successfully uploaded.`);
  })
  
  console.log("Uploaded!");


  const trainSchedule = [];
  fs.createReadStream(path.join(__dirname, '/../Dataset/train_schedule.csv'))
    .pipe(csv.parse({ headers: true }))
    .on('error', error => console.error(error))
    .on('data', function(data) {
    data['_id'] = new mongoose.Types.ObjectId();
    data['SN'] = Number(data.SN);
    data['Train_No'] = Number(data.Train_No);
    data['FirstAC'] = Number(data.FirstAC);
    data['SecondAC'] = Number(data.SecondAC);
    data['ThirdAC'] = Number(data.ThirdAC);
    data['SL'] = Number(data.SL);
    data['Router_Number'] = Number(data.Route_Number);
    data['Distance'] = Number(data.Distance);

    trainSchedule.push(data);

  })
  .on('end', function(){
    // insert posts into db
    trainScheduleSchema.insertMany(trainSchedule);
    console.log(`${trainSchedule.length} names have been successfully uploaded.`);
  })

  res.send({status: "Success"});
  
    
})



// do something
app.post('/api/TrainDetailsSourceAndDestinationStation', async(req, res) => {

    const source = req.body.source;
    const destination = req.body.destination;
    // console.log(source);
    // console.log(destination);

    const queryResult = await trainInfoSchema.find({ Source_Station_Name: source, Destination_Station_Name: destination }).exec();

    res.send(queryResult);
});




// do something
app.post('/api/TrainDetailsTrainNumber', async(req, res) => {

    const trainNumber = req.body.trainNumber;

    const queryResult = await trainScheduleSchema.find({ Train_No: trainNumber }).exec();

    res.send(queryResult);

});




app.post('/api/TrainDetailsMoreConstrained', async(req, res) => {

  const arrivalTime = req.body.aTime;
  const departTime = req.body.dTime;
  const stationCode = req.body.sCode;
  // const day = req.body.day;

  const queryResult = await trainScheduleSchema.find({ Station_Code: stationCode, Arrival_time: { $gte: String(arrivalTime)}, Arrival_time: { $lte: String(departTime)}}).exec();

  res.send(queryResult);

});


// ------------------------------------------------------------------------------------------------------------ //




const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
})