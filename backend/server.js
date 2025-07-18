import express from 'express'; 
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

// Debug: confirm environment variable is loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

app.get("/products", (req, res) => {
  res.send('Products route');
});

app.listen(5000, () => {
    connectDB();
    console.log('Server is running on port http://localhost:5000');
}); 