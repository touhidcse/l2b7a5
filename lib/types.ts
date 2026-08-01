import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";


export type NavbarProps = {
    user: IUser;
};

export type ISidebarItem = {
    label: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
};



export type SectionProps = {
    title: string
    icon: React.ReactNode
    count: number
    children?: React.ReactNode
    isEmpty?: boolean
};

export type BookingItemProps = {
    // id: string
    // // serviceCategory: string
    // serviceName: string
    // date: string
    // status: string
    booking: IBooking
};

export type PaymentItemProps = {
    id: string
    price: number
    date: string
    method: string
};

export type IBookingService = {
    id: string;
    title: string;
    description: string;
    categoryId: string;
    technicianId: string;
    price: number;
};

export type ReviewItemProps = {
    id: string
    rating: number
    date: string
    comment: string
};




// export type IUser = {
//     data: {
//         id: string;
//         email: string;
//         name: string;
//         role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
//         createdAt: string,
//         updatedAt: string,
//         phone: string | null;
//         address: string | null;
//         isBan: boolean;
//         bookings: IBooking[];
//         payments: IPayment[];
//         reviews: IReview[];
//         technicianProfile: ITechnician
//     }
// };

// export type IUser = {
//     success: boolean;
//     statusCode: number;
//     message: string;
//     data: {
//         Id: string;
//         email: string;
//         name: string;
//         role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
//         phone: string | null;
//         address: string | null;
//         createdAt: string;
//         updatedAt: string;
//         isBan: boolean;
//         bookings:
//         {
//             id: string,
//             customerId: string,
//             technicianId: string,
//             serviceId: string,
//             price: number,
//             status: "REQUESTED" | "ACCEPTED" | "DECLINED" | "PAID" | "CANCELLED" | "IN_PROGRESS" | "COMPLETED",
//             bookingDate: string,
//             startAt: string,
//             endAt: string,
//             cancelAt: string,
//             cancelReason: string,
//             service: {
//                 id: string,
//                 title: string,
//                 description: string,
//                 categoryId: string,
//                 technicianId: string,
//                 price: number,
//             },
//             technician: {
//                 id: string,
//                 userId: string,
//                 rating: number,
//                 bio: string,
//                 experience: number,
//                 profilePhoto: string,
//                 location: string,
//             },
//             payment: {
//                 id: string,
//                 bookingId: string,
//                 price: number,
//                 method: string,
//                 stripeCustomerId: string,
//                 stripePaymentId: string,
//                 status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED",
//                 paidAt: string,
//                 cancelAt: string,
//                 cancelReason: string,
//                 customerId: string,

//             },
//             review: {
//                 id: string,
//                 bookingId: string,
//                 customerId: string,
//                 technicianId: string,
//                 rating: number,
//                 comment: string,
//                 reviewDate: string,
//             };


//         }[];

//     }
// }



// export type ITechnician = {
//     id: string,
//     location: string,
//     rating: number,
//     user: {
//         id: string,
//         name: string,
//         email: string,
//         phone: string
//     },
//     availability: IAvailability
// };

export type IAvailability = [
    {
        id: string,
        technicianId: string,
        day: string,
        startTime: string,
        endTime: string,
        isAvailable: boolean
    }
]

// export type ICategory = {
//     id: string,
//     type: string
// };

// export type IService = {
//     id: string,
//     title: string,
//     description: string,
//     categoryId: string,
//     technicianId: string,
//     price: number,
//     category: ICategory,
//     technician: ITechnician
// }



// export type IBooking = {
//     id: string;
//     customerId: string;
//     technicianId: string;
//     serviceId: string;
//     price: number;
//     status: "REQUESTED" | "ACCEPTED" | "DECLINED" | "PAID" | "CANCELLED" | "IN_PROGRESS" | "COMPLETED";
//     bookingDate: string;
//     startAt: string;
//     endAt: string;

//     service: IService;
//     payment: IPayment;
//     review: IReview;
// }

// export type IPayment = {
//     id: string;
//     bookingId: string;
//     price: number;
//     method: string;
//     status: "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
//     paidAt: string;
// }

// export type IReview = {
//     id: string;
//     bookingId: string;
//     technicianId: string;
//     rating: number;
//     comment: string;
//     reviewDate: string;
// }

export type IUser = {
  success: boolean;
  statusCode: number;
  message: string;

  data: {
    id: string;
    email: string;
    name: string;
    role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
    phone: string | null;
    address: string | null;
    createdAt: string;
    updatedAt: string;
    isBan: boolean;

    bookings: IBooking[];
  };
};



export type IBooking = {

  id: string;

  customerId: string;
  technicianId: string;
  serviceId: string;

  price: number;

  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "CANCELLED"
    | "IN_PROGRESS"
    | "COMPLETED";


  bookingDate: string;

  startAt: string;
  endAt: string;

  cancelAt: string | null;
  cancelReason: string | null;


  service: IService;


  technician: ITechnician;


  payment: IPayment | null;


  review: IReview | null;

};



export type IService = {

  id:string;

  title:string;

  description:string;

  categoryId:string;

  technicianId:string;

  price:number;

  category?: ICategory;

};



export type ICategory = {

 id:string;

 type:string;

};



export type ITechnician = {

 id:string;

 userId:string;

 rating:number;

 bio:string;

 experience:number;

 profilePhoto:string;

 location:string;

};



export type IPayment = {

 id:string;

 bookingId:string;

 price:number;

 method:string;


 status:
 | "PENDING"
 | "COMPLETED"
 | "FAILED"
 | "REFUNDED";


 paidAt:string | null;

};



export type IReview = {

 id:string;

 bookingId:string;

 customerId:string;

 technicianId:string;

 rating:number;

 comment:string;

 reviewDate:string;

};