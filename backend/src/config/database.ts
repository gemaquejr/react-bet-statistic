import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
 );

 export const testarConexao = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao MySQL com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MySQL:", error);
    process.exit(1);
  }
};

export default sequelize;