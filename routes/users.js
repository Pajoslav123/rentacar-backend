import express from 'express';
import User from '../models/userModel.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the users route');
});

router.post('/', async(req, res) => {
   try {
      const user = await User.create(req.body);
      res.status(200).json({ user });
   }
   catch (error) {
      res.status(500).json({ message: error.message });
   }
});
//router post for registering a user with username password and email and favorite car







export default router;