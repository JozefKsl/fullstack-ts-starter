import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());


app.get('/helloWorld', async (req: Request, res: Response) => {
    try {
        res.status(201).json({hello: 'world!'});
    } catch (error) {
        res.status(500).json({ message: 'Failed to create product', error });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});