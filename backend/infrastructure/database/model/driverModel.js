import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        default: 0  
    },
    Phone: {
        type: Number,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    VehicleNumber: {  
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    images: [String], 
    isVerified: {
        type: Boolean,
        default: false
    }
});

const Driver = mongoose.model('Driver', userSchema);
export default Driver;






