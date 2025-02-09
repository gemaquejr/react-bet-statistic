import { Router, Request, Response } from 'express';
import UserController from '../controllers/userController';
import loginValidation from '../middlewares/loginValidation';

const router = Router();
const userController = new UserController();

router.post('/login', loginValidation, (req: Request, res: Response) => {
  userController.loginController(req, res);
});

router.get('/validate', (req: Request, res: Response ) => {
  userController.getLogin(req, res);
});

export default router;
