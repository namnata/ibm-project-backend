const mongoose = require('mongoose');

/*
 * TODO:
 *  Clean
 *  Use ClientSchema
 *  Different Schema for tags?
 */
const CaseStudySchema = new mongoose.Schema({
    project_name: {type: String, required: true},
    project_industry: {type: String},
    city: {type: String},
    country: {type: String},
    project_start_date: {type: String},
    project_end_date: {type: String},

    //TODO Move the following into its own Schema?
    problem_space: {type: String},
    approach: {type: String},
    idea: {type: String},
    impact: {type: String},

    //TODO Do we need this?
    employee_id: {type: String},

    //TODO See about moving into ClientSchema
    client_name: {type: String},
    client_code_name: {type: String},
    client_address: {type: String},
    client_phone: {type: String},
    client_email: {type: String},
    status: {type: String},
    owner: {type: String},
    modifiers: {type: Array},

    //TODO
    tags: {type: Array},
});

CaseStudySchema
    .virtual('url')
    .get(() => {return '/ibmcasestudies/' + this._id});

const CaseStudyModel = mongoose.model('CaseStudy', CaseStudySchema, 'casestudies');
module.exports = CaseStudyModel;
