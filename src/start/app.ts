import express from 'express';
import morgan from 'morgan';
import error from '../middleware/error';
import cors from 'cors';
import { AppRoutes } from '../presentation/AppRoutes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.use(AppRoutes.routes);

app.use(error);

export default app; 
