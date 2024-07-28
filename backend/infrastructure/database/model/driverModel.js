import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false  // Initially not required
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
        default: 0,
        required: false  
    },
    Phone: {
        type: Number,
        required: false  
    },
    Model: {
        type: String,
        required: false  
    },
    VehicleNumber: {  
        type: Number,
        required: false  
    },
    color: {
        type: String,
        required: false  
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
    },
   
});

const Driver = mongoose.model('Driver', userSchema);
export default Driver;







