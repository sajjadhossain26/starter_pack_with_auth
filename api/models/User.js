
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true   
    },
    email: {
        type: String,
        required: true,
        trim :true,
        unique: true
    },
    cell : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    age : {
        type: Number,
        required: true,
    },
    gender : {
        type: String
    },
    username : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        trim: true,
    },
    photo : {
        type: String,
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    }
    
},{
    timestamps: true
}) 

export default mongoose.model('User', userSchema)