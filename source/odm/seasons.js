import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        order: {
            type:     Number,
            required: true,
        },
        title: {
            type:      String,
            maxlength: 30,
            required:  true,
            unique:    true,
        },
        image:   String,
        subject: {
            type:     mongoose.SchemaTypes.ObjectId,
            required: true,
        },
        lessons: [
            {
                lesson: mongoose.SchemaTypes.ObjectId,
            },
        ],
        description: { type: String, maxlength: 250 },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ title: 'text', description: 'text' });

// Collection
export const seasons = mongoose.model('seasons', schema);
