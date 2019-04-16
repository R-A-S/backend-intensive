import mongoose from 'mongoose';

import { subjects, seasons } from './index';

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
        image:   { type: String, match: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/ },
        subject: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      'subjects',
            required: true,
            validate: {
                validator(id) {
                    return subjects.findById(id).lean();
                },
                message({ value }) {
                    return `Subject with ID '${value}' does not exist in subjects collection`;
                },
            },
        },
        season: {
            type:     mongoose.SchemaTypes.ObjectId,
            ref:      'seasons',
            required: true,
            validate: {
                validator(id) {
                    return seasons.findById(id).lean();
                },
                message({ value }) {
                    return `Season with ID '${value}' does not exist in seasons collection`;
                },
            },
        },
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
export const lessons = mongoose.model('lessons', schema);
