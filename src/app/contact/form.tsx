"use client";

import {
  Button,
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
import { formStatus } from "@/types/form";
import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState<formStatus>("idle");
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
      setStatus("loading");
      await axios.post("/api/contact", data);
      setStatus("success");

      setTimeout(() => {
        setStatus("sent");
        // form.reset();
      }, 2000);
    } catch {
      // Press F to my form (and send a sentry report)
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  });

  return (
    <div className="flex flex-1 items-center px-1 gap-8 overflow-hidden">
      <Form {...form}>
        <form onSubmit={onSubmit} className="flex-1">
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

          <Button type="submit">Submit</Button>
          <FormButton
            ErrorSlot="error"
            IdleSlot="$submit"
            LoadingSlot="loading"
            SuccessSlot="message sent!"
            SentSlot="Thanks for reaching out!"
            status={status}
          ></FormButton>
        </form>
        <ContactRequestPreview className="flex-1" />
      </Form>
    </div>
  );
}

export { ContactForm };
