import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        method:   { type: String },
        path:     { type: String },
        duration: {
            start: { type: Date },
            end:   { type: Date },
        },
        payload: { type: Object },
        agent:   { type: String },
    },

    { timestamps: { createdAt: 'created' }, capped: { size: 5e7, max: 50000 } },
);

schema.index({ created: 1, expireAfterSeconds: 60 * 60 * 24 * 7 });

// Collection
export const logs = mongoose.model('logs', schema);
