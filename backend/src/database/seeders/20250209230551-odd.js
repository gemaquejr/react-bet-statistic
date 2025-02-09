module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('odds', [
      {
        game_id: 1,
        odd: 1.50,
      },
      {
        game_id: 2,
        odd: 1.85,
      }, 
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('odds', null, {});
  },
};
