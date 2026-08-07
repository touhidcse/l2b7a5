import { z } from "zod";

// 1. Profile Validation Schema
export const ProfileSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters long"),
  experience: z.coerce.number().min(0, "Experience must be a positive number"),
  profilePhoto: z.string().url("Please provide a valid image URL"),
  location: z.string().min(2, "Location is required"),
});

export type ProfileFormInput = z.input<typeof ProfileSchema>;
export type ProfileFormOutput = z.output<typeof ProfileSchema>;

// 2. Availability Slot Validation Schema
export const AvailabilityItemSchema = z.object({
  day: z.enum([
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ]),
  startTime: z.string().min(1, "Start time is required"),
  endTime: z.string().min(1, "End time is required"),
  isAvailable: z.boolean(),
});

// 3. Complete Availability Array Schema (Exported)
export const AvailabilitySchema = z.object({
  availabilities: z.array(AvailabilityItemSchema).min(1, "At least one time slot is required"),
});

export type AvailabilityFormInput = z.input<typeof AvailabilitySchema>;
export type AvailabilityFormOutput = z.output<typeof AvailabilitySchema>;
export type AvailabilityFormValues = z.infer<typeof AvailabilitySchema>;