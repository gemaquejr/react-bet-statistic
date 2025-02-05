import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testarConexao } from "./config/database";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

const startServer = async () => {
    await testarConexao();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  };

  startServer();