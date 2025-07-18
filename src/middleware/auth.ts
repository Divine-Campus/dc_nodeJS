import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    email: string;
    username: string;
  };
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({
        error: 'Access denied. No token provided or invalid format.'
      });
      return;
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Verify JWT token
    const decoded = jwt.verify(token, config.jwt.secret) as any;
    req.user = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Invalid token.'
    });
  }
};