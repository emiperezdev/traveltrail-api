import { Response, Request, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export default function (schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map(detail => detail.message);

      res.status(400).json({
        status: 'error',
        message: 'Validation failed',
        errors: errors
      });
    } else {
      next();
    }
  };
}
