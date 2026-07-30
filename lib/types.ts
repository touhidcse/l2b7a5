import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type IPostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type IAuthor = {
    id: string;
    name: string;
    email: string;
    activeStatus: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

export type IComment = {
    id: string;
    content: string;
    status: string;
    postId: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
};

export type IPost = {
    id: string;
    title: string;
    content: string;
    thumbnail: string | null;
    isFeatured: boolean;
    status: IPostStatus;
    tags: string[];
    views: number;
    isPremium: boolean;
    authorId: string;
    author?: IAuthor;
    comments?: IComment[];
    _count?: {
        comments: number;
    };
    createdAt: string;
    updatedAt: string;
};

type IUser = {
    success: boolean,
    statusCode: number,
    message: string,
    data: {
        profile: {
            id: string,
            email: string,
            name: string,
            role: string,
            phone: string | null,
            address: string | null,
            isBan: boolean,
        }
    }
}


export type NavbarProps = {
    user: IUser
}

export type ISidebarItem = {
    label: string,
    href: string,
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}

export type IService = {
    id: string,
    title: string,
    description: string,
    categoryId: string,
    technicianId: string,
    price: number,
    category: {
        id: string,
        type: string
    },
    technician: {
        id: string,
        location: string,
        rating: number,
        user: {
            id: string,
            name: string,
            email: string,
            phone: string
        }
    }
}