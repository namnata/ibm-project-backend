const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    name: {type: String, required: true},
    case_studies: {type: Array}
});

const TagModel = mongoose.model('Tag', TagSchema, 'tags');
module.exports = TagModel;