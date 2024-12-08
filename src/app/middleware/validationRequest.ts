import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validationRequests = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //validation check
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validationRequests;
