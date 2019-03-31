import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        hash:        { type: String },
        name:        { first: { type: String }, last: { type: String } },
        image:       { type: String },
        dateOfBirth: { type: Date },
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
        class:   { type: mongoose.Schema.Types.ObjectId },
        parents: [
            {
                parent: { type: mongoose.Schema.Types.ObjectId },
            },
        ],
        description: { type: String },
        started:     { type: Date },
    },
    { timestamps: { createdAt: 'created', updatedAt: 'modified' } },
);

schema.index({ 'name.first': 1, 'name.last': 1 });

// Collection
export const persons = mongoose.model('persons', schema);
