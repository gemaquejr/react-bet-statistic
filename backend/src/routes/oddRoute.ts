import { Router, Request, Response } from 'express';
import OddController from '../controllers/oddController';

const router = Router();
const oddController = new OddController();

router.post('/odd', (req: Request, res: Response) => {
  oddController.createOdd(req, res);
});

router.get('/odd/:game_id', (req: Request, res: Response) => {
  oddController.getOddsByGame(req, res);
});

export default router;
