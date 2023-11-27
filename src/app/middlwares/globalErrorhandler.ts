/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCOde = 500;
  const message = err.message || 'Something went wrong!';

  return res.status(statusCOde).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
