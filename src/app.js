import express from 'express';
import morgan from 'morgan';


import userRoutes from './routes/users.routes.js';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js'; 
import { authenticateToken } from './middlewares/authenticate.middleware.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
//
app.use('/api/login', authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/tasks',authenticateToken,taskRoutes);
export default app;