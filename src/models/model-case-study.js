const mongoose = require('mongoose');

//TODO Clean
//TODO Different Schema for tags?
const CaseStudySchema = new mongoose.Schema({
    client_name: {type: String, required: true},
    project_status: {type: String, required: true},
    project_start_date: {type: String},
    project_end_date: {type: String},
    project_location: {type: String},
    project_name: {type: String},
    problem_space: {type: String},
    approach: {type: String},
    idea: {type: String},
    impact: {type: String},
    tags: {type: Array},
    employee_id: {type: String},

    project_company: {type: String},
    project_industry: {type: String}
});

CaseStudySchema
    .virtual('url')
    .get(() => {return '/case-studies/' + this._id});

const CaseStudyModel = mongoose.model('CaseStudy', CaseStudySchema, 'case-studies');
module.exports = CaseStudyModel;

/*
project_name: this.state.project_name,
    Project_industry: this.state.Project_industry,
    country: this.state.country,
    city: this.state.city,
    client_name: this.state.client_name,
    client_code_name: this.state.client_code_name,
    client_address: this.state.address,
    client_phone: this.state.phone,
    client_email: this.state.email,
    Project_start_date: this.state.Project_start_date,
    Project_end_date: this.state.Project_end_date,
    problem_space: this.state.problem_space,
    approach: this.state.approach,
    idea: this.state.idea,
    impact: this.state.impact*/
