import { DataTypes, Model } from "sequelize";
import db from ".";
import User from "./User";
import Game from "./Game";

class Bets extends Model {
  public id!: number;
  public user_id!: number;
  public game_id!: number;
  public bet_type!: string;
  public current_odd!: number;
  public value!: number;
  public status!: string;
}

Bets.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      bet_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_odd: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      value: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'bets',
  timestamps: false,
});

Bets.belongsTo(User, { foreignKey: 'user_id', as: 'userId' });
Bets.belongsTo(Game, { foreignKey: 'game_id', as: 'gameId' });

export default Bets;
