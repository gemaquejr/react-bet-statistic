import { DataTypes, Model } from "sequelize";
import db from ".";

class Championship extends Model {
  public id!: number;
  public championship_name!: string;
}

Championship.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  championship_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'championships',
  timestamps: false,
});

export default Championship;
