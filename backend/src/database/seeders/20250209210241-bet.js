module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('bets', [
      {
        user_id: 1,
        game_id: 1,
        bet_type: "chute a gol",
        current_odd: 1.5,
        value: 10.50,
        status: "ganhou",
      },
      {
        user_id: 1,
        game_id: 1,
        bet_type: "ambos marcam",
        current_odd: 1.8,
        value: 7.50,
        status: "perdeu",
      },      
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('bets', null, {});
  },
};
