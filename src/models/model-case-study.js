const mongoose = require('mongoose');
//const ClientModel = require('model-client');

//TODO Clean
//TODO Use ClientSchema
//TODO Different Schema for tags?
const CaseStudySchema = new mongoose.Schema({
    project_name: {type: String, required: true},
    project_status: {type: String, required: true},
    project_company: {type: String},
    project_industry: {type: String},
    country: {type: String},
    city: {type: String},
    project_start_date: {type: String},
    project_end_date: {type: String},
    problem_space: {type: String},
    approach: {type: String},
    idea: {type: String},
    impact: {type: String},
    employee_id: {type: String},
    client_name: {type: String},
    client_code_name: {type: String},
    client_address: {type: String},
    client_phone: {type: String},
    client_email: {type: String},
    tags: {type: Array},
});

CaseStudySchema
    .virtual('url')
    .get(() => {return '/case-studies/' + this._id});

const CaseStudyModel = mongoose.model('CaseStudy', CaseStudySchema, 'case-studies');
module.exports = CaseStudyModel;
