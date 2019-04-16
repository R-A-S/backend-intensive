import mongoose from 'mongoose';

import { subjects } from './index';

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
                type:      String,
                minlength: 2,
                maxlength: 15,
                required:  true,
            },
            last: {
                type:      String,
                minlength: 2,
                maxlength: 15,
                required:  true,
            },
        },
        image:       { type: String, match: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/ },
        dateOfBirth: {
            type: Date,
            max:  () => new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        },
        emails: [
            {
                email: {
                    type:     String,
                    match:    /^([\w\._]+)@\1\.([a-z]{2,6}\.?)$/,
                    required: true,
                    unique:   true,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone:   String,
                primary: Boolean,
            },
        ],
        sex: {
            type: String,
            enum: [ 'm', 'f' ],
        },
        social: {
            facebook: String,
            linkedIn: String,
            skype:    String,
            telegram: String,
        },
        subjects: [
            {
                subject: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'subjects',
                    validate: {
                        validator(id) {
                            return subjects.findById(id).lean();
                        },
                        message({ value }) {
                            return `Subject with ID '${value}' does not exist in subjects collection`;
                        },
                    },
                },
            },
        ],
        description: { type: String, maxlength: 250 },
        started:     Date,
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

schema.index({ 'name.first': 1, 'name.last': 1 });

schema.path('phones').validate(function(value) {
    const regex = /^38\d{3}-\d{3}-\d{4}$/;

    const isValid = value.every(({ phone }) => regex.test(phone));

    return isValid;
}, 'Phone should have format 38XXX-XXX-XXXX');

// Collection
export const teachers = mongoose.model('teachers', schema);
