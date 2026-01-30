import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = process.env.PORT || 8080;

// 🔹 CONEXIÓN A MONGO
mongoose.connect(
  'mongodb+srv://luchogalante:Millonarios10@cluster0.sxanjxx.mongodb.net/ecommerce?retryWrites=true&w=majority'
)
  .then(() => console.log('✅ Mongo conectado'))
  .catch(err => console.log('❌ Mongo error:', err));

app.use(express.json());
app.use(cookieParser());

// 🔹 RUTAS
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => console.log(`🚀 Listening on ${PORT}`));

