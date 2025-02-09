module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('games', [
      {
        championship_id: 1,
        home_team: 1,
        away_team: 2,
        date: "2024-02-10",
      },
      {
        championship_id: 1,
        home_team: 3,
        away_team: 4,
        date: "2024-02-10",
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('games', null, {});
  },
};
