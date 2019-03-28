import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    { type: String },
    title:   { type: String },
    image:   { type: String },
    seasons: [
        {
            season: { type: mongoose.Schema.Types.ObjectId }, // ObjectId
        },
    ],
    description: { type: String },
    created:     { type: Date },
});

schema.index({ title: 'text', description: 'text' });

// Collection
export const subjects = mongoose.model('subjects', schema);
