import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentsRoutes } from './app/modules/students/student.router';
import { UserRoutes } from './app/modules/users/user.route';
const app: Application = express();

// parser as middleware
app.use(express.json());
app.use(cors());

// application route
app.use('/api/students', studentsRoutes);
app.use('/api/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
