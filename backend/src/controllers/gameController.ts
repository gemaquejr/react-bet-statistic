import { Request, Response } from 'express';
import GameService from '../services/gameService';

export default class GameController {
  constructor(private gameService = new GameService()) {}

  async createGame(req: Request, res: Response) {
    try {
      const { championship_id, home_team, away_team, date } = req.body;
      const game = await this.gameService.createGame(championship_id, home_team, away_team, date);
      return res.status(201).json(game);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllGames(req: Request, res: Response) {
    try {
      const games = await this.gameService.getAllGames();
      return res.status(200).json(games);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
