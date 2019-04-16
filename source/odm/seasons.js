import mongoose from 'mongoose';

import { subjects, lessons } from './index';

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
        lessons: [
            {
                lesson: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'lessons',
                    validate: {
                        validator(id) {
                            return lessons.findById(id).lean();
                        },
                        message({ value }) {
                            return `Lesson with ID '${value}' does not exist in lessons collection`;
                        },
                    },
                },
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
