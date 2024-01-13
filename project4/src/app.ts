import express from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

app.use(json());
app.use('/todos',todoRoutes);
app.use((err: Error,request: express.Request,response: express.Response,next: express.NextFunction) => {
    response.status(500).json({message: err.message});
});

app.listen(3000);