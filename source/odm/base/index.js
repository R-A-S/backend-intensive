import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        name: {
            first: {
                type:     String,
                required: true,
            },
            last: {
                type:     String,
                required: true,
            },
        },
        image:       { type: String, match: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/ },
        dateOfBirth: Date,
        sex:         {
            type: String,
            enum: [ 'm', 'f' ],
        },
        description: String,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const base = mongoose.model('peoples', schema);
