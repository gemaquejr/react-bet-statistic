import Game from '../database/models/Game';

export default class GameService {
  public gameModel = Game;

  public async createGame(championship_id: number, home_team: number, away_team: number, date: Date) {
    const game = await this.gameModel.create({ championship_id, home_team, away_team, date });
    return game;
  }

  public async getAllGames() {
    const games = await this.gameModel.findAll();
    return games;
  }
}
