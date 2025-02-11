import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from './routes/userRoute';
import betRouter from './routes/betRoute'
import championshipRouter from './routes/championshipRoute'
import gameRouter from './routes/gameRoute'
import oddRouter from './routes/oddRoute'
import teamRouter from './routes/teamRoute'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRouter);
app.use('/', betRouter);
app.use('/', championshipRouter);
app.use('/', gameRouter);
app.use('/', oddRouter);
app.use('/', teamRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
