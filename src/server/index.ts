import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './api/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', chatRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});