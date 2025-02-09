import { DataTypes, Model } from "sequelize";
import db from ".";
import Game from "./Game";

class Odds extends Model {
  public id!: number;
  public game_id!: number;
  public odd!: number;
}

Odds.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id",
        },
      },
      odd: {
        type: DataTypes.FLOAT,
        allowNull: false,
       }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'odds',
  timestamps: false,
});

Odds.belongsTo(Game, { foreignKey: 'game_id', as: 'gameId' });

export default Odds;
