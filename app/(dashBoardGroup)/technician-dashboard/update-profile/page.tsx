import React from "react";
import { ProfileHeader } from "@/app/(publicGroup)/_components/profile/profileHeader";
import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";
import ProfileManagementForm from "../../_components/technician/ProfileManagementForm";


export default async function TechnicianPage() {
    const user = (await getMe()) as IUser;


    return (
        <div className="space-y-6 p-6">
            <ProfileHeader user={user} />

            <ProfileManagementForm initialData={user.technicianProfile} />

        </div>
    );
}