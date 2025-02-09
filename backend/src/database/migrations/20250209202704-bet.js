"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("bets", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      game_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "games",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      bet_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      current_odd: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("bets");
  },
};
