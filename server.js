const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const User = require('./models/User');
const authService = require('./middlewares/authService')

//Environtment Variables
require('dotenv').config()

//Connect to Database
require("./config/db");

app.use(cors())
app.use(express.static(__dirname + '/public'));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

app.post('/upload',[authService, upload],function(req, res) {
    User.findOneAndUpdate({_id: req.user._id}, {profilePic: req.file.filename})
        .then(user => res.json(user))
});

app.listen(8000, function() {

    console.log('App running on port 8000');

});