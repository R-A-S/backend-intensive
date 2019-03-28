import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    { type: String },
    order:   { type: Number },
    title:   { type: String },
    image:   { type: String },
    subject: { type: mongoose.Schema.Types.ObjectId },
    lessons: [
        {
            lesson: { type: mongoose.Schema.Types.ObjectId },
        },
    ],
    description: { type: String },
    created:     { type: Date },
});

schema.index({ title: 'text', description: ' text' });

// Collection
export const seasons = mongoose.model('seasons', schema);
