## Frontend Routes & API Integration


| Next.js Route | Component/Feature | Backend API Consumption |
|---------------|-------------------|-------------------------|
| `/` | Home page with featured services | `GET /api/services` |
| `/services` | Browse & filter services/technicians | `GET /api/services`, `GET /api/technicians`, `GET /api/categories` |
| `/technicians/[id]` | Technician profile & booking CTA | `GET /api/technicians/:id` |
| `/auth/register` | Role selection & registration form | `POST /api/auth/register` |
| `/auth/login` | Login form | `POST /api/auth/login` |
| `/dashboard/customer` | Customer overview & booking history | `GET /api/bookings`, `GET /api/payments` |
| `/dashboard/customer/bookings/[id]/pay` | Payment initiation page | `POST /api/payments/create` |
| `/payment/success` & `/payment/cancel` | Payment outcome pages | (Updates UI based on URL params/session) |
| `/dashboard/technician` | Technician overview & availability | `GET /api/technician/profile`, `GET /api/technician/availability` |
| `/dashboard/technician/bookings` | Manage incoming bookings | `GET /api/technician/bookings`, `PATCH /api/technician/bookings/:id` |
| `/dashboard/admin` | Admin overview & user management | `GET /api/admin/users`, `GET /api/admin/bookings` |
| `/dashboard/admin/categories` | Manage service categories | `GET /api/admin/categories`, `POST /api/admin/categories` |

---
