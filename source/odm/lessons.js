import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash:    { type: String },
        order:   { type: String },
        title:   { type: String },
        image:   { type: String },
        subject: { type: mongoose.Schema.Types.ObjectId },
        season:  { type: mongoose.Schema.Types.ObjectId },
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

schema.index({ title: 1 }, { name: 'lessonsTitle' });

// Collection
export const lessons = mongoose.model('lessons', schema);
