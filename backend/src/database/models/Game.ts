import { DataTypes, Model } from "sequelize";
import db from ".";
import Team from "./Team";
import Championship from "./Championship";

class Games extends Model {
  public id!: number;
  public championship_id!: number;
  public home_team!: number;
  public away_team!: number;
  public date!: Date;
}

Games.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      championship_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "championships",
          key: "id",
        },
      },
      home_team: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "teams",
          key: "id",
        },
      },
      away_team: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "teams",
          key: "id",
        },
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
       }
}, {
  underscored: true,
  sequelize: db,
  modelName: 'games',
  timestamps: false,
});

Games.belongsTo(Championship, { foreignKey: 'championship_id', as: 'championship' });
Games.belongsTo(Team, { foreignKey: 'home_team', as: 'homeTeam' });
Games.belongsTo(Team, { foreignKey: 'away_team', as: 'awayTeam' });

export default Games;
