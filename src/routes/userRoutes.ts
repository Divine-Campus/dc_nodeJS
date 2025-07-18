import { Router } from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateProfile,
  changePassword
} from '../controllers/userController';
import { authenticate } from '../middleware/auth';

const router = Router();

/**
 * User Routes
 * Base path: /api/users
 */

// All user routes require authentication
router.use(authenticate);

// User management routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

// Profile management routes
router.put('/profile', updateProfile);
router.put('/change-password', changePassword);

export default router;