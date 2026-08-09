# 🔧 FixItNow — Home Services Marketplace

**FixItNow** is a modern home services marketplace that connects customers with skilled technicians for reliable and convenient repair and maintenance services.

The platform provides separate experiences for **Customers, Technicians, and Administrators**, allowing users to discover services, create bookings, manage appointments, process payments, leave reviews, and manage the overall platform.

---

## 🌐 Live Links

| Resource               | Link                                                        |
| ---------------------- | ----------------------------------------------------------- |
| 🚀 Live Frontend       | https://fixitnowfrontend.vercel.app                         |
| ⚙️ Backend API         | https://fixitnowbackend.vercel.app                          |
| 💻 Frontend Repository | https://github.com/touhidcse/l2b7a5                         |
| 🎥 Demo Video          | https://www.loom.com/share/ca6d217d1f114c4ab795ee8cac87c49a |

---

## 📖 About the Project

FixItNow is designed to simplify the process of finding and booking professional home repair services.

Customers can browse available services and technicians, create service bookings, make payments, track booking status, and submit reviews.

Technicians can manage their profiles, view assigned bookings, update booking statuses, and manage their service-related activities.

Administrators have access to platform management features such as user management, service/category management, and monitoring platform activities.

---

## ✨ Key Features

### 👤 Authentication & Authorization

* User registration and login
* Secure authentication using access tokens
* Role-based access control
* Protected routes
* Customer, Technician, and Admin roles
* Ban/unban user functionality
* Automatic access control based on user role

### 🧑‍🔧 Customer Features

* Browse available repair services
* View service details
* View technician profiles
* Create service bookings
* View booking history
* Manage personal posts
* Track booking status
* Make online payments
* Leave ratings and reviews
* Manage customer profile

### 🔨 Technician Features

* Technician dashboard
* Technician profile management
* View assigned bookings
* Manage booking status
* View customer information related to bookings
* Manage technician service information
* Protected technician routes

### 🛡️ Admin Features

* Admin dashboard
* User management
* Search and pagination for users
* Ban/unban users
* Manage service categories
* Monitor platform activities
* Role-based administrative access

### 💳 Payment

* Stripe payment integration
* Secure payment flow
* Payment status handling
* Booking/payment relationship management
* Stripe webhook integration through the backend

### ⭐ Reviews & Ratings

* Customers can review completed services
* Star rating system
* Written reviews
* Review display on service/technician related pages

### 📱 Responsive UI

* Mobile-friendly interface
* Tablet-friendly layouts
* Desktop dashboard layouts
* Responsive navigation
* Reusable UI components

---

## 🛠️ Technology Stack

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide React**
* **Next.js App Router**

### Backend Integration

* REST API
* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL

### Authentication

* Cookie-based authentication
* Access token
* Role-based authorization

### Payment

* Stripe

### Deployment

* **Vercel**

---

## 🏗️ Project Architecture

The frontend follows a modular Next.js App Router architecture.

```text
fixitnowfrontend/
│
├── app/
│   ├── (publicGroup)/
│   │   ├── home/
│   │   ├── services/
│   │   ├── technicians/
│   │   
│   │
│   ├── (authGroup)/
│   │   ├── login/
│   │   └── register/
│   │
│   ├── (dashBoardGroup)/
│   │   ├── customer-dashboard/
│   │   ├── technician-dashboard/
│   │   └── admin-dashboard/
│   │
│   └── layout.tsx
│
├── components/
│   ├── shared/
│   ├── ui/
│  
│
│
├── lib/types
│
├── hooks/
│
├── public/
│
├── proxy.ts
│
├── package.json
│
└── README.md
```

---

## 👥 User Roles

FixItNow supports three primary roles:

| Role             | Main Responsibilities                                           |
| ---------------- | --------------------------------------------------------------- |
| 👤 Customer      | Browse services, book technicians, make payments, leave reviews |
| 🧑‍🔧 Technician | Manage profile, handle assigned bookings, update booking status |
| 🛡️ Admin        | Manage users, services, categories, and platform activities     |

---

## 🔐 Route Protection

The application uses protected routes based on authentication status and user role.

Example:

```text
Public Routes
    │
    ├── Home
    ├── Services
    ├── Technicians
    ├── Login
    └── Register
         │
         ▼
    Authentication
         │
         ▼
   Role Verification
      /     |     \
     /      |      \
Customer Technician Admin
   │          │       │
   ▼          ▼       ▼
Customer   Technician Admin
Dashboard  Dashboard  Dashboard
```

Unauthorized users are prevented from accessing role-specific dashboard routes.

---

The frontend is deployed using **Vercel**.

### Deployment Steps

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Set the production backend API URL.
5. Deploy the project.

The current production frontend is:

**https://fixitnowfrontend.vercel.app**

---

## 🔗 Backend API

The frontend communicates with the FixItNow backend through REST APIs.

Backend:

**https://fixitnowbackend.vercel.app**

The backend is responsible for:

* Authentication
* User management
* Service management
* Technician management
* Booking management
* Reviews
* Payments
* Stripe webhook processing
* Database operations

---

## 💳 Payment Flow

The application uses Stripe for online payments.

```text
Customer
   │
   ▼
Create Booking
   │
   ▼
Payment Checkout
   │
   ▼
Stripe
   │
   ▼
Payment Success
   │
   ▼
Backend Webhook
   │
   ▼
Update Payment / Booking
```

Sensitive Stripe credentials are stored as environment variables and are not committed to the repository.

---

## 📊 Main Application Flow

```text
                    FixItNow
                       │
             ┌─────────┴─────────┐
             │                   │
         Authentication       Public Pages
             │                   │
       ┌─────┼─────┐       ┌─────┼─────┐
       │     │     │       │     │     │
   Customer Tech  Admin  Services Technicians
       │     │     │
       ▼     ▼     ▼
   Customer Tech  Admin
   Dashboard Dash Dashboard
       │     │     │
       └─────┼─────┘
             │
        Backend API
             │
             ▼
        PostgreSQL
```

---

## 🎯 Core Modules

### Authentication Module

Handles:

* Registration
* Login
* Logout
* Current user information
* Access token
* Protected routes
* Role-based access

### Service Module

Handles:

* Service listing
* Service details
* Service categories
* Service management
* Technician services

### Booking Module

Handles:

* Creating bookings
* Booking history
* Booking status
* Technician assignment
* Customer booking management

### Review Module

Handles:

* Ratings
* Comments
* Customer reviews
* Review submission

### User Management Module

Handles:

* User listing
* Search
* Pagination
* Role management
* Ban/unban functionality

---

## 🧪 Testing the Application

For evaluation purposes, an administrator account is available.

## 🎥 Demo

Watch the complete project demonstration:

**https://www.loom.com/share/ca6d217d1f114c4ab795ee8cac87c49a**

The demo covers the main application workflow, including authentication, dashboards, service management, bookings, and administrative functionality.

---

## 📌 Future Improvements

Potential improvements include:

* Real-time booking notifications
* Email notifications
* Technician availability calendar
* Advanced service filtering
* Location-based technician discovery
* Customer support/chat system
* Improved analytics dashboard
* More advanced review moderation
* Automated testing
* CI/CD workflow

---

## 👨‍💻 Developer

**Mohammad Touhidul Alam**

Frontend Repository:

https://github.com/touhidcse/l2b7a5

---

## 📄 License

This project was developed for educational and portfolio purposes.

---

## ⭐ Acknowledgements

Built using modern web technologies including Next.js, React, TypeScript, Tailwind CSS, Stripe, and a RESTful backend architecture.

If you find the project useful, feel free to explore the repository and provide feedback.
