import { Router, Request, Response } from 'express';
import GameController from '../controllers/gameController';

const router = Router();
const gameController = new GameController();

router.post('/game', (req: Request, res: Response) => {
  gameController.createGame(req, res);
});

router.get('/game', (req: Request, res: Response) => {
  gameController.getAllGames(req, res);
});

export default router;
