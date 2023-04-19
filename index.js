import express from 'express'
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'
import mongoose from 'mongoose';


const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/users', usersRoutes);


mongoose
.connect('mongodb+srv://admin:pavle2004@autozoapi.aqqm1sn.mongodb.net/Autozo-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error);
});