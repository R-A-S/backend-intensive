import mongoose from 'mongoose';

import { persons, teachers, subjects, seasons, lessons } from './index';

// Document shape
const schema = new mongoose.Schema(
    {
        hash: {
            type:     String,
            required: true,
            unique:   true,
        },
        image: { type: String, match: /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/ },
        year:  {
            type:     Number,
            min:      2019,
            max:      2099,
            required: true,
            index:    true,
        },
        class: {
            type:     String,
            required: true,
            index:    true,
        },
        records: [
            {
                personHash: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'persons',
                    validate: {
                        validator(id) {
                            return persons.findById(id).lean();
                        },
                        message({ value }) {
                            return `Person with ID '${value}' does not exist in persons collection`;
                        },
                    },
                },
                teacherHash: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'teachers',
                    validate: {
                        validator(id) {
                            return teachers.findById(id).lean();
                        },
                        message({ value }) {
                            return `Teacher with ID '${value}' does not exist in teachers collection`;
                        },
                    },
                },
                subjectHash: {
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
                seasonHash: {
                    type:     mongoose.SchemaTypes.ObjectId,
                    ref:      'seasons',
                    validate: {
                        validator(id) {
                            return seasons.findById(id).lean();
                        },
                        message({ value }) {
                            return `Season with ID '${value}' does not exist in seasons collection`;
                        },
                    },
                },
                lessonHash: {
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
                mark: Number,
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

// Collection
export const gradebooks = mongoose.model('gradebooks', schema);
