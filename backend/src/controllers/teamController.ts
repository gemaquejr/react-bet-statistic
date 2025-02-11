import { Request, Response } from 'express';
import TeamService from '../services/teamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  async createTeam(req: Request, res: Response) {
    try {
      const { team_name } = req.body;
      const newTeam = await this.teamService.createTeam(team_name);
      return res.status(201).json(newTeam);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllTeams(req: Request, res: Response) {
    try {
      const teams = await this.teamService.getAllTeams();
      return res.status(200).json(teams);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
