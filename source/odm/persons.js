import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash: String,
    name: {
        first: String,
        last:  String,
    },
    image:       String,
    dateOfBirth: Date,
    emails:      [
        {
            email:   String,
            primary: Boolean,
        },
    ],
    phones: [
        {
            phone:   String,
            primary: Boolean,
        },
    ],
    sex:    String,
    social: {
        facebook: String,
        linkedIn: String,
        skype:    String,
        telegram: String,
    },
    class:   mongoose.SchemaTypes.ObjectId,
    parents: [
        {
            parent: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    started:     Date,
    created:     Date,
});

// Collection
export const persons = mongoose.model('persons', schema);
