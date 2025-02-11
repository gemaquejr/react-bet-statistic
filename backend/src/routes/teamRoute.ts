import { Router, Request, Response } from 'express';
import TeamController from '../controllers/teamController';

const router = Router();
const teamController = new TeamController();

router.post('/team', (req: Request, res: Response) => {
  teamController.createTeam(req, res);
});

router.get('/team', (req: Request, res: Response) => {
  teamController.getAllTeams(req, res);
});

export default router;
