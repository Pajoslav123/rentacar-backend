import express from 'express';
import Car from '../models/carModel.js';
const router = express.Router();

// get all cars from mongodb database
router.get('/', async(req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json({ cars });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//get car by id
router.get('/:id', async(req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.status(200).json({ car });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get car by filter parameters
router.get('/filter', async(req, res) => {
    try {
        const cars = await Car.find(req.query);
        res.status(200).json({ cars });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.delete('/:id', async(req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Car deleted successfully' }, { car });

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async(req, res) => {
   try {
      const car = await Car.create(req.body);
      res.status(200).json({ car });
   }
   catch (error) {
      res.status(500).json({ message: error.message });
   }
});
//router post for registering a user with username password and email and favorite car







export default router;