const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema({
    project_id: {
        type: String,
        requires: true
    },
    client_name: {
        type: String,
        requires: true
    },
    Project_industry: {
        type: String,
        requires: false
    },
    Project_type: {
        type: String,
        requires: false
    },
    Project_start_date: {
        type: String,
        requires: false
    },
    Project_end_date: {
        type: String,
        requires: false
    },
    project_name: {
        type: String,
        requires: false
    },
    problem_space: {
        type: String,
        requires: false
    },
    approach: {
        type: String,
        requires: false
    },
    idea: {
        type: String,
        requires: false
    },
    impact: {
        type: String,
        requires: false
    },
    tags: {
        type: Array,
        requires: false
    },
    EmployeeID: {
        type: String,
        requires: false
    },
    project_status: {
        type: String,
        requires: false
    }
});

const CaseStudyModel = mongoose.model('casestudies',CaseStudySchema);
module.exports = CaseStudyModel;
