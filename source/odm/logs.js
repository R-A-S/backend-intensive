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

    { timestamps: { createdAt: 'created' }, capped: { size: 5e7, max: 50000 } },
);

// Collection
export const logs = mongoose.model('logs', schema);
