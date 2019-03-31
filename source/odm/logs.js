import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema(
    {
        method:   String,
        path:     String,
        duration: {
            start:   Date,
            endtype: Date,
        },
        payload: Object,
        agent:   String,
    },

    // { timestamps: { createdAt: 'created' }, capped: { size: 5e7, max: 50000 } },
    { timestamps: { createdAt: 'created' }, capped: { size: 50, max: 1 } },
);

// schema.index({ created: 1}, {expireAfterSeconds: 60 * 60 * 24 * 7 });
schema.index({ created: 1 }, { expireAfterSeconds: 20 });

// Collection
export const logs = mongoose.model('logs', schema);
logs.ensureIndexes();
