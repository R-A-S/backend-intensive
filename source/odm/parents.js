import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: { type: String },
        name: {
            first: { type: String },
            last:  { type: String },
        },
        image:       { type: String },
        dateOfBirth: { type: String },
        emails:      [
            {
                email:   { type: String, unique: true },
                primary: { type: Boolean },
            },
        ],
        phones: [
            {
                phone:   { type: String },
                primary: { type: Boolean },
            },
        ],
        sex:    { type: String },
        social: {
            facebook: { type: String },
            linkedIn: { type: String },
            skype:    { type: String },
            telegram: { type: String },
        },
        pupils: [
            {
                person: { type: String },
            },
        ],
        description: { type: String },
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

schema.index({ 'name.first': 1, 'name.last': 1 }, { name: 'names' });

// Collection
export const parents = mongoose.model('parents', schema);
