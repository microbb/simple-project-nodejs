import mongoose from "mongoose";
const { Schema } = mongoose;

const Project = new Schema({
    "p_name": String,
    "p_organization": String,
    "view": String,
    "p_link": String,
    "p_git": String,
    "img": {
        "png": [String],
        "webp": [String]
    },
    "p_description": String,
    "p_i_did": String,
    "team_link": [String],
    "skills": [String]
});

export default mongoose.model('Project', Project);
