import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import coreRoutes from './routes/coreRoutes';

// Import middleware
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Custom middleware
app.use(logger);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Divine Campus Node.js API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/core', coreRoutes);

// Default route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Divine Campus Node.js API',
    version: '1.0.0',
    documentation: '/api/docs'
  });
});

// Error handling middleware (should be last)
app.use(errorHandler);

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The requested route ${req.originalUrl} does not exist.`
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Divine Campus API is running at http://localhost:${port}`);
  console.log(`🌍[environment]: ${process.env.NODE_ENV || 'development'}`);
});