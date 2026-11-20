"use client";

import { useState, useSyncExternalStore, type ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/constants/services";
import { cn } from "@/lib/cn";
import { submitInquiry, type InquiryHandoff } from "@/lib/inquiry";
import { inquirySchema, type InquiryData, type InquiryInput } from "@/lib/validation";

const FIELD =
  "min-h-12 w-full rounded-xl border bg-white px-4 text-base text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: (props: { id: string; "aria-invalid": boolean; "aria-describedby"?: string; className: string }) => React.ReactNode;
}

function Field({ id, label, error, optional, className, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-semibold">
        {label}
        {optional ? <span className="text-xs font-normal text-muted">Optional</span> : null}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
        className: cn(FIELD, error ? "border-brand" : "border-line"),
      })}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-brand-dark">
          <AlertCircle className="size-4 shrink-0" aria-hidden /> {error}
        </p>
      ) : null}
    </div>
  );
}

export function InquiryForm() {
  // False during SSR/hydration: stops a native GET submit (which would put the
  // visitor's details in the URL) before React has attached the handler.
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [handoff, setHandoff] = useState<InquiryHandoff | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput, unknown, InquiryData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", email: "", service: undefined, eventDate: "", location: "", message: "" },
  });

  const onSubmit = async (data: InquiryData) => {
    setSubmitError(null);
    try {
      const result = submitInquiry(data);
      setHandoff(result);
      window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
    } catch {
      setSubmitError("Something went wrong while preparing your enquiry. Please call us directly.");
    }
  };

  if (handoff) {
    return (
      <div role="status" className="rounded-card border border-line bg-white p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-14 text-brand" aria-hidden />
        <h2 className="mt-5 font-display text-3xl">Your enquiry is ready to send</h2>
        <p className="mx-auto mt-3 max-w-md text-muted">
          We opened WhatsApp with your details filled in. Just press send there. If it didn&apos;t open, use one of the options below.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={handoff.whatsappUrl}>
            <MessageCircle className="size-4" aria-hidden /> Open WhatsApp
          </Button>
          <Button href={handoff.mailtoUrl} variant="outline">
            <Mail className="size-4" aria-hidden /> Send by email
          </Button>
        </div>
        <button
          type="button"
          onClick={() => {
            reset();
            setHandoff(null);
          }}
          className="mt-6 min-h-11 text-sm font-semibold text-brand underline-offset-4 hover:underline"
        >
          Start a new enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-card border border-line bg-white p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name?.message}>
          {(p) => <input {...p} type="text" autoComplete="name" placeholder="Your name" {...register("name")} />}
        </Field>
        <Field id="phone" label="Mobile number" error={errors.phone?.message}>
          {(p) => <input {...p} type="tel" inputMode="tel" autoComplete="tel" placeholder="98765 43210" {...register("phone")} />}
        </Field>
        <Field id="email" label="Email" optional error={errors.email?.message}>
          {(p) => <input {...p} type="email" autoComplete="email" placeholder="you@example.com" {...register("email")} />}
        </Field>
        <Field id="service" label="Service" error={errors.service?.message}>
          {(p) => (
            <select {...p} defaultValue="" {...register("service")}>
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="eventDate" label="Event date" optional error={errors.eventDate?.message}>
          {(p) => <input {...p} type="date" {...register("eventDate")} />}
        </Field>
        <Field id="location" label="Location" optional error={errors.location?.message}>
          {(p) => <input {...p} type="text" placeholder="Venue or city" {...register("location")} />}
        </Field>
        <Field id="message" label="Tell us about it" error={errors.message?.message} className="sm:col-span-2">
          {(p) => (
            <textarea
              {...(p as ComponentProps<"textarea">)}
              rows={5}
              placeholder="Occasion, number of guests, anything you'd like us to know…"
              {...register("message")}
              className={cn(p.className, "min-h-32 resize-y py-3")}
            />
          )}
        </Field>
      </div>

      {submitError ? (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl bg-brand/10 p-4 text-sm text-brand-dark">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden /> {submitError}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Sending opens WhatsApp with your message pre-filled.</p>
        <Button type="submit" disabled={isSubmitting || !hydrated} className="w-full sm:w-auto">
          {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          {isSubmitting ? "Preparing…" : "Send enquiry"}
        </Button>
      </div>
    </form>
  );
}
