import { Router, Request, Response } from 'express';
import BetController from '../controllers/betController';

const router = Router();
const betController = new BetController();

router.post('/bets', (req: Request, res: Response) => {
  betController.createBet(req, res);
});

router.get('/bets/user/:userId', (req: Request, res: Response) => {
  betController.getBetsByUser(req, res);
});

export default router;
