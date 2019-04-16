import mongoose from 'mongoose';

import { classes, parents } from './index';

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
            // eslint-disable-next-line no-mixed-operators
            max:  () => Date.now() - 1.577 * 1e11,
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
        class: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      'classes',
            validate: {
                validator(id) {
                    return classes.findById(id).lean();
                },
                message({ value }) {
                    return `Class with ID '${value}' does not exist in classes collection`;
                },
            },
        },
        parents: [
            {
                parent: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'parents',
                    validate: {
                        validator(id) {
                            return parents.findById(id).lean();
                        },
                        message({ value }) {
                            return `Parent with ID '${value}' does not exist in parents collection`;
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

// Collection
export const persons = mongoose.model('persons', schema);
