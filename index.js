const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const UserModel= require('./models/User-info');
const CaseStudyModel= require('./models/CS-info');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@ibmcasestudies.mni5s.mongodb.net/case-studies?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

app.get("/get-all", async (req, res) => {


    await CaseStudyModel.find((err, result) =>   {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    res.send("got data from CSs");
});
//filtered search
app.get("/get-by-id", async (req, res) => {
    let id = req.query._id;

    await CaseStudyModel.find({_id: id},(err, result) =>   {

        if(err) {
            res.send(err);
        } else {
            res.setHeader("Content-Type", "text/html");
            res.send(result);
        }
    });
    res.send("got data from CSs");
});


//to insert data to the database
app.post('/insert-cs', async (req,res)=>{
    let tagwords = new Set([]);
    tagwords.add(req.body.project_id);
    tagwords.add(req.body.client_name);
    tagwords.add(req.body.Project_industry);
    tagwords.add(req.body.problem_space);
    tagwords.add(req.body.idea);
    tagwords.add(req.body.impact);


    const case_study =new CaseStudyModel({
        project_id:req.body.project_id,
        client_name:req.body.client_name,
        Project_industry:req.body.Project_industry,
        Project_type:req.body.Project_type,
        project_name:req.body.project_name,
        problem_space:req.body.problem_space,
        approach:req.body.approach,
        idea:req.body.idea,
        impact:req.body.impact,
        EmployeeID:"ibm",
        project_status:"completed",
        tags: tagwords});
    await case_study.save();
    res.send('Inserted Data');
});
app.post('/login', async (req, res) => {
    //Need to connect this with the database.
    await req.body.username['username'] === 'ibm' && req.body.password['password'] ==='ibm' ? res.send({login:'success',uName:req.body.username['username']}) : res.send({login:'fail'})
});


app.listen(3001, ()=>{
    console.log("Server is Listening 3001");
});
