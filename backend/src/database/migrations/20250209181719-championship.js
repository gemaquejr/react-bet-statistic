'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('championships', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
       championship_name: {
        type: Sequelize.STRING,
        allowNull: false,
       }
    });  
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('championships');
  }
};