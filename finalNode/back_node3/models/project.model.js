const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: String,
    desc: String,
    startDate: String,
    endDate: String,
    price: Number,
    status: String
});

module.exports = mongoose.model('Project', ProjectSchema);
