const express = require('express');
const mongoose = require('mongoose')
const UserModel = require('../models/model-user')

const router = express.Router();

router.get(
    '/register-test',
    async (req, res, next) => {
        const user = new UserModel( {
            username: 'Bob',
            password: 'qwerty1234',
            email: 'bob@gmail.com'
        });
        await user.save()
            .then(val => {res.send('Registered User')})
            .catch(err => {res.send('Failed to register user')})
    }
);

module.exports = router;

/*
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

app.post('/insert-cs', async (req,res)=>{
    let tagwords = new Set([]);
    tagwords.add(req.body.project_id);
    tagwords.add(req.body.client_name);
    tagwords.add(req.body.Project_industry);
    tagwords.add(req.body.problem);
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
});*/
