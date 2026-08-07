"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AvailabilitySchema, AvailabilityFormValues } from "@/lib/validations/technician";
import { saveTechnicianAvailability } from "@/service/technicianActions";

const DAYS = ["SATURDAY", "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"] as const;

export default function AvailabilityScheduler() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AvailabilityFormValues>({
    resolver: zodResolver(AvailabilitySchema),
    defaultValues: {
      availabilities: [
        { day: "SATURDAY", startTime: "09:00", endTime: "17:00", isAvailable: true },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availabilities",
  });

  const onSubmit = (values: AvailabilityFormValues) => {
    saveTechnicianAvailability(values.availabilities).then((res) => {
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-800">Availability Scheduler</h3>
        <button
          type="button"
          onClick={() =>
            append({ day: "SATURDAY", startTime: "09:00", endTime: "12:00", isAvailable: true })
          }
          className="rounded-lg border border-emerald-600 px-3 py-1 text-xs font-semibold text-emerald-600 hover:bg-emerald-50"
        >
          + Add Time Slot
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-wrap items-center gap-3 rounded-lg border p-3">
            <select
              {...register(`availabilities.${index}.day`)}
              className="rounded-lg border border-slate-200 p-2 text-sm"
            >
              {DAYS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <input
              type="time"
              {...register(`availabilities.${index}.startTime`)}
              className="rounded-lg border border-slate-200 p-2 text-sm"
            />

            <span className="text-slate-400">-</span>

            <input
              type="time"
              {...register(`availabilities.${index}.endTime`)}
              className="rounded-lg border border-slate-200 p-2 text-sm"
            />

            <label className="flex items-center gap-1.5 text-xs text-slate-600">
              <input type="checkbox" {...register(`availabilities.${index}.isAvailable`)} />
              Active
            </label>

            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="ml-auto text-xs font-semibold text-rose-500 hover:underline"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        {errors.availabilities && (
          <p className="text-xs text-rose-500">{errors.availabilities.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {isSubmitting ? "Updating..." : "Save Availability"}
        </button>
      </form>
    </div>
  );
}