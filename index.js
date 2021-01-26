const express = require('express');
const app = express();
const  cors = require('cors');
const mongoose = require('mongoose');
const UserModel= require('./models/User-info');
const CaseStudyModel= require('./models/CS-info');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://josemartDB1:Tin2martin@cluster0.5aruf.mongodb.net/student-management?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

app.get("/get-all-cs", async (req, res) => {
    var query = {client_name: "ABC23"};
    await CaseStudyModel.find(query, (err, result) =>   {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
    res.send("got data from CSs");
});

app.get("/insert1", async (req, res) => {
    let tagwords = new Set(["apple", "orange", "mango"]);
    const caseobj = new CaseStudyModel({

        project_id: "xyz1",
        client_name: "ABC23",
        industry: "DEF",
        problem: "agggsdhdh",
        idea: "raeywjrjy",
        impact: "dshmhmdhn",
        tags: tagwords

    });
    await caseobj.save();
    res.send("Inserted data to casestudies");
});
//to insert data to the database
app.post('/insert-cs', async (req,res)=>{
    const case_study =new CaseStudyModel({project_id:req.body.project_id, client_name:req.body.client_name, industry:req.body.industry,
        problem:req.body.problem, idea:req.body.idea, impact:req.body.impact});
    await case_study.save();
    res.send('Inserted Data');
});
app.post('/login', async (req, res) => {
    //Need to connect this with the database.
    await req.body.username['username'] === 'ibm' && req.body.password['password'] ==='ibm' ? res.send({login:'success'}) : res.send({login:'fail'})
});


app.listen(3001, ()=>{
    console.log("Server is Listening 3001");
});
