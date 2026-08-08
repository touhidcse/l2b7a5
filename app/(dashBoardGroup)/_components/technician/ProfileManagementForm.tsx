"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Schema imports
import { ProfileSchema, ProfileFormInput, ProfileFormOutput } from "@/lib/validations/technician";

// Server action import
import { updateTechnicianProfile } from "@/service/technicianActions";

// Types import
import { ITechnician } from "@/lib/types";

// 1. Define Props interface
interface Props {
  initialData?: ITechnician | null;
}

export default function ProfileManagementForm({ initialData }: Props) {
  // Pass Input and Output types to useForm generics
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormInput, unknown, ProfileFormOutput>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      bio: initialData?.bio || "",
      experience: initialData?.experience ?? 0,
      profilePhoto: initialData?.profilePhoto || "",
      location: initialData?.location || "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormOutput> = (values) => {
    updateTechnicianProfile(values).then((res) => {
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100 w-full">
      <h3 className="mb-4 text-lg font-bold text-slate-800">Profile Management</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
            Bio
          </label>
          <textarea
            {...register("bio")}
            className="w-full rounded-lg border border-slate-200 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            rows={3}
          />
          {errors.bio && <p className="mt-1 text-xs text-rose-500">{errors.bio.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
              Experience (Years)
            </label>
            <input
              type="number"
              {...register("experience")}
              className="w-full rounded-lg border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.experience && (
              <p className="mt-1 text-xs text-rose-500">{errors.experience.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
              Location
            </label>
            <input
              type="text"
              {...register("location")}
              className="w-full rounded-lg border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.location && (
              <p className="mt-1 text-xs text-rose-500">{errors.location.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
            Profile Photo URL
          </label>
          <input
            type="text"
            {...register("profilePhoto")}
            className="w-full rounded-lg border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {errors.profilePhoto && (
            <p className="mt-1 text-xs text-rose-500">{errors.profilePhoto.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {isSubmitting ? "Saving..." : "Save Profile"}
        </button>
      </form>
    </div>
  );
}