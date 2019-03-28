import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    title:   String,
    image:   String,
    seasons: [
        {
            season: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    created:     Date,
});

// Collection
export const subjects = mongoose.model('subjects', schema);
