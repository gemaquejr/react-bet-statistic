import { Request, Response, NextFunction } from 'express';

const loginValidation = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

export default loginValidation;