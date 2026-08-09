## Frontend Routes & API Integration


| Next.js Route | Component/Feature | Backend API Consumption |
|---------------|-------------------|-------------------------|
| `/` | Home page with top rated 9  services | `GET /api/services` |
| `/services` | Public Browse & filter services/technicians | `GET /api/services` |
| `/technicians` | Public Browse & filter technicians |  `GET /api/technicians` |
| `/technicians/[id]` | Technician profile & booking CTA | `GET /api/technicians/[id]` |
| `/registration` | Role selection & registration form | `POST /api/users/register` |
| `/login` | Login form | `POST /api/auth/login` |
| `/customer-dashboard/` | Customer overview & booking history, cancel bookings, pay for booking, leave review | `GET /api/bookings`,`/api/bookings/cancel/:id`,`api/payments/create`,`POST /api/reviews/[id]` |
|`/payment/success` & `/payment/cancel` | Payment outcome pages | `GET /payment/success`, `GET /payment/cancel` |
| `/customer-dashboard/payments/` | Customer Payment history | `GET /api/payments` |
| `/technicians/[id]/service/[id]` | Create Booking | `POST /api/bookings` |
| 
| `/technician-dashboard` | Technician overview , all bookimgs, Manage incoming bookings | `GET /api/technician/bookings/`, `PATCH api/technician/bookings/:id` |
| `technician-dashboard/profile` | Technician profile with bio, skill, services,review | `GET api/users/me` |
| `technician-dashboard/update-profile` | Update technician profile (bio, experience,location, profilePhpta) | `PUT api/technician/profile` |
| `/technician-dashboard/create-availability` | Create Technician availability by selecting day and time frmae | `POST api/technician/availability` |
| `technician-dashboard/availability | Get Technician availability | `GET /api/technician/availability` |
| `admin-dashboard` | Admin overview & Manage service categories | `GET api/bookings/stats `, `GET /api/admin/categories` |
| `admin-dashboard` | user management | `GET /api/admin/users `, `PATCH /api/admin/users/[id]` |

---
