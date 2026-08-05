My backend response 
///////////////////////////  1. POST   localhost:5000/api/users/register
{
    "success": true,
    "statusCode": 201,
    "message": "User registered successfully",
    "data": {
        "user": {
            "id": "44626d13-321a-485b-9816-c02436ebe9ac",
            "email": "level94@programming-hero.com",
            "name": "Isa khan",
            "role": "CUSTOMER",
            "phone": null,
            "address": null,
            "createdAt": "2026-08-04T08:35:08.011Z",
            "updatedAt": "2026-08-04T08:35:08.011Z",
            "isBan": false
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0NjI2ZDEzLTMyMWEtNDg1Yi05ODE2LWMwMjQzNmViZTlhYyIsIm5hbWUiOiJJc2Ega2hhbiIsImVtYWlsIjoibGV2ZWw5NEBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInJvbGUiOiJDVVNUT01FUiIsImlhdCI6MTc4NTgzMjUwOCwiZXhwIjoxNzg1OTE4OTA4fQ.xe2Uy0nmC_pDJE3yFXNhQXSJ32NLXnfA1UUgVry8qFg",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0NjI2ZDEzLTMyMWEtNDg1Yi05ODE2LWMwMjQzNmViZTlhYyIsIm5hbWUiOiJJc2Ega2hhbiIsImVtYWlsIjoibGV2ZWw5NEBwcm9ncmFtbWluZy1oZXJvLmNvbSIsInJvbGUiOiJDVVNUT01FUiIsImlhdCI6MTc4NTgzMjUwOCwiZXhwIjoxNzg2NDM3MzA4fQ.QXaU_-sq3rJSNpn0QDi-4YfJ0u2ZvOHAfD_nZOorOpc"
    }
}
/////////////////////////// 2. GET  localhost:5000/api/users/me 

{
    "success": true,
    "statusCode": 200,
    "message": "User profile fetched successfully",
    "data": {
        "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
        "email": "level4@programming-hero.com",
        "name": "Abrar Mahdi",
        "role": "CUSTOMER",
        "phone": "014796347",
        "address": "Chattogram",
        "createdAt": "2026-07-11T18:24:37.346Z",
        "updatedAt": "2026-07-16T00:55:22.086Z",
        "isBan": false,
        "bookings": [
            {
                "id": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-17T18:35:08.617Z",
                "endAt": "2026-07-19T00:00:00.000Z",
                "startAt": "2026-07-18T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null,
                "service": {
                    "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                    "title": "House Wiring",
                    "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                    "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "price": 4500
                },
                "technician": {
                    "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "rating": 4.75,
                    "bio": "Jisan, I am professional electrician.....",
                    "experience": 5,
                    "profilePhoto": "www.google.com/125,.m",
                    "location": "Savar, Dhaka"
                },
                "payment": {
                    "id": "a425ed3b-1a94-4952-ac44-cc218deacccf",
                    "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                    "price": 4500,
                    "method": "STRIPE",
                    "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
                    "stripePaymentId": "cs_test_a1ibq2jXrcSO8RrVKJtnuwPbizX0Qvi2Yfj76msH3a025s6fAfLrsnoq50",
                    "status": "COMPLETED",
                    "paidAt": "2026-07-17T18:54:06.173Z",
                    "cancelAt": null,
                    "cancelReason": null,
                    "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
                },
                "review": {
                    "id": "9cda3053-07e0-4cf0-8b39-f9195fa7df4f",
                    "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                    "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "rating": 5,
                    "comment": "Very good service",
                    "reviewDate": "2026-07-18T05:56:03.564Z"
                }
            },
        ]
    }
}

////////////////////////// 3. PUT  localhost:5000/api/users/updatecustomer

// like GET  localhost:5000/api/users/me 


//////////////////////////// 4. POST  http://localhost:5000/api/auth/login

{
    "success": true,
    "statusCode": 200,
    "message": "User loogged in Successfully",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5YzZhZWMzLTQ2OTItNGFmNS05ZWYyLTc2ZDYxNzllODExYyIsIm5hbWUiOiJBYnJhciBNYWhkaSIsImVtYWlsIjoibGV2ZWw0QHByb2dyYW1taW5nLWhlcm8uY29tIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNzg1ODUzMjYyLCJleHAiOjE3ODU5Mzk2NjJ9.biKWU8Xw_NW7wTTR8fXe9Nb3XEYXu46utfIspKm4iFw",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5YzZhZWMzLTQ2OTItNGFmNS05ZWYyLTc2ZDYxNzllODExYyIsIm5hbWUiOiJBYnJhciBNYWhkaSIsImVtYWlsIjoibGV2ZWw0QHByb2dyYW1taW5nLWhlcm8uY29tIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNzg1ODUzMjYyLCJleHAiOjE3ODY0NTgwNjJ9.9Nwr3OWmh_TjT77RxInsM71Ixh4MWhedqRComSe9LXI"
    }
}

/////////////////////////////// 5. POST  http://localhost:5000/api/auth/refresh-token
{
    "success": true,
    "statusCode": 200,
    "message": "Token Refreshed Successfully",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc5YzZhZWMzLTQ2OTItNGFmNS05ZWYyLTc2ZDYxNzllODExYyIsIm5hbWUiOiJBYnJhciBNYWhkaSIsImVtYWlsIjoibGV2ZWw0QHByb2dyYW1taW5nLWhlcm8uY29tIiwicm9sZSI6IkNVU1RPTUVSIiwiaWF0IjoxNzg1ODUzNzkxLCJleHAiOjE3ODU5NDAxOTF9.-4dxx_OhbUQyJ8LD9G_-ymrUOB4PKrk0U498poEFxF4"
    }
}

/////////////////////////////// Public route with filter (service) 6. GET  http://localhost:5000/api/services?search=jisan
{
    "success": true,
    "statusCode": 200,
    "message": "Services retrieved successfully",
    "data": [
        {
            "id": "8e2f3d4a-9c5e-4d7f-a2b1-7f6d5c4b3a07",
            "title": "Switch & Socket Replacement",
            "description": "Replace damaged switches, sockets, and electrical outlets with new components.",
            "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "price": 500,
            "category": {
                "type": "Electrical"
            },
            "technician": {
                "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "location": "Savar, Dhaka",
                "rating": 4.75,
                "profilePhoto": "www.google.com/125,.m",
                "bio": "Jisan, I am professional electrician.....",
                "availability": [
                    {
                        "id": "0e4aa9e0-8419-4127-8747-403ae929ae96",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "9ed995b8-9370-487b-abfa-d571d9bb6173",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "b96be6f4-bd96-4e9a-8d5d-0cab995acdfe",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "16:00",
                        "endTime": "19:00",
                        "isAvailable": true
                    },
                    {
                        "id": "96eb2a65-f3b8-4720-874b-696a7b20ebd1",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SUNDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "5df58542-0d76-45bb-a598-c5227107f38c",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2c8645c8-c7df-4174-8b4e-efc15fef2584",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "18:00",
                        "endTime": "21:00",
                        "isAvailable": true
                    },
                    {
                        "id": "a2442fe3-e33b-4b06-b601-f17cf611938b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "TUESDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88b1a501-5e5d-40c4-b945-d703a258ac3b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "WEDNESDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "name": "Jisan",
                    "email": "level1@programming-hero.com",
                    "phone": "01897456302"
                }
            }
        },
        {
            "id": "6d1b2e3f-8f4c-4a1d-b8d5-6e7a9c3b2f06",
            "title": "Fan Installation",
            "description": "Install or replace ceiling fans with proper electrical connections and safety checks.",
            "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "price": 700,
            "category": {
                "type": "Electrical"
            },
            "technician": {
                "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "location": "Savar, Dhaka",
                "rating": 4.75,
                "profilePhoto": "www.google.com/125,.m",
                "bio": "Jisan, I am professional electrician.....",
                "availability": [
                    {
                        "id": "0e4aa9e0-8419-4127-8747-403ae929ae96",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "9ed995b8-9370-487b-abfa-d571d9bb6173",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "b96be6f4-bd96-4e9a-8d5d-0cab995acdfe",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "16:00",
                        "endTime": "19:00",
                        "isAvailable": true
                    },
                    {
                        "id": "96eb2a65-f3b8-4720-874b-696a7b20ebd1",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SUNDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "5df58542-0d76-45bb-a598-c5227107f38c",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2c8645c8-c7df-4174-8b4e-efc15fef2584",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "18:00",
                        "endTime": "21:00",
                        "isAvailable": true
                    },
                    {
                        "id": "a2442fe3-e33b-4b06-b601-f17cf611938b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "TUESDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88b1a501-5e5d-40c4-b945-d703a258ac3b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "WEDNESDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "name": "Jisan",
                    "email": "level1@programming-hero.com",
                    "phone": "01897456302"
                }
            }
        },
        {
            "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
            "title": "Drain Cleaning",
            "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
            "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "price": 800,
            "category": {
                "type": "Plumbing"
            },
            "technician": {
                "id": "19744718-a235-41a4-b7d9-dee1606882b6",
                "location": "Khagrachari, Chattogram",
                "rating": 0,
                "profilePhoto": "www.google.com/125",
                "bio": "Sadi, I am professional plumbing.....",
                "availability": [
                    {
                        "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                    "name": "Sadi",
                    "email": "level0@programming-hero.com",
                    "phone": "0147896356"
                }
            }
        },
        {
            "id": "5b4d3e2f-1a9c-4b7d-8f2e-a7c6d5b4e010",
            "title": "Kitchen Cleaning",
            "description": "Professional cleaning of kitchen appliances, countertops, cabinets, and floors.",
            "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
            "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
            "price": 900,
            "category": {
                "type": "Cleaning"
            },
            "technician": {
                "id": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                "location": "Khulna City",
                "rating": 0,
                "profilePhoto": "www.google.com/li73^m",
                "bio": "Ismam, I am professional Electritian .....",
                "availability": [
                    {
                        "id": "79d04330-64cb-45c5-a579-6c4282daa434",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "fa188395-c403-42e4-9f82-a10f71eff239",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "07:00",
                        "endTime": "10:00",
                        "isAvailable": true
                    },
                    {
                        "id": "9aad2a3a-e64d-466b-8e2e-2b503c933e9d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "995e15e3-dfb1-4351-885a-59a4847aa2d5",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SUNDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "6a0d3dbc-e7c6-49e5-8b06-e5b911d706d7",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ac064547-87b8-4584-bed2-db780493a95b",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "17:00",
                        "endTime": "20:00",
                        "isAvailable": true
                    },
                    {
                        "id": "477da706-0cbc-4ccc-bd62-7ac21e668024",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "fba8f990-269d-4a9d-99ba-1e99d7b7789d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "THURSDAY",
                        "startTime": "14:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "c217a508-0f0f-4664-9ed7-84fca12fc77a",
                    "name": "Isman",
                    "email": "level2@programming-hero.com",
                    "phone": "01478965230"
                }
            }
        },
        {
            "id": "0c1d2e3f-4a5b-46c7-9d8e-b1c2d3e4f011",
            "title": "Bathroom Sanitization",
            "description": "Deep sanitize toilets, sinks, showers, tiles, and bathroom accessories.",
            "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
            "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
            "price": 1000,
            "category": {
                "type": "Cleaning"
            },
            "technician": {
                "id": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                "location": "Khulna City",
                "rating": 0,
                "profilePhoto": "www.google.com/li73^m",
                "bio": "Ismam, I am professional Electritian .....",
                "availability": [
                    {
                        "id": "79d04330-64cb-45c5-a579-6c4282daa434",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "fa188395-c403-42e4-9f82-a10f71eff239",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "07:00",
                        "endTime": "10:00",
                        "isAvailable": true
                    },
                    {
                        "id": "9aad2a3a-e64d-466b-8e2e-2b503c933e9d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "995e15e3-dfb1-4351-885a-59a4847aa2d5",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SUNDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "6a0d3dbc-e7c6-49e5-8b06-e5b911d706d7",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ac064547-87b8-4584-bed2-db780493a95b",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "17:00",
                        "endTime": "20:00",
                        "isAvailable": true
                    },
                    {
                        "id": "477da706-0cbc-4ccc-bd62-7ac21e668024",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "fba8f990-269d-4a9d-99ba-1e99d7b7789d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "THURSDAY",
                        "startTime": "14:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "c217a508-0f0f-4664-9ed7-84fca12fc77a",
                    "name": "Isman",
                    "email": "level2@programming-hero.com",
                    "phone": "01478965230"
                }
            }
        },
        {
            "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
            "title": "Pipe Leak Repair",
            "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
            "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "price": 1200,
            "category": {
                "type": "Plumbing"
            },
            "technician": {
                "id": "19744718-a235-41a4-b7d9-dee1606882b6",
                "location": "Khagrachari, Chattogram",
                "rating": 0,
                "profilePhoto": "www.google.com/125",
                "bio": "Sadi, I am professional plumbing.....",
                "availability": [
                    {
                        "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                    "name": "Sadi",
                    "email": "level0@programming-hero.com",
                    "phone": "0147896356"
                }
            }
        },
        {
            "id": "e16a7f8c-9d0e-4bfc-c3f4-a6b7c8d9e016",
            "title": "Door & Window Painting",
            "description": "Paint wooden or metal doors and windows with smooth finishing and durable coating.",
            "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
            "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
            "price": 1500,
            "category": {
                "type": "Painting"
            },
            "technician": {
                "id": "25bc262f-d442-44b7-adba-14fc69b8148d",
                "location": "Satkhira, Khulna",
                "rating": 0,
                "profilePhoto": "www.google.com/li73^m",
                "bio": "Ismam, I am professional cleaner .....",
                "availability": [
                    {
                        "id": "a6eb5b1c-8228-43bb-bf1c-9b55667ae7cd",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "07cdd08c-3408-4887-bf45-ee9b6c8a6a67",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "SATURDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "bef868e4-cbd5-4e9e-b29b-e8d5f8f18de8",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "SATURDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "d89d6b5b-ef35-4f95-8f7b-44805316ae1c",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "SUNDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "a0daefb1-2b68-4542-b87a-aa1e498c0e94",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "MONDAY",
                        "startTime": "12:00",
                        "endTime": "15:00",
                        "isAvailable": true
                    },
                    {
                        "id": "d9c0947c-0c4d-49c9-b54f-87a1bb24042d",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7f8e4280-93ef-41eb-a05a-723b0e862311",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "TUESDAY",
                        "startTime": "16:00",
                        "endTime": "19:00",
                        "isAvailable": true
                    },
                    {
                        "id": "48fae1b2-6542-4e8f-a3a4-d91ba25527bd",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "WEDNESDAY",
                        "startTime": "10:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "a5cdeb65-0766-44d4-a24c-227d2d996fd2",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "277a36dc-f2eb-494f-80c0-10cd9072e2d5",
                    "name": "Ifti",
                    "email": "level3@programming-hero.com",
                    "phone": "0147963258"
                }
            }
        },
        {
            "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
            "title": "Bathroom Fixture Installation",
            "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
            "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "price": 1800,
            "category": {
                "type": "Plumbing"
            },
            "technician": {
                "id": "19744718-a235-41a4-b7d9-dee1606882b6",
                "location": "Khagrachari, Chattogram",
                "rating": 0,
                "profilePhoto": "www.google.com/125",
                "bio": "Sadi, I am professional plumbing.....",
                "availability": [
                    {
                        "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    },
                    {
                        "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SATURDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "SUNDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "09:30",
                        "endTime": "12:30",
                        "isAvailable": true
                    },
                    {
                        "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "MONDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "day": "WEDNESDAY",
                        "startTime": "11:00",
                        "endTime": "14:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                    "name": "Sadi",
                    "email": "level0@programming-hero.com",
                    "phone": "0147896356"
                }
            }
        },
        {
            "id": "ad2c3b4e-5f6a-47d8-8c9b-c2d3e4f5a012",
            "title": "Sofa & Carpet Cleaning",
            "description": "Steam clean sofas, carpets, and upholstery to remove stains and allergens.",
            "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
            "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
            "price": 1800,
            "category": {
                "type": "Cleaning"
            },
            "technician": {
                "id": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                "location": "Khulna City",
                "rating": 0,
                "profilePhoto": "www.google.com/li73^m",
                "bio": "Ismam, I am professional Electritian .....",
                "availability": [
                    {
                        "id": "79d04330-64cb-45c5-a579-6c4282daa434",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "fa188395-c403-42e4-9f82-a10f71eff239",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "07:00",
                        "endTime": "10:00",
                        "isAvailable": true
                    },
                    {
                        "id": "9aad2a3a-e64d-466b-8e2e-2b503c933e9d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SATURDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "995e15e3-dfb1-4351-885a-59a4847aa2d5",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "SUNDAY",
                        "startTime": "14:00",
                        "endTime": "17:00",
                        "isAvailable": true
                    },
                    {
                        "id": "6a0d3dbc-e7c6-49e5-8b06-e5b911d706d7",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "ac064547-87b8-4584-bed2-db780493a95b",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "MONDAY",
                        "startTime": "17:00",
                        "endTime": "20:00",
                        "isAvailable": true
                    },
                    {
                        "id": "477da706-0cbc-4ccc-bd62-7ac21e668024",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "TUESDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "fba8f990-269d-4a9d-99ba-1e99d7b7789d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "day": "THURSDAY",
                        "startTime": "14:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "c217a508-0f0f-4664-9ed7-84fca12fc77a",
                    "name": "Isman",
                    "email": "level2@programming-hero.com",
                    "phone": "01478965230"
                }
            }
        },
        {
            "id": "3f1a2b4c-7d6e-45a1-b3c9-8e5f2d1c4b08",
            "title": "Circuit Breaker Repair",
            "description": "Inspect and repair faulty circuit breakers and electrical distribution panels.",
            "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "price": 2200,
            "category": {
                "type": "Electrical"
            },
            "technician": {
                "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "location": "Savar, Dhaka",
                "rating": 4.75,
                "profilePhoto": "www.google.com/125,.m",
                "bio": "Jisan, I am professional electrician.....",
                "availability": [
                    {
                        "id": "0e4aa9e0-8419-4127-8747-403ae929ae96",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": null,
                        "endTime": null,
                        "isAvailable": true
                    },
                    {
                        "id": "9ed995b8-9370-487b-abfa-d571d9bb6173",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "08:00",
                        "endTime": "11:00",
                        "isAvailable": true
                    },
                    {
                        "id": "b96be6f4-bd96-4e9a-8d5d-0cab995acdfe",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SATURDAY",
                        "startTime": "16:00",
                        "endTime": "19:00",
                        "isAvailable": true
                    },
                    {
                        "id": "96eb2a65-f3b8-4720-874b-696a7b20ebd1",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "SUNDAY",
                        "startTime": "09:00",
                        "endTime": "12:00",
                        "isAvailable": true
                    },
                    {
                        "id": "5df58542-0d76-45bb-a598-c5227107f38c",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "13:00",
                        "endTime": "16:00",
                        "isAvailable": true
                    },
                    {
                        "id": "2c8645c8-c7df-4174-8b4e-efc15fef2584",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "MONDAY",
                        "startTime": "18:00",
                        "endTime": "21:00",
                        "isAvailable": true
                    },
                    {
                        "id": "a2442fe3-e33b-4b06-b601-f17cf611938b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "TUESDAY",
                        "startTime": "10:00",
                        "endTime": "13:00",
                        "isAvailable": true
                    },
                    {
                        "id": "88b1a501-5e5d-40c4-b945-d703a258ac3b",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "day": "WEDNESDAY",
                        "startTime": "15:00",
                        "endTime": "18:00",
                        "isAvailable": true
                    }
                ],
                "user": {
                    "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "name": "Jisan",
                    "email": "level1@programming-hero.com",
                    "phone": "01897456302"
                }
            }
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 80,
        "totalPages": 8
    }
}

/////////////////////////////// PUblic route with filter (technician) 7. GET  localhost:5000/api/technicians?search=jisan

{
    "success": true,
    "statusCode": 200,
    "message": "Technicians retrieved successfully",
    "data": [
        {
            "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
            "rating": 4.83,
            "bio": "Jisan, I am professional electrician.....",
            "experience": 5,
            "profilePhoto": "www.google.com/125,.m",
            "location": "Savar, Dhaka",
            "user": {
                "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                "name": "Jisan",
                "email": "level1@programming-hero.com",
                "phone": "01897456302",
                "address": "Dhaka"
            },
            "services": [
                {
                    "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                    "title": "House Wiring",
                    "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                    "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "price": 4500,
                    "category": {
                        "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "type": "Electrical",
                        "createdAt": "2026-07-14T03:10:07.770Z",
                        "updatedAt": "2026-07-14T03:10:07.770Z"
                    }
                },
                {
                    "id": "6d1b2e3f-8f4c-4a1d-b8d5-6e7a9c3b2f06",
                    "title": "Fan Installation",
                    "description": "Install or replace ceiling fans with proper electrical connections and safety checks.",
                    "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "price": 700,
                    "category": {
                        "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "type": "Electrical",
                        "createdAt": "2026-07-14T03:10:07.770Z",
                        "updatedAt": "2026-07-14T03:10:07.770Z"
                    }
                },
                {
                    "id": "8e2f3d4a-9c5e-4d7f-a2b1-7f6d5c4b3a07",
                    "title": "Switch & Socket Replacement",
                    "description": "Replace damaged switches, sockets, and electrical outlets with new components.",
                    "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "price": 500,
                    "category": {
                        "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "type": "Electrical",
                        "createdAt": "2026-07-14T03:10:07.770Z",
                        "updatedAt": "2026-07-14T03:10:07.770Z"
                    }
                },
                {
                    "id": "3f1a2b4c-7d6e-45a1-b3c9-8e5f2d1c4b08",
                    "title": "Circuit Breaker Repair",
                    "description": "Inspect and repair faulty circuit breakers and electrical distribution panels.",
                    "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "price": 2200,
                    "category": {
                        "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "type": "Electrical",
                        "createdAt": "2026-07-14T03:10:07.770Z",
                        "updatedAt": "2026-07-14T03:10:07.770Z"
                    }
                }
            ],
            "availability": [
                {
                    "id": "0e4aa9e0-8419-4127-8747-403ae929ae96",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "SATURDAY",
                    "startTime": null,
                    "endTime": null,
                    "isAvailable": true
                },
                {
                    "id": "9ed995b8-9370-487b-abfa-d571d9bb6173",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "SATURDAY",
                    "startTime": "08:00",
                    "endTime": "11:00",
                    "isAvailable": true
                },
                {
                    "id": "b96be6f4-bd96-4e9a-8d5d-0cab995acdfe",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "SATURDAY",
                    "startTime": "16:00",
                    "endTime": "19:00",
                    "isAvailable": true
                },
                {
                    "id": "96eb2a65-f3b8-4720-874b-696a7b20ebd1",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "SUNDAY",
                    "startTime": "09:00",
                    "endTime": "12:00",
                    "isAvailable": true
                },
                {
                    "id": "5df58542-0d76-45bb-a598-c5227107f38c",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "MONDAY",
                    "startTime": "13:00",
                    "endTime": "16:00",
                    "isAvailable": true
                },
                {
                    "id": "2c8645c8-c7df-4174-8b4e-efc15fef2584",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "MONDAY",
                    "startTime": "18:00",
                    "endTime": "21:00",
                    "isAvailable": true
                },
                {
                    "id": "a2442fe3-e33b-4b06-b601-f17cf611938b",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "TUESDAY",
                    "startTime": "10:00",
                    "endTime": "13:00",
                    "isAvailable": true
                },
                {
                    "id": "88b1a501-5e5d-40c4-b945-d703a258ac3b",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "day": "WEDNESDAY",
                    "startTime": "15:00",
                    "endTime": "18:00",
                    "isAvailable": true
                }
            ],
            "reviews": [
                {
                    "id": "9c67b9f0-6b2b-4e09-b722-742149f6faa5",
                    "bookingId": "c4ee3221-5d05-4bed-93c8-864a2241c45b",
                    "customerId": "f12c8a9f-ac6a-4d84-8f0a-051744e211bf",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "rating": 5,
                    "comment": "Excellent service Jisan!!!",
                    "reviewDate": "2026-07-19T07:44:46.036Z",
                    "customer": {
                        "id": "f12c8a9f-ac6a-4d84-8f0a-051744e211bf",
                        "name": "Iqbal"
                    }
                },
                {
                    "id": "ad00facd-05bd-41f2-99d1-d15c8ad34686",
                    "bookingId": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
                    "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "rating": 4.5,
                    "comment": "Very Excellent service",
                    "reviewDate": "2026-07-18T06:53:48.107Z",
                    "customer": {
                        "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                        "name": "Abrar Mahdi"
                    }
                },
                {
                    "id": "9cda3053-07e0-4cf0-8b39-f9195fa7df4f",
                    "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                    "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                    "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "rating": 5,
                    "comment": "Very good service",
                    "reviewDate": "2026-07-18T05:56:03.564Z",
                    "customer": {
                        "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                        "name": "Abrar Mahdi"
                    }
                }
            ],
            "_count": {
                "bookings": 3,
                "reviews": 3
            },
            "totalReviews": 3,
            "completedJobs": 3
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 1,
        "totalPage": 1
    }
}

////////////////////////////// Customer only (customer own booking)8. GET localhost:5000/api/bookings
{
    "success": true,
    "statusCode": 200,
    "message": "User's own Bookings retrieved successfully",
    "data": [
        {
            "id": "52024e1a-d01b-4d23-8998-62aaadd553e1",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "price": 4500,
            "status": "COMPLETED",
            "bookingDate": "2026-07-17T18:35:08.617Z",
            "endAt": "2026-07-19T00:00:00.000Z",
            "startAt": "2026-07-18T22:00:00.000Z",
            "cancelAt": null,
            "cancelReason": null,
            "payment": {
                "id": "a425ed3b-1a94-4952-ac44-cc218deacccf",
                "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                "price": 4500,
                "method": "STRIPE",
                "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
                "stripePaymentId": "cs_test_a1ibq2jXrcSO8RrVKJtnuwPbizX0Qvi2Yfj76msH3a025s6fAfLrsnoq50",
                "status": "COMPLETED",
                "paidAt": "2026-07-17T18:54:06.173Z",
                "cancelAt": null,
                "cancelReason": null,
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
            },
            "review": {
                "id": "9cda3053-07e0-4cf0-8b39-f9195fa7df4f",
                "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "rating": 5,
                "comment": "Very good service",
                "reviewDate": "2026-07-18T05:56:03.564Z"
            },
            "service": {
                "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "title": "House Wiring",
                "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "price": 4500,
                "category": {
                    "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "type": "Electrical",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        },
        {
            "id": "abb29b7e-734c-455e-89ba-e2d5866fd3cc",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "price": 4500,
            "status": "CANCELLED",
            "bookingDate": "2026-07-17T18:33:54.073Z",
            "endAt": "2026-07-18T16:00:00.000Z",
            "startAt": "2026-07-18T14:00:00.000Z",
            "cancelAt": "2026-07-17T19:23:20.662Z",
            "cancelReason": null,
            "payment": null,
            "review": null,
            "service": {
                "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "title": "House Wiring",
                "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "price": 4500,
                "category": {
                    "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "type": "Electrical",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        },
        {
            "id": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "serviceId": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
            "price": 1200,
            "status": "COMPLETED",
            "bookingDate": "2026-07-16T02:55:09.211Z",
            "endAt": "2026-07-17T16:00:00.000Z",
            "startAt": "2026-07-16T14:00:00.000Z",
            "cancelAt": null,
            "cancelReason": null,
            "payment": {
                "id": "640d6f13-fe0e-45f7-9b24-a383c30ab705",
                "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
                "price": 1200,
                "method": "STRIPE",
                "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
                "stripePaymentId": "cs_test_a1zxmHOIM9SWTFrS43QJZktPwOTvJzmPYNGtgDLhQW8tFynm1TJE1KHUHK",
                "status": "COMPLETED",
                "paidAt": "2026-07-17T15:34:09.860Z",
                "cancelAt": null,
                "cancelReason": null,
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
            },
            "review": {
                "id": "cf203637-e7f5-4686-a0bf-86ee0cc50909",
                "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "rating": 4,
                "comment": "Excellent service",
                "reviewDate": "2026-07-18T06:43:56.862Z"
            },
            "service": {
                "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "title": "Pipe Leak Repair",
                "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1200,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        },
        {
            "id": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "price": 4500,
            "status": "COMPLETED",
            "bookingDate": "2026-07-17T18:34:48.192Z",
            "endAt": "2026-07-18T22:00:00.000Z",
            "startAt": "2026-07-18T20:00:00.000Z",
            "cancelAt": null,
            "cancelReason": null,
            "payment": {
                "id": "3af99ca7-f5a4-4e7e-b0e0-5e7dae805dd0",
                "bookingId": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
                "price": 4500,
                "method": "STRIPE",
                "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
                "stripePaymentId": "cs_test_a186KVynUQReqffs4Pl0SF7Jr3f7f0WCIYxKscCtmfsHfNgNVIHbaLPlG2",
                "status": "COMPLETED",
                "paidAt": "2026-07-18T06:51:03.502Z",
                "cancelAt": null,
                "cancelReason": null,
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
            },
            "review": {
                "id": "ad00facd-05bd-41f2-99d1-d15c8ad34686",
                "bookingId": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "rating": 4.5,
                "comment": "Very Excellent service",
                "reviewDate": "2026-07-18T06:53:48.107Z"
            },
            "service": {
                "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "title": "House Wiring",
                "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "price": 4500,
                "category": {
                    "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "type": "Electrical",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        },
        {
            "id": "f027bca7-d408-4962-93e8-2067c59429d3",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "price": 4500,
            "status": "ACCEPTED",
            "bookingDate": "2026-07-17T18:34:24.842Z",
            "endAt": "2026-07-18T19:00:00.000Z",
            "startAt": "2026-07-18T17:00:00.000Z",
            "cancelAt": null,
            "cancelReason": null,
            "payment": null,
            "review": null,
            "service": {
                "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "title": "House Wiring",
                "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "price": 4500,
                "category": {
                    "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                    "type": "Electrical",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        }
    ]
}

////////////////////////////// Customer only (customer create booking)9. POST localhost:5000/api/bookings
//payload body
//{
//     "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
//     "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
//     "startAt": "2026-08-20T22:00:00Z",
//     "endAt": "2026-08-21T24:00:00Z"
// }

            
{
    "success": true,
    "statusCode": 201,
    "message": "Booking created successfully",
    "data": {
        "id": "d35692bb-31f7-4a64-957b-85f0e200485c",
        "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
        "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
        "price": 4500,
        "status": "REQUESTED",
        "bookingDate": "2026-08-04T14:41:10.585Z",
        "endAt": "2026-08-22T00:00:00.000Z",
        "startAt": "2026-08-20T22:00:00.000Z",
        "cancelAt": null,
        "cancelReason": null,
        "customer": {
            "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "name": "Abrar Mahdi",
            "email": "level4@programming-hero.com",
            "phone": "014796347",
            "address": "Chattogram"
        },
        "technician": {
            "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
            "rating": 4.75,
            "bio": "Jisan, I am professional electrician.....",
            "experience": 5,
            "profilePhoto": "www.google.com/125,.m",
            "location": "Savar, Dhaka",
            "user": {
                "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                "name": "Jisan",
                "email": "level1@programming-hero.com",
                "phone": "01897456302"
            }
        },
        "service": {
            "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "title": "House Wiring",
            "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
            "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "price": 4500,
            "category": {
                "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "type": "Electrical",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z"
            }
        },
        "payment": null,
        "review": null
    }
}

///////////////////////////////// Customer only (get booking details with bookinId)  10. GET localhost:5000/api/bookings/a4d913f5-b110-4f1d-94cc-2d937021887b
{
    "success": true,
    "statusCode": 200,
    "message": "Booking details retrieved successfully",
    "data": {
        "id": "a4d913f5-b110-4f1d-94cc-2d937021887b",
        "customerId": "d4ad3535-09bf-484b-8513-060f8ee4108e",
        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
        "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
        "price": 4800,
        "status": "COMPLETED",
        "bookingDate": "2026-07-18T18:54:46.679Z",
        "endAt": "2026-07-21T00:00:00.000Z",
        "startAt": "2026-07-19T22:00:00.000Z",
        "cancelAt": null,
        "cancelReason": null,
        "customer": {
            "id": "d4ad3535-09bf-484b-8513-060f8ee4108e",
            "name": "Yeasin Ahmed",
            "email": "level9@programming-hero.com",
            "phone": "0178776697",
            "address": "Dhaka"
        },
        "technician": {
            "id": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
            "userId": "c3170138-decf-4e1e-b4d0-f4be4c0fca78",
            "rating": 5,
            "bio": "Professional Furniture Repair specialist with 4 years of experience in Bangladesh.",
            "experience": 4,
            "profilePhoto": "https://ui-avatars.com/api/?name=Md.+Abdul Latif&size=200",
            "location": "Comilla City",
            "user": {
                "id": "c3170138-decf-4e1e-b4d0-f4be4c0fca78",
                "name": "Md. Abdul Latif",
                "email": "md..abdul.latif@fixitnow.com",
                "phone": "013456007023"
            }
        },
        "service": {
            "id": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
            "title": "Wood Refinishing",
            "description": "Professional wood refinishing service by Md. Abdul Latif. Quality guaranteed!",
            "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
            "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
            "price": 4800,
            "category": {
                "id": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                "type": "Furniture Repair",
                "createdAt": "2026-07-18T09:44:39.449Z",
                "updatedAt": "2026-07-18T09:44:39.449Z"
            }
        },
        "payment": {
            "id": "e5e1aad7-e24b-40c0-9c81-dc24682c4a0d",
            "price": 4800,
            "method": "STRIPE",
            "status": "COMPLETED",
            "paidAt": "2026-07-18T18:58:09.521Z",
            "stripeCustomerId": "cus_UuRbz0mgKOeeHB",
            "stripePaymentId": "cs_test_a1gNDUe9P8dVrLDRxxGGD28M2i20oTASV6VM2IL50ZhoZazukOxfCNwoo8"
        },
        "review": {
            "id": "1e79563b-555d-42b4-9c76-23377e981876",
            "rating": 5,
            "comment": "Excellent service A Latif",
            "reviewDate": "2026-07-18T19:13:30.221Z"
        }
    }
}


/////////////////////////////////Customer only 11. PATCT localhost:5000/api/bookings/cancel/f027bca7-d408-4962-93e8-2067c59429d3/
//payload body
// {
//     "cancelReason":"Sorry, I found Better service."
// }

{
    "success": true,
    "statusCode": 200,
    "message": "Booking cancelled successfully",
    "data": {
        "id": "f027bca7-d408-4962-93e8-2067c59429d3",
        "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
        "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
        "price": 4500,
        "status": "CANCELLED",
        "bookingDate": "2026-07-17T18:34:24.842Z",
        "endAt": "2026-07-18T19:00:00.000Z",
        "startAt": "2026-07-18T17:00:00.000Z",
        "cancelAt": "2026-08-04T14:47:19.124Z",
        "cancelReason": null,
        "customer": {
            "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "name": "Abrar Mahdi",
            "email": "level4@programming-hero.com",
            "phone": "014796347"
        },
        "technician": {
            "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
            "rating": 4.75,
            "bio": "Jisan, I am professional electrician.....",
            "experience": 5,
            "profilePhoto": "www.google.com/125,.m",
            "location": "Savar, Dhaka",
            "user": {
                "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                "name": "Jisan",
                "email": "level1@programming-hero.com",
                "phone": "01897456302"
            }
        },
        "service": {
            "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
            "title": "House Wiring",
            "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
            "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
            "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
            "price": 4500,
            "category": {
                "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "type": "Electrical",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z"
            }
        },
        "payment": null,
        "review": null
    }
}

////////////////////////// Customer only   12. POST  localhost:5000/api/reviews/5135b512-1723-4a3f-a0f1-5c44fe4b867e

// payload
// {
//     "rating":5,
//     "comment":"Very nice service"
// }

{
    "success": true,
    "statusCode": 201,
    "message": "Review completed Successfully",
    "data": {
        "id": "ed7c41f6-084d-4721-9cc2-21cd33ac5f5d",
        "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
        "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
        "rating": 5,
        "comment": "Very nice service",
        "reviewDate": "2026-08-04T15:01:00.088Z"
    }
}

//////////////////////////////// Customer only 13.GET localhost:5000/api/payments/
{
    "success": true,
    "statusCode": 200,
    "message": "Payment history retrieved successfully",
    "data": [
        {
            "id": "3af99ca7-f5a4-4e7e-b0e0-5e7dae805dd0",
            "bookingId": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
            "price": 4500,
            "method": "STRIPE",
            "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
            "stripePaymentId": "cs_test_a186KVynUQReqffs4Pl0SF7Jr3f7f0WCIYxKscCtmfsHfNgNVIHbaLPlG2",
            "status": "COMPLETED",
            "paidAt": "2026-07-18T06:51:03.502Z",
            "cancelAt": null,
            "cancelReason": null,
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "booking": {
                "id": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-17T18:34:48.192Z",
                "endAt": "2026-07-18T22:00:00.000Z",
                "startAt": "2026-07-18T20:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null,
                "service": {
                    "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                    "title": "House Wiring",
                    "price": 4500
                },
                "technician": {
                    "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "rating": 4.75,
                    "bio": "Jisan, I am professional electrician.....",
                    "experience": 5,
                    "profilePhoto": "www.google.com/125,.m",
                    "location": "Savar, Dhaka",
                    "user": {
                        "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                        "name": "Jisan",
                        "email": "level1@programming-hero.com"
                    }
                }
            },
            "customer": {
                "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "name": "Abrar Mahdi",
                "email": "level4@programming-hero.com"
            }
        },
        {
            "id": "a425ed3b-1a94-4952-ac44-cc218deacccf",
            "bookingId": "52024e1a-d01b-4d23-8998-62aaadd553e1",
            "price": 4500,
            "method": "STRIPE",
            "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
            "stripePaymentId": "cs_test_a1ibq2jXrcSO8RrVKJtnuwPbizX0Qvi2Yfj76msH3a025s6fAfLrsnoq50",
            "status": "COMPLETED",
            "paidAt": "2026-07-17T18:54:06.173Z",
            "cancelAt": null,
            "cancelReason": null,
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "booking": {
                "id": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-17T18:35:08.617Z",
                "endAt": "2026-07-19T00:00:00.000Z",
                "startAt": "2026-07-18T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null,
                "service": {
                    "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                    "title": "House Wiring",
                    "price": 4500
                },
                "technician": {
                    "id": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                    "userId": "4046447e-37f9-49fc-89c9-6844539b759e",
                    "rating": 4.75,
                    "bio": "Jisan, I am professional electrician.....",
                    "experience": 5,
                    "profilePhoto": "www.google.com/125,.m",
                    "location": "Savar, Dhaka",
                    "user": {
                        "id": "4046447e-37f9-49fc-89c9-6844539b759e",
                        "name": "Jisan",
                        "email": "level1@programming-hero.com"
                    }
                }
            },
            "customer": {
                "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "name": "Abrar Mahdi",
                "email": "level4@programming-hero.com"
            }
        },
        {
            "id": "640d6f13-fe0e-45f7-9b24-a383c30ab705",
            "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
            "price": 1200,
            "method": "STRIPE",
            "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
            "stripePaymentId": "cs_test_a1zxmHOIM9SWTFrS43QJZktPwOTvJzmPYNGtgDLhQW8tFynm1TJE1KHUHK",
            "status": "COMPLETED",
            "paidAt": "2026-07-17T15:34:09.860Z",
            "cancelAt": null,
            "cancelReason": null,
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "booking": {
                "id": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "serviceId": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "price": 1200,
                "status": "COMPLETED",
                "bookingDate": "2026-07-16T02:55:09.211Z",
                "endAt": "2026-07-17T16:00:00.000Z",
                "startAt": "2026-07-16T14:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null,
                "service": {
                    "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                    "title": "Pipe Leak Repair",
                    "price": 1200
                },
                "technician": {
                    "id": "19744718-a235-41a4-b7d9-dee1606882b6",
                    "userId": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                    "rating": 0,
                    "bio": "Sadi, I am professional plumbing.....",
                    "experience": 6,
                    "profilePhoto": "www.google.com/125",
                    "location": "Khagrachari, Chattogram",
                    "user": {
                        "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                        "name": "Sadi",
                        "email": "level0@programming-hero.com"
                    }
                }
            },
            "customer": {
                "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "name": "Abrar Mahdi",
                "email": "level4@programming-hero.com"
            }
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 3,
        "totalPages": 1
    }
}

//////////////////////////// Customer only 14. POST localhost:5000/api/payments/create
// payload
// {
//     "bookingId": "f027bca7-d408-4962-93e8-2067c59429d3"
// }

{
    "success": true,
    "statusCode": 201,
    "message": "Payment session created successfully",
    "data": {
        "sessionId": "cs_test_a1Sr8CbhJhftRxq77ruqAXhTkkT5hpnFq4rJaNe55Svz5bWAHyj7qIDrcl",
        "checkoutUrl": "https://checkout.stripe.com/c/pay/cs_test_a1Sr8CbhJhftRxq77ruqAXhTkkT5hpnFq4rJaNe55Svz5bWAHyj7qIDrcl#fidnandhYHdWcXxpYCc%2FJ2FgY2RwaXEnKSdicGRmZGhqaWBTZHdsZGtxJz8nZmprcXdqaScpJ2R1bE5gfCc%2FJ3VuWnFgdnFaMDRRcV1wdkZTMktUPEZMfDdgY1w3fEhndlVzb1RKYWpARGt9QnxKaGdvU05kTn9uZnxta1NuZlx2RGx9YG08cnE0bTBmM3d%2FPWp8TUlKYDJVfDFzZ39rTGg1NUt0Z09fUnxyJyknY3dqaFZgd3Ngdyc%2FcXdwYCknZ2RmbmJ3anBrYUZqaWp3Jz8nJmNjY2NjYycpJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
        "payment": {
            "id": "9a93f080-1b8b-46ec-95ee-39d26a5a0c77",
            "bookingId": "f027bca7-d408-4962-93e8-2067c59429d3",
            "price": 4500,
            "method": "STRIPE",
            "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
            "stripePaymentId": "cs_test_a1Sr8CbhJhftRxq77ruqAXhTkkT5hpnFq4rJaNe55Svz5bWAHyj7qIDrcl",
            "status": "PENDING",
            "paidAt": null,
            "cancelAt": null,
            "cancelReason": null,
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
        }
    }
}

///////////////////////// Technician only ////////////////////////////////
///////////////////////// Update tech profile 15. PUT localhost:5000/api/technician/profile
//payload body
// {
    
//     "bio": "Sadi, I am professional Drainer .....",
//     "experience": 4,
//     "profilePhoto": "www.google.com/li73^m",
//     "location": "Khagrachari, Chattogram"
// }

{
    "success": true,
    "statusCode": 200,
    "message": "Technician profile updated successfully",
    "data": {
        "id": "19744718-a235-41a4-b7d9-dee1606882b6",
        "userId": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
        "rating": 0,
        "bio": "Sadi, I am professional Drainer .....",
        "experience": 4,
        "profilePhoto": "www.google.com/li73^m",
        "location": "Khagrachari, Chattogram",
        "user": {
            "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
            "name": "Sadi",
            "email": "level0@programming-hero.com",
            "phone": "0147896356",
            "address": "Chattogram",
            "isBan": false
        },
        "availability": [
            {
                "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": null,
                "endTime": null,
                "isAvailable": true
            },
            {
                "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            }
        ],
        "services": [
            {
                "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
                "title": "Drain Cleaning",
                "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "title": "Pipe Leak Repair",
                "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1200,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
                "title": "Bathroom Fixture Installation",
                "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "95b0d2a1-4d8e-49d8-93d6-4b9f0e8c6e04",
                "title": "Water Tank Installation",
                "description": "Install and connect residential water storage tanks with proper plumbing support.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 3500,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        ]
    }
}

/////////////////////////////// Create Availabiliy  16. POST  http://localhost:5000/api/technician/availability
//payload body, data should be given in Array format for my backedn logic
// {
//   "availabilities": [
//     {
//       "day": "SATURDAY",
//       "startTime": "09:00",
//       "endTime": "12:00",
//       "isAvailable": true
//     },
//     {
//       "day": "SATURDAY",
//       "startTime": "14:00",
//       "endTime": "17:00",
//       "isAvailable": true
//     },
//     {
//       "day": "SUNDAY",
//       "startTime": "11:00",
//       "endTime": "14:00",
//       "isAvailable": true
//     },
//     {
//       "day": "MONDAY",
//       "startTime": "08:30",
//       "endTime": "11:30",
//       "isAvailable": true
//     },
//     {
//       "day": "MONDAY",
//       "startTime": "16:00",
//       "endTime": "19:00",
//       "isAvailable": true
//     },
//     {
//       "day": "THURSDAY",
//       "startTime": "09:00",
//       "endTime": "12:00",
//       "isAvailable": true
//     },
//     {
//       "day": "FRIDAY",
//       "startTime": "15:00",
//       "endTime": "18:00",
//       "isAvailable": true
//     }
//   ]
// }
{
    "success": true,
    "statusCode": 200,
    "message": "Availability slots Created successfully",
    "data": {
        "id": "19744718-a235-41a4-b7d9-dee1606882b6",
        "userId": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
        "rating": 0,
        "bio": "Sadi, I am professional Drainer .....",
        "experience": 4,
        "profilePhoto": "www.google.com/li73^m",
        "location": "Khagrachari, Chattogram",
        "user": {
            "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
            "name": "Sadi",
            "email": "level0@programming-hero.com",
            "phone": "0147896356",
            "address": "Chattogram"
        },
        "availability": [
            {
                "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "1f20a455-4b21-452f-8c61-aa6d5e11105d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": null,
                "endTime": null,
                "isAvailable": true
            },
            {
                "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "cdd39a4d-62a9-4dbc-9bc7-45fb91bbbfe5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "2c6d727c-6879-4407-a618-305981c467d4",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "19b7f96b-5214-423b-a001-d70c2274d090",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "08:30",
                "endTime": "11:30",
                "isAvailable": true
            },
            {
                "id": "c049123e-76e6-458d-9469-497779ada9c9",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "16:00",
                "endTime": "19:00",
                "isAvailable": true
            },
            {
                "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "cd2168e4-b4c0-4002-a3cb-df152eae43d6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "THURSDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "5e54727b-d21a-474e-8327-ba0cb536e6b8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "FRIDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            }
        ],
        "services": [
            {
                "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
                "title": "Drain Cleaning",
                "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "title": "Pipe Leak Repair",
                "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1200,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
                "title": "Bathroom Fixture Installation",
                "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "95b0d2a1-4d8e-49d8-93d6-4b9f0e8c6e04",
                "title": "Water Tank Installation",
                "description": "Install and connect residential water storage tanks with proper plumbing support.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 3500,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        ]
    }
}

///////////////////////////////Get all availabity 17. GET  http://localhost:5000/api/technician/availability
{
    "success": true,
    "statusCode": 200,
    "message": "Availability slots Retrieved successfully",
    "data": {
        "technicianAvailabilities": [
            {
                "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "1f20a455-4b21-452f-8c61-aa6d5e11105d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": null,
                "endTime": null,
                "isAvailable": true
            },
            {
                "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "cdd39a4d-62a9-4dbc-9bc7-45fb91bbbfe5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "2c6d727c-6879-4407-a618-305981c467d4",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "19b7f96b-5214-423b-a001-d70c2274d090",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "08:30",
                "endTime": "11:30",
                "isAvailable": true
            },
            {
                "id": "c049123e-76e6-458d-9469-497779ada9c9",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "16:00",
                "endTime": "19:00",
                "isAvailable": true
            },
            {
                "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "cd2168e4-b4c0-4002-a3cb-df152eae43d6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "THURSDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "5e54727b-d21a-474e-8327-ba0cb536e6b8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "FRIDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            }
        ]
    }
}

///////////////////////////// Update availabilty 18. PUT localhost:5000/api/technician/availability
//payload body, should be in array format
// {
//    "availabilities":  [
//         {
//             "day": "SATURDAY",
//             "startTime": "09:00",
//             "endTime": "12:00",
//             "isAvailable": true
//         }
//     ]
// }

{
    "success": true,
    "statusCode": 200,
    "message": "Availability slots updated successfully",
    "data": {
        "id": "19744718-a235-41a4-b7d9-dee1606882b6",
        "userId": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
        "rating": 0,
        "bio": "Sadi, I am professional Drainer .....",
        "experience": 4,
        "profilePhoto": "www.google.com/li73^m",
        "location": "Khagrachari, Chattogram",
        "user": {
            "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
            "name": "Sadi",
            "email": "level0@programming-hero.com",
            "phone": "0147896356",
            "address": "Chattogram"
        },
        "availability": [
            {
                "id": "9f754b89-68b3-47a6-932a-743cb7d0552b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": null,
                "endTime": null,
                "isAvailable": true
            },
            {
                "id": "92eefa92-ebc1-444f-be6e-e2aa0e32484d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "f216cc32-8031-46ce-b4c7-22be34fec846",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "f70936e0-6a7d-4f3e-96d5-9b94280efa32",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "3c511833-2790-4ffd-afb1-4b3212377ea1",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "73ccfa4c-cbec-4a8c-89ec-9a4b3c2b8896",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "7be729a4-689a-4a3a-afd5-597553ee3af2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "d24f680c-df8f-48f3-8eef-4b3d8d8e17a5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "88c01fec-bf37-4a01-87e9-66962009814d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "1f20a455-4b21-452f-8c61-aa6d5e11105d",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "cdd39a4d-62a9-4dbc-9bc7-45fb91bbbfe5",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "14:00",
                "endTime": "17:00",
                "isAvailable": true
            },
            {
                "id": "4112323d-ee94-4102-a9d5-31515784e1a7",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SATURDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "45b05846-3829-4d2c-bc0f-bb8814dec5ea",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "2847ffa6-cf98-4d5e-be22-698feceea374",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "800c06a2-0b61-4e0b-889a-fd5f98616c8a",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "cc57f89f-7366-4e54-b6d0-d4c663d232dc",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "10:00",
                "endTime": "13:00",
                "isAvailable": true
            },
            {
                "id": "2c6d727c-6879-4407-a618-305981c467d4",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "SUNDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "207765a1-8d58-4a7a-a913-a10c8694d497",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "992ae846-89a6-499a-a68d-17ed6bd9d60b",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "ac5e20c7-d26f-4829-ad68-245626d86c7f",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "19b7f96b-5214-423b-a001-d70c2274d090",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "08:30",
                "endTime": "11:30",
                "isAvailable": true
            },
            {
                "id": "c049123e-76e6-458d-9469-497779ada9c9",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "16:00",
                "endTime": "19:00",
                "isAvailable": true
            },
            {
                "id": "03ce6622-50b6-4cc9-92a6-b6ab0840b103",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "bb2a0fba-3606-409c-baed-e14144a71fc6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "c80504f7-8f1c-44a8-a6ff-468bbad0cde2",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "09:30",
                "endTime": "12:30",
                "isAvailable": true
            },
            {
                "id": "c625b77d-0486-4089-9ba7-bf85cd5bf9f8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "c4e8fd0b-23a9-45a7-a61c-7359dd2fe847",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "MONDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            },
            {
                "id": "ddf02cdb-3f3a-4d59-97a9-cf0d83b14752",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "0b2a6af0-a724-4989-a1ab-2438df37dcca",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "4d7e94ab-1efc-421a-84c9-65222a7ac441",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "63688a79-0bfd-4df4-a703-b24d6e5ea339",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "TUESDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "7f765c31-dd83-425e-b764-f381d4315d5c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "ccf1ce54-8168-4f92-9c19-871d378efb04",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "f15bb765-531a-4cfd-b55c-267cc77fb602",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "c81088d8-734b-4fc8-a298-3ea5e1f40696",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "WEDNESDAY",
                "startTime": "11:00",
                "endTime": "14:00",
                "isAvailable": true
            },
            {
                "id": "cd2168e4-b4c0-4002-a3cb-df152eae43d6",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "THURSDAY",
                "startTime": "09:00",
                "endTime": "12:00",
                "isAvailable": true
            },
            {
                "id": "5e54727b-d21a-474e-8327-ba0cb536e6b8",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "day": "FRIDAY",
                "startTime": "15:00",
                "endTime": "18:00",
                "isAvailable": true
            }
        ],
        "services": [
            {
                "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
                "title": "Drain Cleaning",
                "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "title": "Pipe Leak Repair",
                "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1200,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
                "title": "Bathroom Fixture Installation",
                "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1800,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            {
                "id": "95b0d2a1-4d8e-49d8-93d6-4b9f0e8c6e04",
                "title": "Water Tank Installation",
                "description": "Install and connect residential water storage tanks with proper plumbing support.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 3500,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            }
        ]
    }
}

//////////////////////////// Get Technician booking 19. localhost:5000/api/technician/bookings/
{
    "success": true,
    "statusCode": 200,
    "message": "Bookings retrieved successfully",
    "data": [
        {
            "id": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "serviceId": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
            "price": 1200,
            "status": "COMPLETED",
            "bookingDate": "2026-07-16T02:55:09.211Z",
            "endAt": "2026-07-17T16:00:00.000Z",
            "startAt": "2026-07-16T14:00:00.000Z",
            "cancelAt": null,
            "cancelReason": null,
            "customer": {
                "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "name": "Abrar Mahdi",
                "email": "level4@programming-hero.com",
                "phone": "014796347",
                "address": "Chattogram"
            },
            "service": {
                "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "title": "Pipe Leak Repair",
                "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "price": 1200,
                "category": {
                    "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                    "type": "Plumbing",
                    "createdAt": "2026-07-14T03:10:07.770Z",
                    "updatedAt": "2026-07-14T03:10:07.770Z"
                }
            },
            "payment": {
                "id": "640d6f13-fe0e-45f7-9b24-a383c30ab705",
                "price": 1200,
                "method": "STRIPE",
                "status": "COMPLETED",
                "paidAt": "2026-07-17T15:34:09.860Z",
                "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
                "stripePaymentId": "cs_test_a1zxmHOIM9SWTFrS43QJZktPwOTvJzmPYNGtgDLhQW8tFynm1TJE1KHUHK"
            },
            "review": {
                "id": "ed7c41f6-084d-4721-9cc2-21cd33ac5f5d",
                "rating": 5,
                "comment": "Very nice service"
            }
        }
    ],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 1,
        "pages": 1
    }
}

/////////////////////////// Update Booking status 20. PATCH localhost:5000/api/technician/bookings/5135b512-1723-4a3f-a0f1-5c44fe4b867e
//payload-body
// {
//     "status": "COMPLETED"
// }

{
    "success": true,
    "statusCode": 200,
    "message": "Booking completed successfully",
    "data": {
        "id": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
        "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
        "serviceId": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
        "price": 1200,
        "status": "COMPLETED",
        "bookingDate": "2026-07-16T02:55:09.211Z",
        "endAt": "2026-07-17T16:00:00.000Z",
        "startAt": "2026-07-16T14:00:00.000Z",
        "cancelAt": null,
        "cancelReason": null,
        "customer": {
            "id": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "name": "Abrar Mahdi",
            "email": "level4@programming-hero.com",
            "phone": "014796347",
            "address": "Chattogram"
        },
        "technician": {
            "id": "19744718-a235-41a4-b7d9-dee1606882b6",
            "userId": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
            "rating": 0,
            "bio": "Sadi, I am professional Drainer .....",
            "experience": 4,
            "profilePhoto": "www.google.com/li73^m",
            "location": "Khagrachari, Chattogram",
            "user": {
                "id": "5a25b4ac-3870-4a4e-b2ee-785a0a36bc07",
                "name": "Sadi",
                "email": "level0@programming-hero.com",
                "phone": "0147896356"
            }
        },
        "service": {
            "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
            "title": "Pipe Leak Repair",
            "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
            "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "price": 1200,
            "category": {
                "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "type": "Plumbing",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z"
            }
        },
        "payment": {
            "id": "640d6f13-fe0e-45f7-9b24-a383c30ab705",
            "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
            "price": 1200,
            "method": "STRIPE",
            "stripeCustomerId": "cus_Uu1p4fB1Pi6Z1U",
            "stripePaymentId": "cs_test_a1zxmHOIM9SWTFrS43QJZktPwOTvJzmPYNGtgDLhQW8tFynm1TJE1KHUHK",
            "status": "COMPLETED",
            "paidAt": "2026-07-17T15:34:09.860Z",
            "cancelAt": null,
            "cancelReason": null,
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c"
        },
        "review": {
            "id": "ed7c41f6-084d-4721-9cc2-21cd33ac5f5d",
            "bookingId": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
            "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
            "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
            "rating": 5,
            "comment": "Very nice service",
            "reviewDate": "2026-08-04T15:01:00.088Z"
        }
    }
}

///////////////////////////////// Only for admin 
////////////////////////////// Category creation 21. POST localhost:5000/api/admin/categories
// payload body 
// {
//     "type":"Draining 2"

// }
{
    "success": true,
    "statusCode": 201,
    "message": "Catergory Created successfully",
    "data": {
        "category": {
            "id": "a62829f8-5871-4cc0-8200-ffae13814cdf",
            "type": "Draining 2",
            "createdAt": "2026-08-04T15:48:11.466Z",
            "updatedAt": "2026-08-04T15:48:11.466Z",
            "services": []
        }
    }
}

/////////////////////// Get all categories 22. GET localhost:5000/api/admin/categories
{
    "success": true,
    "statusCode": 201,
    "message": "All Catergory Fetched successfully",
    "data": {
        "allCategory": [
            {
                "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "type": "Electrical",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                        "title": "House Wiring",
                        "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 4500
                    },
                    {
                        "id": "6d1b2e3f-8f4c-4a1d-b8d5-6e7a9c3b2f06",
                        "title": "Fan Installation",
                        "description": "Install or replace ceiling fans with proper electrical connections and safety checks.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 700
                    },
                    {
                        "id": "8e2f3d4a-9c5e-4d7f-a2b1-7f6d5c4b3a07",
                        "title": "Switch & Socket Replacement",
                        "description": "Replace damaged switches, sockets, and electrical outlets with new components.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 500
                    },
                    {
                        "id": "3f1a2b4c-7d6e-45a1-b3c9-8e5f2d1c4b08",
                        "title": "Circuit Breaker Repair",
                        "description": "Inspect and repair faulty circuit breakers and electrical distribution panels.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 2200
                    }
                ]
            },
            {
                "id": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                "type": "Painting",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "be3d4c5f-6a7b-48e9-9b0c-d3e4f5a6b013",
                        "title": "Interior Wall Painting",
                        "description": "Professional painting for interior walls using high-quality, long-lasting paints.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 5000
                    },
                    {
                        "id": "cf4e5d6a-7b8c-49fa-a1d2-e4f5a6b7c014",
                        "title": "Wall Crack Repair & Painting",
                        "description": "Repair wall cracks, prepare surfaces, and apply fresh coats of paint for a flawless finish.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 2200
                    },
                    {
                        "id": "d05f6e7b-8c9d-4afb-b2e3-f5a6b7c8d015",
                        "title": "Exterior House Painting",
                        "description": "Weather-resistant exterior painting service for residential buildings.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 8500
                    },
                    {
                        "id": "e16a7f8c-9d0e-4bfc-c3f4-a6b7c8d9e016",
                        "title": "Door & Window Painting",
                        "description": "Paint wooden or metal doors and windows with smooth finishing and durable coating.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 1500
                    }
                ]
            },
            {
                "id": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                "type": "Cleaning",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "9a7c6d5e-3b2f-4e8a-91d4-9b6c5d4e3f09",
                        "title": "Home Deep Cleaning",
                        "description": "Comprehensive cleaning service covering bedrooms, living rooms, kitchens, and bathrooms",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 2500
                    },
                    {
                        "id": "0c1d2e3f-4a5b-46c7-9d8e-b1c2d3e4f011",
                        "title": "Bathroom Sanitization",
                        "description": "Deep sanitize toilets, sinks, showers, tiles, and bathroom accessories.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 1000
                    },
                    {
                        "id": "5b4d3e2f-1a9c-4b7d-8f2e-a7c6d5b4e010",
                        "title": "Kitchen Cleaning",
                        "description": "Professional cleaning of kitchen appliances, countertops, cabinets, and floors.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 900
                    },
                    {
                        "id": "ad2c3b4e-5f6a-47d8-8c9b-c2d3e4f5a012",
                        "title": "Sofa & Carpet Cleaning",
                        "description": "Steam clean sofas, carpets, and upholstery to remove stains and allergens.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 1800
                    }
                ]
            },
            {
                "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "type": "Plumbing",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
                        "title": "Drain Cleaning",
                        "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 800
                    },
                    {
                        "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                        "title": "Pipe Leak Repair",
                        "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 1200
                    },
                    {
                        "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
                        "title": "Bathroom Fixture Installation",
                        "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 1800
                    },
                    {
                        "id": "95b0d2a1-4d8e-49d8-93d6-4b9f0e8c6e04",
                        "title": "Water Tank Installation",
                        "description": "Install and connect residential water storage tanks with proper plumbing support.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 3500
                    }
                ]
            },
            {
                "id": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                "type": "Carpentry",
                "createdAt": "2026-07-18T09:44:37.206Z",
                "updatedAt": "2026-07-18T09:44:37.206Z",
                "services": [
                    {
                        "id": "70e03f49-7cda-4d0d-96b3-e69bf9d634b2",
                        "title": "Custom Furniture Making",
                        "description": "Professional custom furniture making service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 5400
                    },
                    {
                        "id": "edee2431-eab5-4e9e-8a44-c78766812b85",
                        "title": "Cabinet Installation",
                        "description": "Professional cabinet installation service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 7020
                    },
                    {
                        "id": "b3891317-ddd1-4158-b30b-43fe467fc825",
                        "title": "Woodworking & Repair",
                        "description": "Professional woodworking & repair service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 8640
                    },
                    {
                        "id": "1f9becca-bf24-40e4-880e-3711f89d6449",
                        "title": "Door & Window Installation",
                        "description": "Professional door & window installation service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 10260
                    },
                    {
                        "id": "8b46a3dd-1af1-4be4-816b-df93fd809d7f",
                        "title": "Custom Furniture Making",
                        "description": "Professional custom furniture making service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 6000
                    },
                    {
                        "id": "bbd9ec5d-b451-4d79-8379-4dc1c61ddebf",
                        "title": "Cabinet Installation",
                        "description": "Professional cabinet installation service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 7800
                    },
                    {
                        "id": "4d024d30-8e06-4a23-9402-c1ee921c31a0",
                        "title": "Woodworking & Repair",
                        "description": "Professional woodworking & repair service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 9600
                    },
                    {
                        "id": "86ef8ef7-56f5-4808-b5b8-9306b059f9ff",
                        "title": "Door & Window Installation",
                        "description": "Professional door & window installation service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 11400
                    }
                ]
            },
            {
                "id": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                "type": "Gardening",
                "createdAt": "2026-07-18T09:44:37.496Z",
                "updatedAt": "2026-07-18T09:44:37.496Z",
                "services": [
                    {
                        "id": "47e76cdf-31ba-4840-82b5-505231b72b9e",
                        "title": "Garden Design & Landscaping",
                        "description": "Professional garden design & landscaping service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 4200
                    },
                    {
                        "id": "410e5edf-7bc2-4545-97b1-2bf691d1d9c1",
                        "title": "Lawn Maintenance",
                        "description": "Professional lawn maintenance service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 5460
                    },
                    {
                        "id": "d148e44b-fca8-4a84-872a-059b4e37c527",
                        "title": "Tree Trimming & Pruning",
                        "description": "Professional tree trimming & pruning service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 6720
                    },
                    {
                        "id": "bb9fb7b8-713d-486f-8b4e-16578deac282",
                        "title": "Irrigation System Installation",
                        "description": "Professional irrigation system installation service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 7980
                    },
                    {
                        "id": "0a9ff217-0c60-4d30-b1e5-560c1637deaf",
                        "title": "Garden Design & Landscaping",
                        "description": "Professional garden design & landscaping service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 3600
                    },
                    {
                        "id": "9bd14707-2bac-4d06-8e5d-46b6950d5c34",
                        "title": "Lawn Maintenance",
                        "description": "Professional lawn maintenance service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 4680
                    },
                    {
                        "id": "1dcdc001-46a9-4e52-a6ce-e99c8d642762",
                        "title": "Tree Trimming & Pruning",
                        "description": "Professional tree trimming & pruning service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 5760
                    },
                    {
                        "id": "e45a287e-56a6-478a-aa99-4e45de8e440a",
                        "title": "Irrigation System Installation",
                        "description": "Professional irrigation system installation service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 6840
                    }
                ]
            },
            {
                "id": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                "type": "HVAC",
                "createdAt": "2026-07-18T09:44:37.776Z",
                "updatedAt": "2026-07-18T09:44:37.776Z",
                "services": [
                    {
                        "id": "627a7b8a-32f3-4313-abb7-bf09b6850124",
                        "title": "AC Installation & Repair",
                        "description": "Professional ac installation & repair service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 6600
                    },
                    {
                        "id": "46055b91-52ff-4912-bf0d-425c10f4bbad",
                        "title": "Heating System Repair",
                        "description": "Professional heating system repair service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 8580
                    },
                    {
                        "id": "fb1af735-2e34-488b-aac4-fe61be072fca",
                        "title": "Ventilation Cleaning",
                        "description": "Professional ventilation cleaning service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 10560
                    },
                    {
                        "id": "d8b67dde-c1e0-46fb-8b90-5e6931485d4f",
                        "title": "Thermostat Setup",
                        "description": "Professional thermostat setup service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 12540
                    },
                    {
                        "id": "4a2bdec0-027f-4f90-aeff-731c7b602a9e",
                        "title": "AC Installation & Repair",
                        "description": "Professional ac installation & repair service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 7200
                    },
                    {
                        "id": "cea1b644-2eb2-40ef-ad5b-44de38e204f6",
                        "title": "Heating System Repair",
                        "description": "Professional heating system repair service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 9360
                    },
                    {
                        "id": "60ac9e11-03c5-47c2-b0d8-8d24de6953c6",
                        "title": "Ventilation Cleaning",
                        "description": "Professional ventilation cleaning service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 11520
                    },
                    {
                        "id": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                        "title": "Thermostat Setup",
                        "description": "Professional thermostat setup service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 13680
                    }
                ]
            },
            {
                "id": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                "type": "Pest Control",
                "createdAt": "2026-07-18T09:44:38.072Z",
                "updatedAt": "2026-07-18T09:44:38.072Z",
                "services": [
                    {
                        "id": "75ab1a01-dbd3-42ff-a4da-e1c66a68bc85",
                        "title": "General Pest Control",
                        "description": "Professional general pest control service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 4800
                    },
                    {
                        "id": "446e231f-c45a-405f-b035-2d4f2a4b8813",
                        "title": "Termite Treatment",
                        "description": "Professional termite treatment service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 6240
                    },
                    {
                        "id": "b9a2c136-38e9-4310-9a53-45216053c75c",
                        "title": "Rodent Control",
                        "description": "Professional rodent control service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 7680
                    },
                    {
                        "id": "bf31a8a7-ec11-4213-a359-fff3084e4093",
                        "title": "Bed Bug Removal",
                        "description": "Professional bed bug removal service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 9120
                    },
                    {
                        "id": "3b9552f1-b85b-410d-8b77-24a532b105c3",
                        "title": "General Pest Control",
                        "description": "Professional general pest control service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 5400
                    },
                    {
                        "id": "a4d5150a-c08c-460d-b43b-eddf0b14a5ac",
                        "title": "Termite Treatment",
                        "description": "Professional termite treatment service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 7020
                    },
                    {
                        "id": "8082cdd7-cfff-4d08-8570-0896c09f223b",
                        "title": "Rodent Control",
                        "description": "Professional rodent control service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 8640
                    },
                    {
                        "id": "c26d061f-ff5e-4a29-a2fd-fc2fafaf6526",
                        "title": "Bed Bug Removal",
                        "description": "Professional bed bug removal service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 10260
                    }
                ]
            },
            {
                "id": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                "type": "Security System Installation",
                "createdAt": "2026-07-18T09:44:38.360Z",
                "updatedAt": "2026-07-18T09:44:38.360Z",
                "services": [
                    {
                        "id": "892e5d25-9c12-45f4-b340-1f4dc0785979",
                        "title": "CCTV Installation",
                        "description": "Professional cctv installation service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 7800
                    },
                    {
                        "id": "bd901160-8b25-4932-bfc4-ab0da9aee4fe",
                        "title": "Alarm System Setup",
                        "description": "Professional alarm system setup service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 10140
                    },
                    {
                        "id": "4fc9f8c6-7366-4513-996c-e25d46436e68",
                        "title": "Access Control Systems",
                        "description": "Professional access control systems service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 12480
                    },
                    {
                        "id": "1df5f787-444f-4db3-b579-33a8b186dcbe",
                        "title": "Smart Home Security",
                        "description": "Professional smart home security service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 14820
                    },
                    {
                        "id": "e751c80c-750e-4c7c-977a-96437abef84c",
                        "title": "CCTV Installation",
                        "description": "Professional cctv installation service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 8400
                    },
                    {
                        "id": "7835a995-9c81-406d-b9d8-36d0dd8b14bf",
                        "title": "Alarm System Setup",
                        "description": "Professional alarm system setup service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 10920
                    },
                    {
                        "id": "3f6c76e1-55fe-4af6-8d9f-72bfa4dc067d",
                        "title": "Access Control Systems",
                        "description": "Professional access control systems service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 13440
                    },
                    {
                        "id": "4b6dde25-ab37-4158-9397-19f161c850b4",
                        "title": "Smart Home Security",
                        "description": "Professional smart home security service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 15960
                    }
                ]
            },
            {
                "id": "e127e5d6-c370-404f-9869-ac6add317c89",
                "type": "Interior Design",
                "createdAt": "2026-07-18T09:44:38.686Z",
                "updatedAt": "2026-07-18T09:44:38.686Z",
                "services": [
                    {
                        "id": "48bde74d-dc07-4ae5-b69c-3c6ffc0b0a28",
                        "title": "Space Planning & Design",
                        "description": "Professional space planning & design service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 9000
                    },
                    {
                        "id": "41030876-6e79-46ac-83c6-ada6b5e32717",
                        "title": "Color Consultation",
                        "description": "Professional color consultation service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 11700
                    },
                    {
                        "id": "7699ad88-c7b3-4723-81f6-ba546b15919a",
                        "title": "Furniture Selection",
                        "description": "Professional furniture selection service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 14400
                    },
                    {
                        "id": "909ee1b6-5cf4-4698-b52e-0fea8893ccea",
                        "title": "Lighting Design",
                        "description": "Professional lighting design service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 17100
                    },
                    {
                        "id": "6a2b65bb-77ff-4015-aa25-b87157c13b3a",
                        "title": "Space Planning & Design",
                        "description": "Professional space planning & design service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 7800
                    },
                    {
                        "id": "208e7bac-eb68-43c8-a2f9-74b3c71e9d5f",
                        "title": "Color Consultation",
                        "description": "Professional color consultation service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 10140
                    },
                    {
                        "id": "c8ad9751-2db8-4655-add1-36dfd02633c8",
                        "title": "Furniture Selection",
                        "description": "Professional furniture selection service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 12480
                    },
                    {
                        "id": "30ed8ba8-32df-41e0-82d7-9a4e9f0ee0aa",
                        "title": "Lighting Design",
                        "description": "Professional lighting design service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 14820
                    }
                ]
            },
            {
                "id": "270d2f54-1751-42bc-9eaf-920586da5741",
                "type": "Home Maintenance",
                "createdAt": "2026-07-18T09:44:39.165Z",
                "updatedAt": "2026-07-18T09:44:39.165Z",
                "services": [
                    {
                        "id": "4e9b6b0d-4f97-41c3-9e5e-18b9352731cf",
                        "title": "General Home Repair",
                        "description": "Professional general home repair service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 4800
                    },
                    {
                        "id": "555bdaa1-7b92-4014-a4e0-7d87dfdada6c",
                        "title": "Handyman Service",
                        "description": "Professional handyman service service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 6240
                    },
                    {
                        "id": "687a6680-5b61-4573-b0a5-03e3e67871aa",
                        "title": "Furniture Assembly",
                        "description": "Professional furniture assembly service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 7680
                    },
                    {
                        "id": "11dc8087-550a-47c1-9796-6fac72d1624d",
                        "title": "Home Maintenance Check",
                        "description": "Professional home maintenance check service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 9120
                    },
                    {
                        "id": "5ac58740-7e55-44c8-8aab-329184cb797c",
                        "title": "General Home Repair",
                        "description": "Professional general home repair service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 6000
                    },
                    {
                        "id": "292546d1-a5b2-4245-91c7-1a8f43cf430f",
                        "title": "Handyman Service",
                        "description": "Professional handyman service service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 7800
                    },
                    {
                        "id": "9861b311-951d-461a-909e-0c8b283b5f51",
                        "title": "Furniture Assembly",
                        "description": "Professional furniture assembly service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 9600
                    },
                    {
                        "id": "1bd6c86c-eb57-43da-a05c-f0ba0d778bbe",
                        "title": "Home Maintenance Check",
                        "description": "Professional home maintenance check service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 11400
                    }
                ]
            },
            {
                "id": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                "type": "Furniture Repair",
                "createdAt": "2026-07-18T09:44:39.449Z",
                "updatedAt": "2026-07-18T09:44:39.449Z",
                "services": [
                    {
                        "id": "9c2aa33c-acbc-4b04-8d69-46ca838cc3fa",
                        "title": "Wood Refinishing",
                        "description": "Professional wood refinishing service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 5400
                    },
                    {
                        "id": "1b819d8d-0e8a-43ff-a121-4dc8ba014fb9",
                        "title": "Upholstery Repair",
                        "description": "Professional upholstery repair service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 7020
                    },
                    {
                        "id": "0b1f9c42-d7ac-451e-9623-726197b4b6f9",
                        "title": "Furniture Restoration",
                        "description": "Professional furniture restoration service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 8640
                    },
                    {
                        "id": "e5ee935f-7760-4706-a4da-2ab655f9ae7e",
                        "title": "Furniture Assembly & Repair",
                        "description": "Professional furniture assembly & repair service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 10260
                    },
                    {
                        "id": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                        "title": "Wood Refinishing",
                        "description": "Professional wood refinishing service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 4800
                    },
                    {
                        "id": "0a4c4da1-2eb6-4d32-9c80-73253fd429d6",
                        "title": "Upholstery Repair",
                        "description": "Professional upholstery repair service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 6240
                    },
                    {
                        "id": "9768cdfa-14d7-40a2-956a-ea4557700791",
                        "title": "Furniture Restoration",
                        "description": "Professional furniture restoration service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 7680
                    },
                    {
                        "id": "43d790fc-4b79-40e0-9b9a-daa861a731b1",
                        "title": "Furniture Assembly & Repair",
                        "description": "Professional furniture assembly & repair service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 9120
                    }
                ]
            },
            {
                "id": "fee77a1c-2e2a-4b5f-99e3-221c2d6f9a28",
                "type": "Painting new version",
                "createdAt": "2026-07-18T10:48:22.025Z",
                "updatedAt": "2026-07-18T10:48:22.025Z",
                "services": []
            },
            {
                "id": "bcd5de9e-ec7b-4350-93cc-2aab7647cc0b",
                "type": "Painting new version 2",
                "createdAt": "2026-07-18T10:48:38.586Z",
                "updatedAt": "2026-07-18T10:48:38.586Z",
                "services": []
            },
            {
                "id": "81443110-38bd-435e-9a5b-405a5f0924a5",
                "type": "Draining",
                "createdAt": "2026-07-19T07:12:55.188Z",
                "updatedAt": "2026-07-19T07:12:55.188Z",
                "services": []
            },
            {
                "id": "a62829f8-5871-4cc0-8200-ffae13814cdf",
                "type": "Draining 2",
                "createdAt": "2026-08-04T15:48:11.466Z",
                "updatedAt": "2026-08-04T15:48:11.466Z",
                "services": []
            }
        ]
    }
}

///////////////////// Get all users  23. GET localhost:5000/api/admin/users/
{
    "success": true,
    "statusCode": 201,
    "message": "All Catergory Fetched successfully",
    "data": {
        "allCategory": [
            {
                "id": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                "type": "Electrical",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                        "title": "House Wiring",
                        "description": "Complete electrical wiring for new homes, renovations, or room extensions.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 4500
                    },
                    {
                        "id": "6d1b2e3f-8f4c-4a1d-b8d5-6e7a9c3b2f06",
                        "title": "Fan Installation",
                        "description": "Install or replace ceiling fans with proper electrical connections and safety checks.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 700
                    },
                    {
                        "id": "8e2f3d4a-9c5e-4d7f-a2b1-7f6d5c4b3a07",
                        "title": "Switch & Socket Replacement",
                        "description": "Replace damaged switches, sockets, and electrical outlets with new components.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 500
                    },
                    {
                        "id": "3f1a2b4c-7d6e-45a1-b3c9-8e5f2d1c4b08",
                        "title": "Circuit Breaker Repair",
                        "description": "Inspect and repair faulty circuit breakers and electrical distribution panels.",
                        "categoryId": "43d0502e-eb19-4d3e-bbea-c1bb756dea89",
                        "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                        "price": 2200
                    }
                ]
            },
            {
                "id": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                "type": "Painting",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "be3d4c5f-6a7b-48e9-9b0c-d3e4f5a6b013",
                        "title": "Interior Wall Painting",
                        "description": "Professional painting for interior walls using high-quality, long-lasting paints.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 5000
                    },
                    {
                        "id": "cf4e5d6a-7b8c-49fa-a1d2-e4f5a6b7c014",
                        "title": "Wall Crack Repair & Painting",
                        "description": "Repair wall cracks, prepare surfaces, and apply fresh coats of paint for a flawless finish.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 2200
                    },
                    {
                        "id": "d05f6e7b-8c9d-4afb-b2e3-f5a6b7c8d015",
                        "title": "Exterior House Painting",
                        "description": "Weather-resistant exterior painting service for residential buildings.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 8500
                    },
                    {
                        "id": "e16a7f8c-9d0e-4bfc-c3f4-a6b7c8d9e016",
                        "title": "Door & Window Painting",
                        "description": "Paint wooden or metal doors and windows with smooth finishing and durable coating.",
                        "categoryId": "a4afc317-14e9-49f7-aad0-b024ed32e170",
                        "technicianId": "25bc262f-d442-44b7-adba-14fc69b8148d",
                        "price": 1500
                    }
                ]
            },
            {
                "id": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                "type": "Cleaning",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "9a7c6d5e-3b2f-4e8a-91d4-9b6c5d4e3f09",
                        "title": "Home Deep Cleaning",
                        "description": "Comprehensive cleaning service covering bedrooms, living rooms, kitchens, and bathrooms",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 2500
                    },
                    {
                        "id": "0c1d2e3f-4a5b-46c7-9d8e-b1c2d3e4f011",
                        "title": "Bathroom Sanitization",
                        "description": "Deep sanitize toilets, sinks, showers, tiles, and bathroom accessories.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 1000
                    },
                    {
                        "id": "5b4d3e2f-1a9c-4b7d-8f2e-a7c6d5b4e010",
                        "title": "Kitchen Cleaning",
                        "description": "Professional cleaning of kitchen appliances, countertops, cabinets, and floors.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 900
                    },
                    {
                        "id": "ad2c3b4e-5f6a-47d8-8c9b-c2d3e4f5a012",
                        "title": "Sofa & Carpet Cleaning",
                        "description": "Steam clean sofas, carpets, and upholstery to remove stains and allergens.",
                        "categoryId": "ae9f2742-604f-4fbe-b75d-9d4e498ce21d",
                        "technicianId": "166bf15d-ea54-4fb3-b5f6-7dfccd00cb92",
                        "price": 1800
                    }
                ]
            },
            {
                "id": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                "type": "Plumbing",
                "createdAt": "2026-07-14T03:10:07.770Z",
                "updatedAt": "2026-07-14T03:10:07.770Z",
                "services": [
                    {
                        "id": "1fd46b7e-72c0-4f77-8b3f-2f0a1f3f8d02",
                        "title": "Drain Cleaning",
                        "description": "Clear clogged drains and restore smooth water flow using professional equipment.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 800
                    },
                    {
                        "id": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                        "title": "Pipe Leak Repair",
                        "description": "Detect and repair leaking water pipes in kitchens, bathrooms, and outdoor plumbing systems.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 1200
                    },
                    {
                        "id": "4a8e87c3-56d8-4d74-b2d4-3c7f1c9a5d03",
                        "title": "Bathroom Fixture Installation",
                        "description": "Install sinks, faucets, showers, and other bathroom plumbing fixtures safely and efficiently.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 1800
                    },
                    {
                        "id": "95b0d2a1-4d8e-49d8-93d6-4b9f0e8c6e04",
                        "title": "Water Tank Installation",
                        "description": "Install and connect residential water storage tanks with proper plumbing support.",
                        "categoryId": "e4db7a61-01a3-438f-8e3e-0783e68b3ab0",
                        "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                        "price": 3500
                    }
                ]
            },
            {
                "id": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                "type": "Carpentry",
                "createdAt": "2026-07-18T09:44:37.206Z",
                "updatedAt": "2026-07-18T09:44:37.206Z",
                "services": [
                    {
                        "id": "70e03f49-7cda-4d0d-96b3-e69bf9d634b2",
                        "title": "Custom Furniture Making",
                        "description": "Professional custom furniture making service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 5400
                    },
                    {
                        "id": "edee2431-eab5-4e9e-8a44-c78766812b85",
                        "title": "Cabinet Installation",
                        "description": "Professional cabinet installation service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 7020
                    },
                    {
                        "id": "b3891317-ddd1-4158-b30b-43fe467fc825",
                        "title": "Woodworking & Repair",
                        "description": "Professional woodworking & repair service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 8640
                    },
                    {
                        "id": "1f9becca-bf24-40e4-880e-3711f89d6449",
                        "title": "Door & Window Installation",
                        "description": "Professional door & window installation service by Md. Kamal Uddin. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                        "price": 10260
                    },
                    {
                        "id": "8b46a3dd-1af1-4be4-816b-df93fd809d7f",
                        "title": "Custom Furniture Making",
                        "description": "Professional custom furniture making service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 6000
                    },
                    {
                        "id": "bbd9ec5d-b451-4d79-8379-4dc1c61ddebf",
                        "title": "Cabinet Installation",
                        "description": "Professional cabinet installation service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 7800
                    },
                    {
                        "id": "4d024d30-8e06-4a23-9402-c1ee921c31a0",
                        "title": "Woodworking & Repair",
                        "description": "Professional woodworking & repair service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 9600
                    },
                    {
                        "id": "86ef8ef7-56f5-4808-b5b8-9306b059f9ff",
                        "title": "Door & Window Installation",
                        "description": "Professional door & window installation service by Abdur Rahim. Quality guaranteed!",
                        "categoryId": "9029beef-d4aa-4ed7-a20e-cac51a373a1d",
                        "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                        "price": 11400
                    }
                ]
            },
            {
                "id": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                "type": "Gardening",
                "createdAt": "2026-07-18T09:44:37.496Z",
                "updatedAt": "2026-07-18T09:44:37.496Z",
                "services": [
                    {
                        "id": "47e76cdf-31ba-4840-82b5-505231b72b9e",
                        "title": "Garden Design & Landscaping",
                        "description": "Professional garden design & landscaping service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 4200
                    },
                    {
                        "id": "410e5edf-7bc2-4545-97b1-2bf691d1d9c1",
                        "title": "Lawn Maintenance",
                        "description": "Professional lawn maintenance service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 5460
                    },
                    {
                        "id": "d148e44b-fca8-4a84-872a-059b4e37c527",
                        "title": "Tree Trimming & Pruning",
                        "description": "Professional tree trimming & pruning service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 6720
                    },
                    {
                        "id": "bb9fb7b8-713d-486f-8b4e-16578deac282",
                        "title": "Irrigation System Installation",
                        "description": "Professional irrigation system installation service by Md. Shafiqul Islam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                        "price": 7980
                    },
                    {
                        "id": "0a9ff217-0c60-4d30-b1e5-560c1637deaf",
                        "title": "Garden Design & Landscaping",
                        "description": "Professional garden design & landscaping service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 3600
                    },
                    {
                        "id": "9bd14707-2bac-4d06-8e5d-46b6950d5c34",
                        "title": "Lawn Maintenance",
                        "description": "Professional lawn maintenance service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 4680
                    },
                    {
                        "id": "1dcdc001-46a9-4e52-a6ce-e99c8d642762",
                        "title": "Tree Trimming & Pruning",
                        "description": "Professional tree trimming & pruning service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 5760
                    },
                    {
                        "id": "e45a287e-56a6-478a-aa99-4e45de8e440a",
                        "title": "Irrigation System Installation",
                        "description": "Professional irrigation system installation service by Abul Kalam. Quality guaranteed!",
                        "categoryId": "51244f3f-eb72-4e39-828c-edf4f6b957eb",
                        "technicianId": "64527e7a-d285-4b5a-b02b-cd697cd77cc3",
                        "price": 6840
                    }
                ]
            },
            {
                "id": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                "type": "HVAC",
                "createdAt": "2026-07-18T09:44:37.776Z",
                "updatedAt": "2026-07-18T09:44:37.776Z",
                "services": [
                    {
                        "id": "627a7b8a-32f3-4313-abb7-bf09b6850124",
                        "title": "AC Installation & Repair",
                        "description": "Professional ac installation & repair service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 6600
                    },
                    {
                        "id": "46055b91-52ff-4912-bf0d-425c10f4bbad",
                        "title": "Heating System Repair",
                        "description": "Professional heating system repair service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 8580
                    },
                    {
                        "id": "fb1af735-2e34-488b-aac4-fe61be072fca",
                        "title": "Ventilation Cleaning",
                        "description": "Professional ventilation cleaning service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 10560
                    },
                    {
                        "id": "d8b67dde-c1e0-46fb-8b90-5e6931485d4f",
                        "title": "Thermostat Setup",
                        "description": "Professional thermostat setup service by Md. Jalal Uddin. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                        "price": 12540
                    },
                    {
                        "id": "4a2bdec0-027f-4f90-aeff-731c7b602a9e",
                        "title": "AC Installation & Repair",
                        "description": "Professional ac installation & repair service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 7200
                    },
                    {
                        "id": "cea1b644-2eb2-40ef-ad5b-44de38e204f6",
                        "title": "Heating System Repair",
                        "description": "Professional heating system repair service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 9360
                    },
                    {
                        "id": "60ac9e11-03c5-47c2-b0d8-8d24de6953c6",
                        "title": "Ventilation Cleaning",
                        "description": "Professional ventilation cleaning service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 11520
                    },
                    {
                        "id": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                        "title": "Thermostat Setup",
                        "description": "Professional thermostat setup service by Abdul Mannan. Quality guaranteed!",
                        "categoryId": "5f124220-f8d3-4e0a-bf2b-fd8bf8175a0c",
                        "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                        "price": 13680
                    }
                ]
            },
            {
                "id": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                "type": "Pest Control",
                "createdAt": "2026-07-18T09:44:38.072Z",
                "updatedAt": "2026-07-18T09:44:38.072Z",
                "services": [
                    {
                        "id": "75ab1a01-dbd3-42ff-a4da-e1c66a68bc85",
                        "title": "General Pest Control",
                        "description": "Professional general pest control service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 4800
                    },
                    {
                        "id": "446e231f-c45a-405f-b035-2d4f2a4b8813",
                        "title": "Termite Treatment",
                        "description": "Professional termite treatment service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 6240
                    },
                    {
                        "id": "b9a2c136-38e9-4310-9a53-45216053c75c",
                        "title": "Rodent Control",
                        "description": "Professional rodent control service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 7680
                    },
                    {
                        "id": "bf31a8a7-ec11-4213-a359-fff3084e4093",
                        "title": "Bed Bug Removal",
                        "description": "Professional bed bug removal service by Md. Abdur Razzak. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                        "price": 9120
                    },
                    {
                        "id": "3b9552f1-b85b-410d-8b77-24a532b105c3",
                        "title": "General Pest Control",
                        "description": "Professional general pest control service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 5400
                    },
                    {
                        "id": "a4d5150a-c08c-460d-b43b-eddf0b14a5ac",
                        "title": "Termite Treatment",
                        "description": "Professional termite treatment service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 7020
                    },
                    {
                        "id": "8082cdd7-cfff-4d08-8570-0896c09f223b",
                        "title": "Rodent Control",
                        "description": "Professional rodent control service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 8640
                    },
                    {
                        "id": "c26d061f-ff5e-4a29-a2fd-fc2fafaf6526",
                        "title": "Bed Bug Removal",
                        "description": "Professional bed bug removal service by Md. Anwar Hossain. Quality guaranteed!",
                        "categoryId": "c0abe9c7-b66c-4d3b-9015-3f7659a69496",
                        "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                        "price": 10260
                    }
                ]
            },
            {
                "id": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                "type": "Security System Installation",
                "createdAt": "2026-07-18T09:44:38.360Z",
                "updatedAt": "2026-07-18T09:44:38.360Z",
                "services": [
                    {
                        "id": "892e5d25-9c12-45f4-b340-1f4dc0785979",
                        "title": "CCTV Installation",
                        "description": "Professional cctv installation service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 7800
                    },
                    {
                        "id": "bd901160-8b25-4932-bfc4-ab0da9aee4fe",
                        "title": "Alarm System Setup",
                        "description": "Professional alarm system setup service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 10140
                    },
                    {
                        "id": "4fc9f8c6-7366-4513-996c-e25d46436e68",
                        "title": "Access Control Systems",
                        "description": "Professional access control systems service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 12480
                    },
                    {
                        "id": "1df5f787-444f-4db3-b579-33a8b186dcbe",
                        "title": "Smart Home Security",
                        "description": "Professional smart home security service by Md. Shahidul Islam. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                        "price": 14820
                    },
                    {
                        "id": "e751c80c-750e-4c7c-977a-96437abef84c",
                        "title": "CCTV Installation",
                        "description": "Professional cctv installation service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 8400
                    },
                    {
                        "id": "7835a995-9c81-406d-b9d8-36d0dd8b14bf",
                        "title": "Alarm System Setup",
                        "description": "Professional alarm system setup service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 10920
                    },
                    {
                        "id": "3f6c76e1-55fe-4af6-8d9f-72bfa4dc067d",
                        "title": "Access Control Systems",
                        "description": "Professional access control systems service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 13440
                    },
                    {
                        "id": "4b6dde25-ab37-4158-9397-19f161c850b4",
                        "title": "Smart Home Security",
                        "description": "Professional smart home security service by Md. Mizanur Rahman. Quality guaranteed!",
                        "categoryId": "9ea88ad9-baa4-4017-8645-458bae98cc2a",
                        "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                        "price": 15960
                    }
                ]
            },
            {
                "id": "e127e5d6-c370-404f-9869-ac6add317c89",
                "type": "Interior Design",
                "createdAt": "2026-07-18T09:44:38.686Z",
                "updatedAt": "2026-07-18T09:44:38.686Z",
                "services": [
                    {
                        "id": "48bde74d-dc07-4ae5-b69c-3c6ffc0b0a28",
                        "title": "Space Planning & Design",
                        "description": "Professional space planning & design service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 9000
                    },
                    {
                        "id": "41030876-6e79-46ac-83c6-ada6b5e32717",
                        "title": "Color Consultation",
                        "description": "Professional color consultation service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 11700
                    },
                    {
                        "id": "7699ad88-c7b3-4723-81f6-ba546b15919a",
                        "title": "Furniture Selection",
                        "description": "Professional furniture selection service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 14400
                    },
                    {
                        "id": "909ee1b6-5cf4-4698-b52e-0fea8893ccea",
                        "title": "Lighting Design",
                        "description": "Professional lighting design service by Sadia Rahman. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                        "price": 17100
                    },
                    {
                        "id": "6a2b65bb-77ff-4015-aa25-b87157c13b3a",
                        "title": "Space Planning & Design",
                        "description": "Professional space planning & design service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 7800
                    },
                    {
                        "id": "208e7bac-eb68-43c8-a2f9-74b3c71e9d5f",
                        "title": "Color Consultation",
                        "description": "Professional color consultation service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 10140
                    },
                    {
                        "id": "c8ad9751-2db8-4655-add1-36dfd02633c8",
                        "title": "Furniture Selection",
                        "description": "Professional furniture selection service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 12480
                    },
                    {
                        "id": "30ed8ba8-32df-41e0-82d7-9a4e9f0ee0aa",
                        "title": "Lighting Design",
                        "description": "Professional lighting design service by Nadia Akhter. Quality guaranteed!",
                        "categoryId": "e127e5d6-c370-404f-9869-ac6add317c89",
                        "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                        "price": 14820
                    }
                ]
            },
            {
                "id": "270d2f54-1751-42bc-9eaf-920586da5741",
                "type": "Home Maintenance",
                "createdAt": "2026-07-18T09:44:39.165Z",
                "updatedAt": "2026-07-18T09:44:39.165Z",
                "services": [
                    {
                        "id": "4e9b6b0d-4f97-41c3-9e5e-18b9352731cf",
                        "title": "General Home Repair",
                        "description": "Professional general home repair service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 4800
                    },
                    {
                        "id": "555bdaa1-7b92-4014-a4e0-7d87dfdada6c",
                        "title": "Handyman Service",
                        "description": "Professional handyman service service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 6240
                    },
                    {
                        "id": "687a6680-5b61-4573-b0a5-03e3e67871aa",
                        "title": "Furniture Assembly",
                        "description": "Professional furniture assembly service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 7680
                    },
                    {
                        "id": "11dc8087-550a-47c1-9796-6fac72d1624d",
                        "title": "Home Maintenance Check",
                        "description": "Professional home maintenance check service by Md. Jahangir Alam. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "06879dfc-fb82-4a0d-b82b-9684e98b363a",
                        "price": 9120
                    },
                    {
                        "id": "5ac58740-7e55-44c8-8aab-329184cb797c",
                        "title": "General Home Repair",
                        "description": "Professional general home repair service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 6000
                    },
                    {
                        "id": "292546d1-a5b2-4245-91c7-1a8f43cf430f",
                        "title": "Handyman Service",
                        "description": "Professional handyman service service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 7800
                    },
                    {
                        "id": "9861b311-951d-461a-909e-0c8b283b5f51",
                        "title": "Furniture Assembly",
                        "description": "Professional furniture assembly service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 9600
                    },
                    {
                        "id": "1bd6c86c-eb57-43da-a05c-f0ba0d778bbe",
                        "title": "Home Maintenance Check",
                        "description": "Professional home maintenance check service by Md. Motaleb Hossain. Quality guaranteed!",
                        "categoryId": "270d2f54-1751-42bc-9eaf-920586da5741",
                        "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                        "price": 11400
                    }
                ]
            },
            {
                "id": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                "type": "Furniture Repair",
                "createdAt": "2026-07-18T09:44:39.449Z",
                "updatedAt": "2026-07-18T09:44:39.449Z",
                "services": [
                    {
                        "id": "9c2aa33c-acbc-4b04-8d69-46ca838cc3fa",
                        "title": "Wood Refinishing",
                        "description": "Professional wood refinishing service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 5400
                    },
                    {
                        "id": "1b819d8d-0e8a-43ff-a121-4dc8ba014fb9",
                        "title": "Upholstery Repair",
                        "description": "Professional upholstery repair service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 7020
                    },
                    {
                        "id": "0b1f9c42-d7ac-451e-9623-726197b4b6f9",
                        "title": "Furniture Restoration",
                        "description": "Professional furniture restoration service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 8640
                    },
                    {
                        "id": "e5ee935f-7760-4706-a4da-2ab655f9ae7e",
                        "title": "Furniture Assembly & Repair",
                        "description": "Professional furniture assembly & repair service by Md. Rashidul Islam. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                        "price": 10260
                    },
                    {
                        "id": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                        "title": "Wood Refinishing",
                        "description": "Professional wood refinishing service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 4800
                    },
                    {
                        "id": "0a4c4da1-2eb6-4d32-9c80-73253fd429d6",
                        "title": "Upholstery Repair",
                        "description": "Professional upholstery repair service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 6240
                    },
                    {
                        "id": "9768cdfa-14d7-40a2-956a-ea4557700791",
                        "title": "Furniture Restoration",
                        "description": "Professional furniture restoration service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 7680
                    },
                    {
                        "id": "43d790fc-4b79-40e0-9b9a-daa861a731b1",
                        "title": "Furniture Assembly & Repair",
                        "description": "Professional furniture assembly & repair service by Md. Abdul Latif. Quality guaranteed!",
                        "categoryId": "f4d94bfd-b0e5-4f95-b9fe-5c6abc1a47c5",
                        "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                        "price": 9120
                    }
                ]
            },
            {
                "id": "fee77a1c-2e2a-4b5f-99e3-221c2d6f9a28",
                "type": "Painting new version",
                "createdAt": "2026-07-18T10:48:22.025Z",
                "updatedAt": "2026-07-18T10:48:22.025Z",
                "services": []
            },
            {
                "id": "bcd5de9e-ec7b-4350-93cc-2aab7647cc0b",
                "type": "Painting new version 2",
                "createdAt": "2026-07-18T10:48:38.586Z",
                "updatedAt": "2026-07-18T10:48:38.586Z",
                "services": []
            },
            {
                "id": "81443110-38bd-435e-9a5b-405a5f0924a5",
                "type": "Draining",
                "createdAt": "2026-07-19T07:12:55.188Z",
                "updatedAt": "2026-07-19T07:12:55.188Z",
                "services": []
            },
            {
                "id": "a62829f8-5871-4cc0-8200-ffae13814cdf",
                "type": "Draining 2",
                "createdAt": "2026-08-04T15:48:11.466Z",
                "updatedAt": "2026-08-04T15:48:11.466Z",
                "services": []
            }
        ]
    }
}

/////////////////////////  Get all Bookings 24. GET localhost:5000/api/admin/bookings
{
    "success": true,
    "statusCode": 201,
    "message": "All Bookings Fetched successfully",
    "data": {
        "allBookings": [
            {
                "id": "52024e1a-d01b-4d23-8998-62aaadd553e1",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-17T18:35:08.617Z",
                "endAt": "2026-07-19T00:00:00.000Z",
                "startAt": "2026-07-18T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "abb29b7e-734c-455e-89ba-e2d5866fd3cc",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "CANCELLED",
                "bookingDate": "2026-07-17T18:33:54.073Z",
                "endAt": "2026-07-18T16:00:00.000Z",
                "startAt": "2026-07-18T14:00:00.000Z",
                "cancelAt": "2026-07-17T19:23:20.662Z",
                "cancelReason": null
            },
            {
                "id": "bda8e2ab-b458-4b31-ae38-cc4996e13306",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-17T18:34:48.192Z",
                "endAt": "2026-07-18T22:00:00.000Z",
                "startAt": "2026-07-18T20:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "b02798f2-3201-4396-b2b6-0a2d65c7023c",
                "customerId": "01d080a4-57f1-4fe0-90e8-b6a61838ba16",
                "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                "serviceId": "208e7bac-eb68-43c8-a2f9-74b3c71e9d5f",
                "price": 10140,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-25T11:36:00.000Z",
                "endAt": "2026-07-25T14:36:00.000Z",
                "startAt": "2026-07-25T11:36:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "53410c57-f9b3-46ca-9f65-2684605513b5",
                "customerId": "01d080a4-57f1-4fe0-90e8-b6a61838ba16",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                "price": 13680,
                "status": "REQUESTED",
                "bookingDate": "2026-07-23T06:24:00.000Z",
                "endAt": "2026-07-23T07:24:00.000Z",
                "startAt": "2026-07-23T06:24:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "7f7c6b6f-4a52-456d-8a03-a7fd7762d712",
                "customerId": "01d080a4-57f1-4fe0-90e8-b6a61838ba16",
                "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                "serviceId": "48bde74d-dc07-4ae5-b69c-3c6ffc0b0a28",
                "price": 9000,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-06T03:12:00.000Z",
                "endAt": "2026-08-06T05:12:00.000Z",
                "startAt": "2026-08-06T03:12:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "f07a96ae-c3c2-41a4-9cf0-4ac818c91245",
                "customerId": "01d080a4-57f1-4fe0-90e8-b6a61838ba16",
                "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                "serviceId": "446e231f-c45a-405f-b035-2d4f2a4b8813",
                "price": 6240,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-14T03:41:00.000Z",
                "endAt": "2026-08-14T04:41:00.000Z",
                "startAt": "2026-08-14T03:41:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "fe14679a-2da6-4be9-93f7-3bf6c97f77ce",
                "customerId": "c1b09fd9-b77d-4cdc-b9b1-cd058ec98bb2",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "d148e44b-fca8-4a84-872a-059b4e37c527",
                "price": 6720,
                "status": "CANCELLED",
                "bookingDate": "2026-08-10T06:01:00.000Z",
                "endAt": "2026-08-10T08:01:00.000Z",
                "startAt": "2026-08-10T06:01:00.000Z",
                "cancelAt": "2026-08-09T06:01:00.000Z",
                "cancelReason": "Customer changed mind"
            },
            {
                "id": "b7126b60-1521-48e5-a35f-301f92dd424e",
                "customerId": "c1b09fd9-b77d-4cdc-b9b1-cd058ec98bb2",
                "technicianId": "baf04746-daf2-4785-952a-ece97662bdca",
                "serviceId": "c8ad9751-2db8-4655-add1-36dfd02633c8",
                "price": 12480,
                "status": "REQUESTED",
                "bookingDate": "2026-07-20T08:44:00.000Z",
                "endAt": "2026-07-20T11:44:00.000Z",
                "startAt": "2026-07-20T08:44:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "795d8583-da91-4a6c-a70d-44ef32fd1d77",
                "customerId": "c1b09fd9-b77d-4cdc-b9b1-cd058ec98bb2",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "bb9fb7b8-713d-486f-8b4e-16578deac282",
                "price": 7980,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-28T11:21:00.000Z",
                "endAt": "2026-07-28T12:21:00.000Z",
                "startAt": "2026-07-28T11:21:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "529be360-0935-4139-81f7-10f9a291ec10",
                "customerId": "c1b09fd9-b77d-4cdc-b9b1-cd058ec98bb2",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "410e5edf-7bc2-4545-97b1-2bf691d1d9c1",
                "price": 5460,
                "status": "PAID",
                "bookingDate": "2026-07-31T05:53:00.000Z",
                "endAt": "2026-07-31T07:53:00.000Z",
                "startAt": "2026-07-31T05:53:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "09c4cea5-a996-4544-b03d-d359c400ac73",
                "customerId": "60ce9124-21e3-418f-b01e-ead562843735",
                "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                "serviceId": "4b6dde25-ab37-4158-9397-19f161c850b4",
                "price": 15960,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-15T03:49:00.000Z",
                "endAt": "2026-08-15T06:49:00.000Z",
                "startAt": "2026-08-15T03:49:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "2488d008-3500-4b96-b827-746a28891efc",
                "customerId": "60ce9124-21e3-418f-b01e-ead562843735",
                "technicianId": "911a4c82-e428-49f9-bc94-7b09e6f0b292",
                "serviceId": "70e03f49-7cda-4d0d-96b3-e69bf9d634b2",
                "price": 5400,
                "status": "COMPLETED",
                "bookingDate": "2026-08-11T02:42:00.000Z",
                "endAt": "2026-08-11T03:42:00.000Z",
                "startAt": "2026-08-11T02:42:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "6bc35774-1b74-4673-9fdf-6738b6a46d23",
                "customerId": "60ce9124-21e3-418f-b01e-ead562843735",
                "technicianId": "1b57bd3a-6593-4c02-87c2-24244e9c1642",
                "serviceId": "1df5f787-444f-4db3-b579-33a8b186dcbe",
                "price": 14820,
                "status": "COMPLETED",
                "bookingDate": "2026-07-31T05:21:00.000Z",
                "endAt": "2026-07-31T07:21:00.000Z",
                "startAt": "2026-07-31T05:21:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "922d9dae-07a1-4d91-918a-b89ea0e6bee5",
                "customerId": "60ce9124-21e3-418f-b01e-ead562843735",
                "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                "serviceId": "e751c80c-750e-4c7c-977a-96437abef84c",
                "price": 8400,
                "status": "COMPLETED",
                "bookingDate": "2026-07-27T03:06:00.000Z",
                "endAt": "2026-07-27T04:06:00.000Z",
                "startAt": "2026-07-27T03:06:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "20cc94d0-ae5e-4667-b4ff-37f87f33535b",
                "customerId": "2cfbcfd2-4317-442c-b46c-cea4a3a7db6a",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "9768cdfa-14d7-40a2-956a-ea4557700791",
                "price": 7680,
                "status": "COMPLETED",
                "bookingDate": "2026-07-30T02:51:00.000Z",
                "endAt": "2026-07-30T05:51:00.000Z",
                "startAt": "2026-07-30T02:51:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "1d113722-6d97-4b27-a91f-274fe35d18a4",
                "customerId": "2cfbcfd2-4317-442c-b46c-cea4a3a7db6a",
                "technicianId": "8b02c7b0-d074-499c-abbf-211165c91c6b",
                "serviceId": "9861b311-951d-461a-909e-0c8b283b5f51",
                "price": 9600,
                "status": "COMPLETED",
                "bookingDate": "2026-07-26T10:28:00.000Z",
                "endAt": "2026-07-26T13:28:00.000Z",
                "startAt": "2026-07-26T10:28:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "0050c4a2-ebf0-4038-b7ea-71e46ab0d00d",
                "customerId": "2cfbcfd2-4317-442c-b46c-cea4a3a7db6a",
                "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                "serviceId": "75ab1a01-dbd3-42ff-a4da-e1c66a68bc85",
                "price": 4800,
                "status": "CANCELLED",
                "bookingDate": "2026-07-26T09:03:00.000Z",
                "endAt": "2026-07-26T12:03:00.000Z",
                "startAt": "2026-07-26T09:03:00.000Z",
                "cancelAt": "2026-07-25T09:03:00.000Z",
                "cancelReason": "Customer changed mind"
            },
            {
                "id": "b4eba69a-8d51-4cbb-bb20-b67d0cae1451",
                "customerId": "2cfbcfd2-4317-442c-b46c-cea4a3a7db6a",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "43d790fc-4b79-40e0-9b9a-daa861a731b1",
                "price": 9120,
                "status": "PAID",
                "bookingDate": "2026-08-12T11:25:00.000Z",
                "endAt": "2026-08-12T12:25:00.000Z",
                "startAt": "2026-08-12T11:25:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "957d7716-7612-4941-a438-be2bed6bc35b",
                "customerId": "6e64ff2b-334d-4ce4-a05a-4c406c2bb3de",
                "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                "serviceId": "7699ad88-c7b3-4723-81f6-ba546b15919a",
                "price": 14400,
                "status": "DECLINED",
                "bookingDate": "2026-08-03T04:41:00.000Z",
                "endAt": "2026-08-03T07:41:00.000Z",
                "startAt": "2026-08-03T04:41:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "1935bb01-28c2-4c68-a796-16217a75fb45",
                "customerId": "6e64ff2b-334d-4ce4-a05a-4c406c2bb3de",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "bb9fb7b8-713d-486f-8b4e-16578deac282",
                "price": 7980,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-27T05:24:00.000Z",
                "endAt": "2026-07-27T07:24:00.000Z",
                "startAt": "2026-07-27T05:24:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "66ef78d4-b609-432c-ab8a-d53fb7755fe5",
                "customerId": "6e64ff2b-334d-4ce4-a05a-4c406c2bb3de",
                "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                "serviceId": "4d024d30-8e06-4a23-9402-c1ee921c31a0",
                "price": 9600,
                "status": "DECLINED",
                "bookingDate": "2026-07-24T02:27:00.000Z",
                "endAt": "2026-07-24T05:27:00.000Z",
                "startAt": "2026-07-24T02:27:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "3e11e49e-a030-4203-8bd0-8b6583fe2166",
                "customerId": "6e64ff2b-334d-4ce4-a05a-4c406c2bb3de",
                "technicianId": "02408360-551c-47a6-8084-7f42a2446e64",
                "serviceId": "d8b67dde-c1e0-46fb-8b90-5e6931485d4f",
                "price": 12540,
                "status": "ACCEPTED",
                "bookingDate": "2026-08-11T05:49:00.000Z",
                "endAt": "2026-08-11T07:49:00.000Z",
                "startAt": "2026-08-11T05:49:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "45ba4bd5-37a0-4082-b2f1-f95bbe343ba1",
                "customerId": "5c147774-164c-4ef4-b2d0-db8bd8347da0",
                "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                "serviceId": "41030876-6e79-46ac-83c6-ada6b5e32717",
                "price": 11700,
                "status": "PAID",
                "bookingDate": "2026-07-20T03:29:00.000Z",
                "endAt": "2026-07-20T04:29:00.000Z",
                "startAt": "2026-07-20T03:29:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "28e6b8d0-b21d-4883-bf76-a7a142affb91",
                "customerId": "5c147774-164c-4ef4-b2d0-db8bd8347da0",
                "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                "serviceId": "7835a995-9c81-406d-b9d8-36d0dd8b14bf",
                "price": 10920,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-07-20T02:12:00.000Z",
                "endAt": "2026-07-20T04:12:00.000Z",
                "startAt": "2026-07-20T02:12:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "a22350ae-c128-450b-8525-1d21d8ee0781",
                "customerId": "5c147774-164c-4ef4-b2d0-db8bd8347da0",
                "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                "serviceId": "86ef8ef7-56f5-4808-b5b8-9306b059f9ff",
                "price": 11400,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-31T02:17:00.000Z",
                "endAt": "2026-07-31T03:17:00.000Z",
                "startAt": "2026-07-31T02:17:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "2b1dd804-11ce-44dd-92f0-d6a6b65e30fb",
                "customerId": "5c147774-164c-4ef4-b2d0-db8bd8347da0",
                "technicianId": "8b78aca7-ba2a-4ba4-94e6-afbb64d92438",
                "serviceId": "41030876-6e79-46ac-83c6-ada6b5e32717",
                "price": 11700,
                "status": "CANCELLED",
                "bookingDate": "2026-08-04T06:43:00.000Z",
                "endAt": "2026-08-04T08:43:00.000Z",
                "startAt": "2026-08-04T06:43:00.000Z",
                "cancelAt": "2026-08-03T06:43:00.000Z",
                "cancelReason": "Customer changed mind"
            },
            {
                "id": "da0630aa-755c-49dd-9ff6-f9d60dd8eac9",
                "customerId": "b0f34e38-f5da-4e19-bd2d-4530168deeab",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "REQUESTED",
                "bookingDate": "2026-07-29T11:30:00.000Z",
                "endAt": "2026-07-29T12:30:00.000Z",
                "startAt": "2026-07-29T11:30:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "b3aa3a09-4e82-4b32-83a3-45776ff34264",
                "customerId": "b0f34e38-f5da-4e19-bd2d-4530168deeab",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "47e76cdf-31ba-4840-82b5-505231b72b9e",
                "price": 4200,
                "status": "CANCELLED",
                "bookingDate": "2026-07-20T09:33:00.000Z",
                "endAt": "2026-07-20T10:33:00.000Z",
                "startAt": "2026-07-20T09:33:00.000Z",
                "cancelAt": "2026-07-19T09:33:00.000Z",
                "cancelReason": "Customer changed mind"
            },
            {
                "id": "aeea343f-5b2f-4bb9-94c4-e0ab4944af41",
                "customerId": "b0f34e38-f5da-4e19-bd2d-4530168deeab",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                "price": 13680,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-20T11:33:00.000Z",
                "endAt": "2026-07-20T14:33:00.000Z",
                "startAt": "2026-07-20T11:33:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "c6387062-4e8c-4f3f-b7a4-4e6306dfaa25",
                "customerId": "b0f34e38-f5da-4e19-bd2d-4530168deeab",
                "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                "serviceId": "bf31a8a7-ec11-4213-a359-fff3084e4093",
                "price": 9120,
                "status": "PAID",
                "bookingDate": "2026-07-20T09:33:00.000Z",
                "endAt": "2026-07-20T10:33:00.000Z",
                "startAt": "2026-07-20T09:33:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "8dc006f4-a155-4c83-8521-36a17b22a7cb",
                "customerId": "7b47b856-19be-40cb-b623-ee01a81e70ae",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "cea1b644-2eb2-40ef-ad5b-44de38e204f6",
                "price": 9360,
                "status": "DECLINED",
                "bookingDate": "2026-08-11T02:12:00.000Z",
                "endAt": "2026-08-11T04:12:00.000Z",
                "startAt": "2026-08-11T02:12:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "4a180d2b-e76a-470b-a17e-026e2f97e66c",
                "customerId": "7b47b856-19be-40cb-b623-ee01a81e70ae",
                "technicianId": "b235b03b-d70f-49e2-a8e6-ec12df5057ef",
                "serviceId": "bbd9ec5d-b451-4d79-8379-4dc1c61ddebf",
                "price": 7800,
                "status": "PAID",
                "bookingDate": "2026-07-30T06:11:00.000Z",
                "endAt": "2026-07-30T07:11:00.000Z",
                "startAt": "2026-07-30T06:11:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "cf1cdfe2-ba3f-4a64-bcb9-38aa6ccd9764",
                "customerId": "7b47b856-19be-40cb-b623-ee01a81e70ae",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "60ac9e11-03c5-47c2-b0d8-8d24de6953c6",
                "price": 11520,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-14T08:30:00.000Z",
                "endAt": "2026-08-14T11:30:00.000Z",
                "startAt": "2026-08-14T08:30:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "5135b512-1723-4a3f-a0f1-5c44fe4b867e",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "19744718-a235-41a4-b7d9-dee1606882b6",
                "serviceId": "7c9c1b8d-7b5d-4b73-aef3-1f4e58b81c01",
                "price": 1200,
                "status": "COMPLETED",
                "bookingDate": "2026-07-16T02:55:09.211Z",
                "endAt": "2026-07-17T16:00:00.000Z",
                "startAt": "2026-07-16T14:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "24638e9d-cfca-4480-9d54-d0e3d95995b8",
                "customerId": "7b47b856-19be-40cb-b623-ee01a81e70ae",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "47e76cdf-31ba-4840-82b5-505231b72b9e",
                "price": 4200,
                "status": "DECLINED",
                "bookingDate": "2026-07-27T11:23:00.000Z",
                "endAt": "2026-07-27T14:23:00.000Z",
                "startAt": "2026-07-27T11:23:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "3fd0bed5-0055-4af1-9093-a0c7f3217683",
                "customerId": "a105c167-834c-4fcb-8e06-3e871aa94f9e",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                "price": 13680,
                "status": "REQUESTED",
                "bookingDate": "2026-08-10T05:16:00.000Z",
                "endAt": "2026-08-10T07:16:00.000Z",
                "startAt": "2026-08-10T05:16:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "d4bdb52c-8e12-4352-bba5-3c0aab7f02c7",
                "customerId": "a105c167-834c-4fcb-8e06-3e871aa94f9e",
                "technicianId": "e17bd511-84a7-4d04-b437-dd9b2396e26f",
                "serviceId": "410e5edf-7bc2-4545-97b1-2bf691d1d9c1",
                "price": 5460,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-01T04:35:00.000Z",
                "endAt": "2026-08-01T07:35:00.000Z",
                "startAt": "2026-08-01T04:35:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "f2f897d5-bc07-4d20-8085-70c3d0434deb",
                "customerId": "a105c167-834c-4fcb-8e06-3e871aa94f9e",
                "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                "serviceId": "8082cdd7-cfff-4d08-8570-0896c09f223b",
                "price": 8640,
                "status": "COMPLETED",
                "bookingDate": "2026-07-31T10:56:00.000Z",
                "endAt": "2026-07-31T13:56:00.000Z",
                "startAt": "2026-07-31T10:56:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "6b2a20b5-9b38-4680-abb8-6e8a4a7e2149",
                "customerId": "a105c167-834c-4fcb-8e06-3e871aa94f9e",
                "technicianId": "c1928102-7e46-4e4b-8b34-150a7eccbb4a",
                "serviceId": "b9a2c136-38e9-4310-9a53-45216053c75c",
                "price": 7680,
                "status": "REQUESTED",
                "bookingDate": "2026-07-21T03:08:00.000Z",
                "endAt": "2026-07-21T04:08:00.000Z",
                "startAt": "2026-07-21T03:08:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "2b46fe2e-df35-42c9-bd05-d91312194a36",
                "customerId": "013c0ecb-4429-40be-a109-c120ca1e12bf",
                "technicianId": "a7738ccc-8cda-4a4c-a3ce-09c099611bf9",
                "serviceId": "3f6c76e1-55fe-4af6-8d9f-72bfa4dc067d",
                "price": 13440,
                "status": "ACCEPTED",
                "bookingDate": "2026-08-09T06:41:00.000Z",
                "endAt": "2026-08-09T08:41:00.000Z",
                "startAt": "2026-08-09T06:41:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "5f2c4a0a-1ae5-496c-ac83-79d814284e96",
                "customerId": "013c0ecb-4429-40be-a109-c120ca1e12bf",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-09T04:37:00.000Z",
                "endAt": "2026-08-09T06:37:00.000Z",
                "startAt": "2026-08-09T04:37:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "07330b99-f6e2-4c86-b6b7-d90e6bd865f1",
                "customerId": "013c0ecb-4429-40be-a109-c120ca1e12bf",
                "technicianId": "e8fa55ca-99e5-4464-9f0a-53927f064a2c",
                "serviceId": "f1fb1015-ff9d-4019-ac57-e14992cca0da",
                "price": 13680,
                "status": "DECLINED",
                "bookingDate": "2026-08-05T07:43:00.000Z",
                "endAt": "2026-08-05T08:43:00.000Z",
                "startAt": "2026-08-05T07:43:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "dd4bfb47-0157-418c-8a08-0429928151ab",
                "customerId": "013c0ecb-4429-40be-a109-c120ca1e12bf",
                "technicianId": "b235a70a-9634-4493-a8c8-edebf1f1014d",
                "serviceId": "9c2aa33c-acbc-4b04-8d69-46ca838cc3fa",
                "price": 5400,
                "status": "IN_PROGRESS",
                "bookingDate": "2026-08-06T09:54:00.000Z",
                "endAt": "2026-08-06T10:54:00.000Z",
                "startAt": "2026-08-06T09:54:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "e5de703c-d636-4d75-887e-50440e420081",
                "customerId": "d4ad3535-09bf-484b-8513-060f8ee4108e",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "DECLINED",
                "bookingDate": "2026-07-18T17:51:46.121Z",
                "endAt": "2026-07-21T00:00:00.000Z",
                "startAt": "2026-07-19T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "63de795a-09a0-4865-9b41-3e098f9ac7f8",
                "customerId": "d4ad3535-09bf-484b-8513-060f8ee4108e",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "DECLINED",
                "bookingDate": "2026-07-18T18:00:17.655Z",
                "endAt": "2026-07-21T00:00:00.000Z",
                "startAt": "2026-07-19T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "f714a0fd-55d3-4283-ae70-ade282ed4895",
                "customerId": "d4ad3535-09bf-484b-8513-060f8ee4108e",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "CANCELLED",
                "bookingDate": "2026-07-18T18:05:03.308Z",
                "endAt": "2026-07-21T00:00:00.000Z",
                "startAt": "2026-07-19T22:00:00.000Z",
                "cancelAt": "2026-07-18T18:52:43.909Z",
                "cancelReason": null
            },
            {
                "id": "a4d913f5-b110-4f1d-94cc-2d937021887b",
                "customerId": "d4ad3535-09bf-484b-8513-060f8ee4108e",
                "technicianId": "222a7968-9cca-45e8-a8c3-e718b8c8a976",
                "serviceId": "3e89f9a2-5f64-42a6-9e2c-d25acc1eee1e",
                "price": 4800,
                "status": "COMPLETED",
                "bookingDate": "2026-07-18T18:54:46.679Z",
                "endAt": "2026-07-21T00:00:00.000Z",
                "startAt": "2026-07-19T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "242400a9-4384-4e50-8dad-fe06520f19e9",
                "customerId": "f4cf7e31-f456-4191-be27-6686c04c5134",
                "technicianId": "b30d0f6e-16b9-4e70-b16f-e27b00089572",
                "serviceId": "3b9552f1-b85b-410d-8b77-24a532b105c3",
                "price": 5400,
                "status": "REQUESTED",
                "bookingDate": "2026-07-18T21:46:03.668Z",
                "endAt": "2026-07-21T00:00:00.000Z",
                "startAt": "2026-07-19T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "c4ee3221-5d05-4bed-93c8-864a2241c45b",
                "customerId": "f12c8a9f-ac6a-4d84-8f0a-051744e211bf",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "COMPLETED",
                "bookingDate": "2026-07-19T07:25:13.763Z",
                "endAt": "2026-07-22T00:00:00.000Z",
                "startAt": "2026-07-20T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "a48e14a7-5722-4f26-8c1d-89f7b858225a",
                "customerId": "f12c8a9f-ac6a-4d84-8f0a-051744e211bf",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "PAID",
                "bookingDate": "2026-07-19T08:31:37.126Z",
                "endAt": "2026-07-22T00:00:00.000Z",
                "startAt": "2026-07-20T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "a76262f5-c6e9-4b60-b18a-868890fd8d2a",
                "customerId": "f12c8a9f-ac6a-4d84-8f0a-051744e211bf",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "8e2f3d4a-9c5e-4d7f-a2b1-7f6d5c4b3a07",
                "price": 500,
                "status": "PAID",
                "bookingDate": "2026-07-19T09:10:49.111Z",
                "endAt": "2026-07-23T14:00:00.000Z",
                "startAt": "2026-07-22T12:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "d35692bb-31f7-4a64-957b-85f0e200485c",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "REQUESTED",
                "bookingDate": "2026-08-04T14:41:10.585Z",
                "endAt": "2026-08-22T00:00:00.000Z",
                "startAt": "2026-08-20T22:00:00.000Z",
                "cancelAt": null,
                "cancelReason": null
            },
            {
                "id": "f027bca7-d408-4962-93e8-2067c59429d3",
                "customerId": "79c6aec3-4692-4af5-9ef2-76d6179e811c",
                "technicianId": "5f599a3f-4963-493f-944d-2b06c8b88b96",
                "serviceId": "2c7f9d1e-6e5a-4cb5-9c0d-5a8b7f2e1d05",
                "price": 4500,
                "status": "ACCEPTED",
                "bookingDate": "2026-07-17T18:34:24.842Z",
                "endAt": "2026-07-18T19:00:00.000Z",
                "startAt": "2026-07-18T17:00:00.000Z",
                "cancelAt": "2026-08-04T14:47:19.124Z",
                "cancelReason": null
            }
        ]
    }
}

///////////////////////// Update user status 25. PATCT localhost:5000/api/admin/users/8bca6c9d-10b5-45fb-bdca-bd28632210fc
// payload
// {
//     "isBan":true
// }
{
    "success": true,
    "statusCode": 200,
    "message": "User status Updated successfully",
    "data": {
        "updatedStatus": {
            "id": "8bca6c9d-10b5-45fb-bdca-bd28632210fc",
            "email": "level10@programming-hero.com",
            "name": "Faisal",
            "role": "CUSTOMER",
            "phone": "0178776697",
            "address": "Dhaka",
            "createdAt": "2026-07-18T15:28:54.159Z",
            "updatedAt": "2026-08-04T15:57:46.007Z",
            "isBan": true,
            "bookings": [],
            "payments": [],
            "reviews": [],
            "technicianProfile": null
        }
    }
}