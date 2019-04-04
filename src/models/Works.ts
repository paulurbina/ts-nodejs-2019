import { Schema, model } from 'mongoose';

const WorksSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    }
});

export default model('Works', WorksSchema);