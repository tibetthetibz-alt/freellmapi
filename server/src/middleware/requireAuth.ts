import { Request, Response, NextFunction } from 'express';
import { validateSession } from '../services/auth.js';

// Always allow access (admin mode)
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  next();
}