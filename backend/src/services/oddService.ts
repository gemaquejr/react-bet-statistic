import Odd from '../database/models/Odd';

export default class OddService {
  public oddModel = Odd;

  public async createOdd(game_id: number, odd: number) {
    const newOdd = await this.oddModel.create({ game_id, odd });
    return newOdd;
  }

  public async getOddsByGame(game_id: number) {
    const odds = await this.oddModel.findAll({
      where: { game_id },
    });
    return odds;
  }
}
