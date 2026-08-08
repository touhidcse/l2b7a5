import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarIcon, MapPinIcon, BriefcaseIcon, CalendarCheckIcon } from "lucide-react";
import { getMe } from "@/service/getMe";
import { IUser } from "@/lib/types";
import { TechnicianAbout } from "@/app/(publicGroup)/_components/technician/TechnicianAbout";
import { TechnicianServices } from "@/app/(publicGroup)/_components/technician/TechnicianServices";
import { TechnicianReviews } from "@/app/(publicGroup)/_components/technician/TechnicianReviews";
import { TechnicianSkills } from "@/app/(publicGroup)/_components/technician/TechnicianSkills";


export default async function TechnicianProfilePage() {
  
const user = await getMe() as IUser
const technician = user.technicianProfile!
  const imageUrl =
    technician.profilePhoto?.startsWith("http://") ||
    technician.profilePhoto?.startsWith("https://")
      ? technician.profilePhoto
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYc4wJBplhHqgn45lCzs1dBf27EoL69wD_XOmp3w1p7KE12_LKqtv5vB&s=10";

  const bookingCount =
    technician._count?.bookings ?? technician.bookings?.length ?? 0;

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* 1. Profile Header Banner */}
      <Card className="overflow-hidden border-none bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-5 sm:flex-row text-center sm:text-left">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-emerald-500 shadow-md">
                <Image
                  src={imageUrl}
                  alt={technician.user?.name || "Technician"}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    {technician.user?.name}
                  </h1>
                  <Badge className="bg-emerald-500 hover:bg-emerald-600">
                    Verified
                  </Badge>
                </div>

                <p className="flex items-center justify-center sm:justify-start gap-1.5 text-sm text-slate-300">
                  <MapPinIcon className="size-4 text-emerald-400" />
                  {technician.location || "Location not specified"}
                </p>

                {/* Rating & Completed Jobs Summary */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-300">
                  {technician.rating && (
                    <span className="flex items-center gap-1 font-semibold text-amber-400">
                      <StarIcon className="size-4 fill-amber-400" />
                      {technician.rating} ({technician.totalReviews ?? 0} reviews)
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <CalendarCheckIcon className="size-4 text-slate-400" />
                    {bookingCount} Bookings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Column */}
        <div className="space-y-8 lg:col-span-2">
          {/* Bio / About Section */}
          <TechnicianAbout technician={technician} />

          {/* Services List with Category & Prices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BriefcaseIcon className="size-5 text-emerald-600" />
                Services & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TechnicianServices technician={technician} />
            </CardContent>
          </Card>

          {/* Customer Reviews Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                Customer Reviews ({technician.totalReviews ?? 0})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TechnicianReviews technician={technician} />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Skills / Categories Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Specializations & Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <TechnicianSkills technician={technician} />
            </CardContent>
          </Card>

          {/* Quick Contact / Location Details Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact & Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium">{technician.location}</p>
              </div>
              {technician.user?.email && (
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{technician.user.email}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}