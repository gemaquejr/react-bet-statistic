module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('teams', [
      {
        team_name: 'FC Bayern München',
      },
      {
        team_name: 'Arsenal Football Club',
      },
      {
        team_name: 'Real Madrid Club de Fútbol',
      },
      {
        team_name: 'Paris Saint-Germain Football Club',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
