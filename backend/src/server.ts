import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from './routes/userRoute';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
