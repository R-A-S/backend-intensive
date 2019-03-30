import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    { type: String },
    image:   { type: String },
    year:    { type: String },
    class:   { type: String },
    records: [
        {
            personHash:  { type: mongoose.Schema.Types.ObjectId },
            teacherHash: { type: mongoose.Schema.Types.ObjectId },
            subjectHash: { type: mongoose.Schema.Types.ObjectId },
            seasonHash:  { type: mongoose.Schema.Types.ObjectId },
            lessonHash:  { type: mongoose.Schema.Types.ObjectId },
            mark:        { type: String },
        },
    ],
    description: { type: String },
});

schema.index({ year: 1 });
schema.index({ class: 1 });

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
