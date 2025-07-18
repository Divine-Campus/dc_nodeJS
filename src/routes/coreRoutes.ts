import { Router } from 'express';
import {
  getStatus,
  getConfig,
  healthCheck,
  getDocs
} from '../controllers/coreController';

const router = Router();

/**
 * Core Routes
 * Base path: /api/core
 */

// Public routes
router.get('/status', getStatus);
router.get('/health', healthCheck);
router.get('/docs', getDocs);

// Configuration route (consider adding authentication for sensitive configs)
router.get('/config', getConfig);

export default router;