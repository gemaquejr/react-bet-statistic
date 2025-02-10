import Bet from '../database/models/Bet';

export default class BetService {
  public betModel = Bet;

  public async createBet(user_id: number, game_id: number, bet_type: string, current_odd: number, value: number, status: string) {
    const newBet = await this.betModel.create({
      user_id,
      game_id,
      bet_type,
      current_odd,
      value,
      status,
    });
    return newBet;
  }

  public async getBetsByUser(user_id: number) {
    const bets = await this.betModel.findAll({
      where: { user_id },
    });
    if (bets.length === 0) throw new Error('No bets found for this user');
    return bets;
  }
}
