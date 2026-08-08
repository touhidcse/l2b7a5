import React from "react";

import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";
import ProfileManagementForm from "../../_components/technician/ProfileManagementForm";
import { ProfileHeader } from "../../_components/shared/profileHeader";


export default async function TechnicianPage() {
    const user = (await getMe()) as IUser;


    return (
        <div className="space-y-6 p-6">

            <ProfileManagementForm initialData={user.technicianProfile} />

        </div>
    );
}