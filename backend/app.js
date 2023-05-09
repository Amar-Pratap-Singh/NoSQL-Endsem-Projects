const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
var csv = require('csvtojson');
var multer = require('multer');
var empSchema = require('./models/EmpModel');
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/testDB", {useNewUrlParser: true});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
})

var uploads = multer({ storage: storage })

// MongoDB setup/////////////////


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


// -------------------- Mongoose Schemas and Models --------------------------------------------- //

// const testSchema = new mongoose.Schema({
//     name: String,
//     rating: Number
// });

// const Test = mongoose.model("Test", testSchema);

// const test = new Test({
//     name: "NoSQL",
//     rating: 0
// });

// test.save();





// ----------------------------------------------- API Endpoints ----------------------------------------------- //
app.get('/', async (req, res) => {
    const count = req.body.count;

    // var sentence = "You clicked this button " + count + " number of times";
    res.send({reply: "Hi"});
})

async function getTempData(){

    const tempData = await empSchema.find({});
    return tempData;
  
}

app.post('/api/uploadData', (req, res) => {
    getTempData().then((err, data) => {
    if (err) {
      } else {
        if (data != '') {
          res.render('index', { data: data })
        } else {
          res.render('index', { data: '' })
        }
      }
    })
})

var empResponse
app.post('/api/postData', uploads.single('csvFile'), (req, res) => {
  csv()
    .fromFile(req.file.path)
    .then((response) => {
      for (var x = 0; x < response; x++) {
        empResponse = parseFloat(response[x].Name)
        response[x].Name = empResponse
        empResponse = parseFloat(response[x].Email)
        response[x].Email = empResponse
        empResponse = parseFloat(response[x].Designation)
        response[x].Designation = empResponse
        empResponse = parseFloat(response[x].Mobile)
        response[x].Mobile = empResponse
      }
      empSchema.insertMany(response, (err, data) => {
        if (err) {
          console.log(err)
        } else {
          res.redirect('/api/uploadData')
        }
      })
    })
})


app.get('/api/TopRatedMovies', async(req, res) => {
    // fetch the data from the database using some query 
    // format the result in some JSON format 
    // and send the data to the frontend
});




// ------------------------------------------------------------------------------------------------------------ //




const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})




// const thrift = require('thrift');
// const hive = require('thrift-hive');

// const connection = thrift.createConnection('localhost', 10000, {
//     transport: thrift.TBufferedTransport(),
//     protocol: thrift.TBinaryProtocol(),
// });

// const client = thrift.createClient(hive, connection);


/// HIVE SETUP //////
// const hive = require('hive-driver');
// const { TCLIService, TCLIService_types } = hive.thrift;
// const client = new hive.HiveClient(
//     TCLIService,
//     TCLIService_types
// );
// const utils = new hive.HiveUtils(
//     TCLIService_types
// );

// client.connect(
//     {
//         host: 'localhost',
//         port: 8080
//     },
//     new hive.connections.TcpConnection(),
//     new hive.auth.PlainTcpAuthentication({
//         username: 'user name',
//         password: 'password'
//     })
// ).then(async client => {
//     const session = await client.openSession({
//         client_protocol: TCLIService_types.TProtocolVersion.HIVE_CLI_SERVICE_PROTOCOL_V10
//     });
//     const operation = await session.executeStatement(
//         'CREATE TABLE pokes ( foo INT, bar INT )'
//     );
//     await utils.waitUntilReady(operation, false, () => {});

//     await operation.close();
//     await session.close();
// });


// app.get('/hive-test', async (req, res) => {
//     client.execute('SELECT * FROM yago LIMIT 3', (error, result) => {
//         if (error) {
//           console.error(error);
//           res.status(500).send('Error executing query');
//         } else {
//           console.log(result);
//           res.send(result);
//         }
//       });
// });


// app.on('exit', ()=>{
//     connection.end();
// })
