const express = require("express");
const path = require("path");
// const fs=require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { setMaxIdleHTTPParsers } = require("http");
const { time } = require("console");
var alert = require('alert');




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/donation');

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
const port = 80;

const contactschema = new mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String,
    Message: String,

});


const contact = mongoose.model('contactform', contactschema);


// EXPRESS SPECIFIC STUFF

app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as ejs
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//ENDSPOINT

app.get('/', (req, res) => {
    res.status(200).render('index')
})


app.post('/con', (req, res) => {
    var mydata = new contact(req.body)
    console.log(req.body.Name)
    mydata.save().then(() => {

        res.send('<script>alert("Data Added Sucessfully")</script>')
    }).catch(() => {

        res.send('<script>alert("Data Not Added Sucessfully")</script>')

    });


})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
