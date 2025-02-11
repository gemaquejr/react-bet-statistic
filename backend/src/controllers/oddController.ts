import { Request, Response } from 'express';
import OddService from '../services/oddService';

export default class OddController {
  constructor(private oddService = new OddService()) {}

  async createOdd(req: Request, res: Response) {
    try {
      const { game_id, odd } = req.body;
      const newOdd = await this.oddService.createOdd(game_id, odd);
      return res.status(201).json(newOdd);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getOddsByGame(req: Request, res: Response) {
    try {
      const { game_id } = req.params;
      const odds = await this.oddService.getOddsByGame(Number(game_id));
      return res.status(200).json(odds);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
