// modelo de usuario 

import mongoose from "mongoose";

const userschema =  new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps:true
});

export default mongoose.model('User', userschema )