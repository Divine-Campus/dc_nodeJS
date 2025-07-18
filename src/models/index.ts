// Prisma types will be available after running 'npx prisma generate'
// export { User, Role } from '@prisma/client';

// For now, define basic types manually until Prisma client is generated
export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Custom types for API requests/responses
export interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserRequest {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  isActive?: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: number;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
  };
  token: string;
}

export interface CreateRoleRequest {
  name: string;
  description?: string;
}

export interface UpdateRoleRequest {
  name?: string;
  description?: string;
}