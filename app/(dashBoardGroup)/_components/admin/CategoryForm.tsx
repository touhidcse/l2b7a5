"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  CategorySchema,
  CategoryFormInput,
  CategoryFormOutput,
} from "@/lib/validations/category";
import { createCategory } from "@/service/adminActions";

export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CategoryFormInput, unknown, CategoryFormOutput>({
    resolver: zodResolver(CategorySchema),
    defaultValues: { type: "" },
  });

  const onSubmit: SubmitHandler<CategoryFormOutput> = (values) => {
    createCategory(values).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border bg-white p-5">
      <h3 className="text-base font-bold text-slate-800">Add New Category</h3>
      <div>
        <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">
          Category Type
        </label>
        <input
          type="text"
          {...register("type")}
          placeholder="e.g. Electrical, Plumbing"
          className="w-full rounded-lg border border-slate-200 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.type && <p className="mt-1 text-xs text-rose-500">{errors.type.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Create Category"}
      </button>
    </form>
  );
}