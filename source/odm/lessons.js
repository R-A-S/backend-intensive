import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:    String,
    order:   Number,
    title:   String,
    image:   String,
    subject: mongoose.SchemaTypes.ObjectId,
    season:  mongoose.SchemaTypes.ObjectId,
    created: Date,
});

// Collection
export const lessons = mongoose.model('lessons', schema);
