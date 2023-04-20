import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    
    make: {
        type: String,
        required: [true, 'Make is required'],
    },
    model: {
        type: String,
        required: [true, 'Model is required'],
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
    },
    mileage: {
        type: Number,
        required: [true, 'Mileage is required'],
    },
    fuelType: {
        type: String,
        required: [true, 'Fuel type is required'],
    }, 
    transmission: {
        type: String,
        required: [true, 'Transmission is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    dateRentedFrom: {
        type: Date,
        default: null,
    },
    dateRentedTo: {
        type: Date,
        default: null,
    },
    isRented: {
        type: Boolean,
        default: false,
    },
    images: {
        type: Array,
        required: [true, 'Images are required'],
        default: ['https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'],
    }
},
{
    timestamps: true,
}
);

// {
//     "make": "Audi",
//     "model": "A4",
//     "year": 2019,
//     "mileage": 10000,
//     "fuelType": "Diesel",
//     "transmission": "Automatic",
//     "price": 20000,
//     "images": ["https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"]
// }
// different types of cars
// {
//     "make": "Audi",
//     "model": "A4",
//     "year": 2019,
//     "mileage": 10000,
//     "fuelType": "Diesel",




const Car = mongoose.model('Car', carSchema);

export default Car;