import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentsRoutes } from './app/modules/students/student.router';
const app: Application = express();

// parser as middleware
app.use(express.json());
app.use(cors());

// application route
app.use('/api/students', studentsRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
