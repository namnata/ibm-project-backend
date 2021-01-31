const mongoose = require('mongoose');
//const ClientModel = require('model-client');

//TODO Clean
//TODO Different Schema for client
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

    client: {type: mongoose.Schema.Types.ObjectId, ref: 'ClientSchema'},
    tags: {type: Array},
});

CaseStudySchema
    .virtual('url')
    .get(() => {return '/case-studies/' + this._id});

const CaseStudyModel = mongoose.model('CaseStudy', CaseStudySchema, 'case-studies');
module.exports = CaseStudyModel;

/*
project_name: this.state.project_name,
    client_name: this.state.client_name,
    client_code_name: this.state.client_code_name,
    client_address: this.state.address,
    client_phone: this.state.phone,
    client_email: this.state.email,
    problem_space: this.state.problem_space,
    approach: this.state.approach,
    idea: this.state.idea,
    impact: this.state.impact*/
