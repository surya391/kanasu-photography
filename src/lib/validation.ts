import { z } from "zod";
import { SERVICE_OPTIONS } from "@/constants/services";

const INDIAN_MOBILE = /^[6-9]\d{9}$/;

export const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, "").replace(/^(\+91|91|0)(?=\d{10}$)/, ""))
    .refine((v) => INDIAN_MOBILE.test(v), "Enter a valid 10-digit mobile number"),
  email: z
    .string()
    .trim()
    .refine((v) => v === "" || z.email().safeParse(v).success, "Enter a valid email address"),
  service: z.enum(SERVICE_OPTIONS, { error: "Please choose a service" }),
  eventDate: z.string().refine((v) => {
    if (v === "") return true;
    const picked = new Date(`${v}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !Number.isNaN(picked.getTime()) && picked >= today;
  }, "Please pick today or a future date"),
  location: z.string().trim().max(120, "Location is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters)")
    .max(1000, "Message must be under 1000 characters"),
});

export type InquiryInput = z.input<typeof inquirySchema>;
export type InquiryData = z.output<typeof inquirySchema>;
