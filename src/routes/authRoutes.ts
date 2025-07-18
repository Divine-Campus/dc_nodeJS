import { Router } from 'express';
import {
  login,
  register,
  logout,
  refreshToken,
  getCurrentUser
} from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const router = Router();

/**
 * Authentication Routes
 * Base path: /api/auth
 */

// Public routes
router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refreshToken);

// Protected routes (require authentication)
router.post('/logout', authenticate, logout);
router.get('/me', authenticate, getCurrentUser);

export default router;