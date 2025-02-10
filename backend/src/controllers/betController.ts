import { Request, Response } from 'express';
import BetService from '../services/betService';

export default class BetController {
  constructor(private betService = new BetService()) { }

  async createBet(req: Request, res: Response) {
    try {
      const { user_id, game_id, bet_type, current_odd, value, status } = req.body;
      const newBet = await this.betService.createBet(user_id, game_id, bet_type, current_odd, value, status);
      return res.status(201).json(newBet);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getBetsByUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const bets = await this.betService.getBetsByUser(parseInt(userId));
      return res.status(200).json(bets);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
