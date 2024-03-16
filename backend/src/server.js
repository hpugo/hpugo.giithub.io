import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import shoeRouter from './routers/shoes.router.js';
import userRouter from './routers/user.router.js';
import { dbconnect } from './config/database.config.js';
import { dirname, join } from 'path'; // Import `join` from path module
dotenv.config();

dbconnect();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
);

app.use('/api/shoes', shoeRouter);
app.use('/api/users', userRouter);

const publicFolder = join(__dirname, 'public'); // Use `join` to join paths
app.use(express.static(publicFolder));

app.get('*', (req, res) => {
  const indexFilePath = join(publicFolder, 'index.html'); // Use `join` to join paths
  res.sendFile(indexFilePath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port' + PORT);
});
