"use client";

import {
  Form,
  FormButton,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components";
import { contactSchema } from "@/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactRequestPreview } from "./preview";
import axios from "axios";
import { formStatus as formStatusType } from "@/types/form";
import { useState } from "react";
import { useCaptcha } from "@/hooks/useCaptcha";

function ContactForm() {
  const [formStatus, setFormStatus] = useState<formStatusType>("idle");
  const { challengeStatus, challengeToken } = useCaptcha("#captcha");
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setFormStatus("loading");
      await axios.post("/api/contact", {
        contactData: data,
        challengeToken,
      });
      setFormStatus("success");

      setTimeout(() => {
        setFormStatus("sent");
        form.reset();
      }, 2000);
    } catch {
      // Press F to my form (and send a sentry report)
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus("idle");
      }, 2000);
    }
  });

  return (
    <div className="flex flex-1 items-center px-1 gap-8 overflow-hidden">
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex-1 flex flex-col gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={12}
                    placeholder="Your message here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormButton
            ErrorSlot="error"
            IdleSlot="$submit"
            LoadingSlot="loading"
            SuccessSlot="message sent!"
            SentSlot="Thanks for reaching out!"
            status={formStatus}
          />
          <div id="captcha" className="w-full">
            {challengeStatus}
          </div>
        </form>
        <ContactRequestPreview className="flex-1" />
      </Form>
    </div>
  );
}

export { ContactForm };
