import { Router, Request, Response } from 'express';
import ChampionshipController from '../controllers/championnshipController';

const router = Router();
const championshipController = new ChampionshipController();

router.post('/championship', (req: Request, res: Response) => {
  championshipController.createChampionship(req, res);
});

router.get('/championship', (req: Request, res: Response) => {
  championshipController.getAllChampionships(req, res);
});

export default router;
