const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const bodyParser =require("body-parser");

const port = 3001;
const dbURI = 'mongodb+srv://admin:admin@ibmcasestudies.mni5s.mongodb.net/ibmcasestudies?retryWrites=true&w=majority';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

mongoose
    .connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(value => {console.log('Connected to Database')})
    .catch(reason => {console.log('Failed to connect to Database')});

app.use('/', indexRouter);
app.use('/', loginRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
