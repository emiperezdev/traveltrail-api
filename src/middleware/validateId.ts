import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export default function(req: Request, res: Response, next: NextFunction) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).send('Invalid Id.');
    return;
  }

  next();
}