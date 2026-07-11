# Multi-Tenant SaaS Backend

A scalable Multi-Tenant SaaS Backend built with Node.js, Express.js, MongoDB, and JWT Authentication. This project demonstrates tenant-based architecture where multiple organizations (tenants) can manage their own users while sharing the same backend infrastructure.

## Features

* Multi-Tenant Architecture
* Tenant Management
* User Registration & Login
* JWT Authentication
* Role-Based Access Control (Admin & Member)
* Protected Routes
* Password Hashing with bcrypt
* MongoDB Database Integration
* Error Handling Middleware
* RESTful APIs
* Environment Variable Configuration

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* Nodemon

## Project Structure

```bash
src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── tenantcontroller.js
│   ├── usercontroller.js
│   └── homecontroller.js
│
├── middleware/
│   ├── authmiddleware.js
│   └── adminmiddleware.js
│
├── models/
│   ├── tenant.js
│   └── user.js
│
├── routes/
│   ├── tenantroutes.js
│   └── userroutes.js
│
├── app.js
└── server.js
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/multi-tenant-saas-backend.git
cd multi-tenant-saas-backend
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Start Development Server

```bash
npm run dev
```

### Start Production Server

```bash
npm start
```

## API Endpoints

### Tenant APIs

#### Create Tenant

```http
POST /api/tenants
```

Request Body:

```json
{
  "name": "Google",
  "slug": "google"
}
```

### User APIs

#### Create User

```http
POST /api/users
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "role": "admin",
  "tenantId": "tenant_id"
}
```

#### Login User

```http
POST /api/users/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

#### Get All Users (Admin Only)

```http
GET /api/users
```

Headers:

```http
Authorization: Bearer <token>
```

## Authentication Flow

1. User registers under a specific tenant.
2. Password is hashed using bcrypt before storing.
3. User logs in using email and password.
4. JWT token is generated upon successful login.
5. Protected routes verify the JWT token.
6. Admin middleware restricts access to admin-only resources.

## Database Schema

### Tenant

```javascript
{
  name: String,
  slug: String
}
```

### User

```javascript
{
  name: String,
  email: String,
  password: String,
  role: "admin" | "member",
  tenantId: ObjectId
}
```

## Future Improvements

* Refresh Tokens
* Email Verification
* Password Reset
* Subscription Management
* Tenant-Specific Permissions
* Audit Logs
* Rate Limiting
* API Documentation with Swagger
* Docker Deployment
* AWS Deployment

## Learning Outcomes

This project demonstrates:

* Backend Architecture Design
* Multi-Tenant SaaS Concepts
* Authentication & Authorization
* MongoDB Relationships
* REST API Development
* Middleware Usage
* Secure Password Management
* Environment Configuration

## Author

Indra Mohan Singh


