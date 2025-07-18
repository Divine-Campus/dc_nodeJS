# Divine Campus Node.js API Backend

A modern Node.js backend API built with TypeScript and Prisma ORM, designed as a foundation for migrating from CodeIgniter (PHP).

## 🚀 Features

- **TypeScript** - Type-safe development experience
- **Express.js** - Fast, unopinionated web framework
- **Prisma ORM** - Type-safe database access with MySQL
- **JWT Authentication** - Secure user authentication (ready for implementation)
- **CORS & Security** - Built-in security middleware
- **Environment Configuration** - Flexible configuration management
- **Structured Architecture** - Clean separation of concerns

## 📁 Project Structure

```
src/
├── controllers/         # Request handlers
│   ├── authController.ts    # Authentication endpoints
│   ├── userController.ts    # User management endpoints
│   └── coreController.ts    # Core application endpoints
├── routes/             # Route definitions
│   ├── authRoutes.ts       # Authentication routes
│   ├── userRoutes.ts       # User management routes
│   └── coreRoutes.ts       # Core application routes
├── models/             # Prisma types and interfaces
│   └── index.ts            # Type definitions
├── middleware/         # Custom middleware
│   ├── auth.ts             # Authentication middleware
│   ├── errorHandler.ts     # Error handling middleware
│   └── logger.ts           # Request logging middleware
├── utils/              # Utility functions
│   ├── helpers.ts          # General helper functions
│   └── password.ts         # Password utilities
├── config/             # Configuration files
│   ├── config.ts           # Application configuration
│   └── database.ts         # Database connection
└── server.ts           # Application entry point
```

## 🛠️ Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **MySQL** >= 8.0 (or compatible database)

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file and update it with your configuration:

```bash
cp .env.example .env
```

Update the `.env` file with your database connection and other settings:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/dc_nodejs_db"

# Server Configuration
NODE_ENV=development
PORT=3000

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRATION=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### 3. Database Setup

Generate Prisma client:

```bash
npm run prisma:generate
```

Run database migrations (when you have your database set up):

```bash
npm run prisma:migrate
```

### 4. Build and Run

For development with auto-reload:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

For development with TypeScript directly:

```bash
npm run dev:ts
```

## 📚 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Start production server |
| `npm run dev` | Start development server with auto-reload |
| `npm run dev:ts` | Start development server with ts-node |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run clean` | Remove build directory |

## 🔌 API Endpoints

### Health Check
- `GET /health` - Basic health check
- `GET /api/core/health` - Detailed health information
- `GET /api/core/status` - Application status

### Authentication (Placeholders)
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Get current user

### User Management (Placeholders)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password

### Core (Placeholders)
- `GET /api/core/config` - Get public configuration
- `GET /api/core/docs` - API documentation

## 🗄️ Database Schema

The project includes sample Prisma models:

- **User** - Basic user authentication and profile
- **Role** - User roles and permissions (for future use)

## 🔧 Configuration

The application uses environment variables for configuration. Key settings:

- `DATABASE_URL` - MySQL connection string
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret key for JWT tokens
- `CORS_ORIGIN` - Allowed CORS origins

## 🚧 Development Status

This is a scaffolded foundation with placeholder endpoints. The following features are ready for implementation:

- [ ] User authentication logic
- [ ] Password hashing and validation
- [ ] JWT token management
- [ ] User CRUD operations
- [ ] Role-based authorization
- [ ] API documentation
- [ ] Unit tests
- [ ] Integration tests

## 🔐 Security Features

- Helmet.js for security headers
- CORS configuration
- Environment variable validation
- Password strength validation utilities
- JWT authentication middleware (ready for implementation)

## 📖 Migration from CodeIgniter

This backend is designed to serve as a modern replacement for CodeIgniter applications:

1. **Similar MVC Structure** - Controllers, Routes, and Models
2. **Environment Configuration** - Similar to CodeIgniter's config system
3. **Middleware System** - Equivalent to CodeIgniter hooks
4. **Database ORM** - Type-safe alternative to CodeIgniter's ActiveRecord

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please contact the Divine Campus development team.