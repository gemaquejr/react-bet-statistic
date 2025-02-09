"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("games", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      championship_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "championships",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      home_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "teams",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      away_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "teams",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
       }
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("games");
  },
};
