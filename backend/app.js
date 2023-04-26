const express = require('express');
const app = express();
const bodyParser = require('body-parser');


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


app.get('/', async (req, res) => {
    res.send({reply: "You are testing Server Side"});
});


const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}.`);
})
