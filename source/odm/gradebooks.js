import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    image:   String,
    year:    Number,
    class:   String,
    records: [
        {
            personHash:  mongoose.SchemaTypes.ObjectId,
            teacherHash: mongoose.SchemaTypes.ObjectId,
            subjectHash: mongoose.SchemaTypes.ObjectId,
            seasonHash:  mongoose.SchemaTypes.ObjectId,
            lessonHash:  mongoose.SchemaTypes.ObjectId,
            mark:        Number,
        },
    ],
    description: String,
    created:     Date,
});

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
