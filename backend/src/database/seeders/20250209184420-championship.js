module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('championships', [
      {
        championship_name: 'Bundesliga',
      },
      {
        championship_name: 'Champions league',
      },
      {
        championship_name: 'La Liga',
      },
      {
        championship_name: 'Premier League',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('championships', null, {});
  },
};
