import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    hash:       String,
    order:      Number,
    title:      String,
    image:      String,
    room:       Number,
    floor:      Number,
    gradebooks: [
        {
            gradebook: mongoose.SchemaTypes.ObjectId,
        },
    ],
    description: String,
    created:     Date,
});

// Collection
export const classes = mongoose.model('classes', schema);
