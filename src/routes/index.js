const express = require('express');
const {body, validationResults} = require('express-validator');
const CaseStudyModel = require('../models/model-case-study');
const router = express.Router();

/*
 * TODO:
 *  Handle authentication (redirect to login)
 *  Validation and sanitization
 */

router
    .route('/')
    .get(homeHandler);

router
    .route('/create')
    .post(createHandler);

router
    .route('/search')
    .get(searchHandler);

router
    .route('/view-all')
    .get(viewAllHandler);

module.exports = router;

/* Request Handlers */

async function homeHandler(req, res) {
    res.sendStatus(201);
}

/* Creating a case study */
async function createHandler(req, res) {
    const case_study = new CaseStudyModel({
        client_name: req.body.client_name,
        project_status: req.body.project_status,
        project_industry: req.body.project_industry,
        project_start_date: req.body.project_start_date,
        project_end_date: req.body.project_end_date,
        project_location: req.body.project_location,
        project_name: req.body.project_name,
        problem_space: req.body.problem_space,
        approach: req.body.approach,
        idea: req.body.idea,
        impact: req.body.impact,
        tags: req.body.tags,
        employee_id: req.body.employee_id
    });
    await case_study
        .save()
        .then(val => {
            res.status(201);
        })
        .catch(err => {res.send('Failed to create case study')});

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
                    console.log(result);
                    res.send(result);
                }
            }
        );
}

//TODO Perhaps merge with searchHandler
async function viewAllHandler(req, res) {
    const query = {client_name: "ABC23"};
    await CaseStudyModel
        .find(query, (err, result) =>   {
            if(err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
}