import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:       { type: String },
    order:      { type: Number },
    title:      { type: String },
    image:      { type: String },
    room:       { type: Number },
    floor:      { type: String },
    gradebooks: [
        {
            gradebook: { type: mongoose.Schema.Types.ObjectId },
        },
    ],
    description: { type: String },
    created:     { type: Date },
});

schema.index({ title: 'text', description: 'text' });
schema.index({ order: 1 });
schema.index({ room: 1 });

// Collection
export const classes = mongoose.model('classes', schema);
