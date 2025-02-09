import { DataTypes, Model } from "sequelize";
import db from ".";

class Teams extends Model {
  public id!: number;
  public team_name!: string;
}

Teams.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
