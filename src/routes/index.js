const express = require('express');
const {body, validationResults} = require('express-validator');
const CaseStudyModel = require('../models/model-case-study');
const router = express.Router();
const pdf = require("html-pdf");
const pdfTemplate = require("./documents");

/*
 * TODO:
 *  Handle authentication (redirect to login)
 *  Validation and sanitization
 */

router
    .route('/')
    .get(homeHandler);



router
    .route('/create-pdf')
    .post(createPdfHandler);



router
    .route('/fetch-pdf')
    .get(fetchPdfHandler);

router
    .route('/create')
    .post(createHandler);

router
    .route('/search')
    .get(searchHandler);
router
    .route('/update')
    .post(UpdateHandler);



router
    .route('/searchtags')
    .post(SearchHandler);

router
    .route('/view-all')
    .get(viewAllHandler);
router
    .route('/view-your-cs-draft')
    .post(viewYourCSDraftHandler);
router
    .route('/view-your-cs-published')
    .post(viewYourCSPublishHandler);

router
    .route('/view-by-id1')
    .post(viewById1);

module.exports = router;

/* Request Handlers */

async function homeHandler(req, res) {
    res.sendStatus(201);
}

/* Creating a case study */
async function createHandler(req, res) {

    const case_study = new CaseStudyModel({
        project_name: req.body.project_name,
        project_company: req.body.project_company,
        project_industry: req.body.project_industry,
        country: req.body.country,
        city: req.body.city,
        project_start_date: req.body.project_start_date,
        project_end_date: req.body.project_end_date,
        problem_space: req.body.problem_space,
        approach: req.body.approach,
        idea: req.body.idea,
        impact: req.body.impact,
        employee_id: req.body.username,
        client_name: req.body.client_name,
        client_code_name: req.body.client_code_name,
        client_address: req.body.client_address,
        client_phone: req.body.client_phone,
        client_email: req.body.client_email,
        status: req.body.status

    });
    await case_study
        .save()
        .then(val => {

            res.status(201);

        })
        .catch(err => {res.send('Failed to create case study')});

    res.send();
}


/* Updating a case study */
async function UpdateHandler(req, res) {

    const updateDoc = {
        $set: {
            project_name: req.body.project_name,
            project_status: req.body.project_status,
            project_company: req.body.project_company,
            project_industry: req.body.project_industry,
            country: req.body.country,
            city: req.body.city,
            project_start_date: req.body.project_start_date,
            project_end_date: req.body.project_end_date,
            problem_space: req.body.problem_space,
            approach: req.body.approach,
            idea: req.body.idea,
            impact: req.body.impact,
           /* employee_id: req.body.username,*/
            client_name: req.body.client_name,
            client_code_name: req.body.client_code_name,
            client_address: req.body.client_address,
            client_phone: req.body.client_phone,
            client_email: req.body.client_email,
            status: req.body.status

        },
    };

    await CaseStudyModel


        .updateOne({_id:req.body._id},updateDoc)

        .then(val => {
console.log(res)
            res.status(201);

        })
        .catch(err => {res.send('Failed to Update case study')});

    res.send();
}


/* Searching for a case study */
async function searchHandler(req, res) {
    const path = req.body.get('search_by');
    const entry = req.body.get('search_entry')
    await CaseStudyModel
        .find()
        .where(path).equals(entry)
        .exec(
            (err, result) => {
                if(err) {
                    //TODO Handle error
                } else if(result.length === 0) {
                    //TODO
                } else {

                    res.send(result);
                }
            }
        );
}

async function viewAllHandler(req, res) {
    await CaseStudyModel
        .find({status: "Published"})
        .select('project_name client_name')
        .exec((err, result) =>   {
            if(err) {
                //TODO
            } else {
                res.send(result);
            }});
}



async function viewYourCSPublishHandler(req, res) {
    console.log(req);
    await CaseStudyModel
        .find({status:"Published", employee_id:req.body.params.username})
        .select('project_name client_name')
        .exec((err, result) =>   {
            if(err) {
                //TODO
            } else {
                res.send(result);
            }});
}
async function viewYourCSDraftHandler(req, res) {
    await CaseStudyModel
        .find({status:"Draft", employee_id:req.body.params.username})
        .select('project_name client_name')
        .exec((err, result) =>   {
            if(err) {
                //TODO
            } else {
                res.send(result);
            }});
}
//TODO Perhaps merge with searchHandler
async function viewById1(req, res) {
    await CaseStudyModel
        .find({ _id: req.body.params._id})

        .exec((err, result) =>   {

            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })

}
function createPdfHandler(req, res) {


  pdf.create(pdfTemplate(req.body),{}).toFile("routes/CaseStudy.pdf",(err)=>{
      if(err){

          res.send( Promise.reject());
                }
          res.send(  Promise.resolve());
  });


}
function fetchPdfHandler(req, res) {

   res.sendFile( __dirname+  "/CaseStudy.pdf" ,);

}


async function SearchHandler(req, res) {
let filter;
    let projectIndustry = req.body.project_industry;


    let clientName = req.body.client_name;
    let tagData = req.body.tag_data;
   /* console.log(req.body);*/
    console.log(projectIndustry);
    console.log(clientName);
    console.log(tagData);
/*    if((tagData === '') && (projectIndustry === '0') && (clientName === '0') ){ filter= ''};*/
    if((tagData === '') && (projectIndustry === '') && !(clientName === '') ){ console.log(1);await CaseStudyModel.find({client_name:clientName}, (err, result)=>{ res.send(result)})};
    if((tagData === '') && !(projectIndustry === '') && (clientName === '') ){ console.log(2);await CaseStudyModel.find({project_industry:projectIndustry}, (err, result)=>{
        res.send(result)})};
    if(!(tagData === '') && (projectIndustry === '') && (clientName === '') ){console.log(3);await CaseStudyModel.find({$text:{$search:tagData}}, (err, result)=>{
        res.send(result)})};
    if((tagData === '') && !(projectIndustry === '') && !(clientName === '') ){console.log(4);await CaseStudyModel.find({project_industry:projectIndustry,client_name:clientName}, (err, result)=>{
        res.send(result)})};
    if(!(tagData === '') && (projectIndustry === '') && !(clientName === '') ){console.log(5); await CaseStudyModel.find({$text:{$search:tagData},client_name:clientName}, (err, result)=>{
        res.send(result)})};
    if(!(tagData === '') && !(projectIndustry === '') && (clientName === '') ){console.log(6);await CaseStudyModel.find({$text:{$search:tagData},project_industry:projectIndustry}, (err, result)=>{
        res.send(result)})};
    if(!(tagData === '') && !(projectIndustry === '') && !(clientName === '') ){console.log(7);await CaseStudyModel.find({$text:{$search:tagData},project_industry:projectIndustry,client_name:clientName}, (err, result)=>{
        res.send(result)})} /*else {await CaseStudyModel.find({$text:{$search:tagData},project_industry:projectIndustry,client_name:clientName}, (err, result)=>{
        res.send(result)})}*/



    /*if(tagData === ''){  if(projectIndustry === ''){await CaseStudyModel.find({client_name:clientName}, (err, result)=>{
      res.send(result);})} else await CaseStudyModel.find({project_industry:projectIndustry,client_name:clientName}, (err, result)=>{
      res.send(result);
  })}else {await CaseStudyModel.find({$text:{$search:tagData},$or: [{project_industry:projectIndustry},{client_name:clientName}]}, (err, result)=>{
      res.send(result);
  })}*/
 /*       if(projectIndustry === '0' && clientName === '0'){filter = { $text: { $search:  tagData}}};*/
    /*  if(tag_data === null && clientName === '0'){filter = { project_industry: projectIndustry}};
     if(tagData === null){tagData=".*.*"};
     let searchString = "a" + ' ' + tagData;
 console.log(projectIndustry +"-/-"+searchString);*/
    /*await CaseStudyModel.find({$text:{$search:tagData},$or: [{project_industry:projectIndustry},{client_name:clientName}]}, (err, result)=>{
        res.send(result);
    })*/
}

