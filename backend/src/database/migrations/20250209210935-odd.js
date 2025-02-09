"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("odds", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      odd: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable("odds");
  },
};
