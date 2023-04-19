import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    password:  {
        type: String,
        required: [true, 'Password is required'],
    },
    currentCar: String,
    image: {
        type: String,
        default: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
    }
   
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', userSchema);

export default User;