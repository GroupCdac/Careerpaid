const mongoose = require('mongoose')
const Schema = mongoose.Schema

const job = new Schema(
    {
        title: { type: String, required: true },
        company:{type: String, required: true},
        location:{type: String, required: true},
        degree: { type: String },
        skills: { type: [String] },
        experience: { type: String},
        details:{ type: String}
        
    },
    { timestamps: true },
);


const jobModel = mongoose.model('jobs', job);
module.exports=jobModel;