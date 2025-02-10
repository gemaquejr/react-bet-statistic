import { Request, Response } from 'express';
import ChampionshipService from '../services/championshipService';

export default class ChampionshipController {
  constructor(private championshipService = new ChampionshipService()) {}

  async createChampionship(req: Request, res: Response) {
    try {
      const { championship_name } = req.body;
      const championship = await this.championshipService.createChampionship(championship_name);
      return res.status(201).json(championship);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllChampionships(req: Request, res: Response) {
    try {
      const championships = await this.championshipService.getAllChampionships();
      return res.status(200).json(championships);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
