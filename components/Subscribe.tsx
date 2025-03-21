"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

import { QRCodeCanvas } from "qrcode.react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";

const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

export default function Subscribe() {
  const [confirmationLink, setConfirmationLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });
  console.log("isValid? ", form.formState.isValid);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!form.formState.isValid) return;

    setLoading(true);

    const link = `${window.location.origin}/confirm?phone=${encodeURIComponent(
      data?.phone
    )}`;

    setTimeout(() => {
      setConfirmationLink(link);
      setLoading(false);
    }, 1500);
  }

  function reSubscribe() {
    setConfirmationLink(null);
  }

  return (
    <div className="preview relative flex items-start justify-center rounded-md border p-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      {loading ? (
        <div className="h-28 w-72 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-t-violet-800 border-gray-300 rounded-full animate-spin"></div>
        </div>
      ) : confirmationLink ? (
        <div className="flex flex-col items-center space-y-4">
          <p>Scan this QR code to confirm</p>
          <div className="bg-white p-2 rounded-md">
            <QRCodeCanvas value={confirmationLink} size={200} />
          </div>
          <Button onClick={reSubscribe} className="w-full cursor-pointer">
            Subscribe Again!
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col items-start space-y-4"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel className="text-left">Phone Number</FormLabel>
                  <FormControl className="w-full">
                    <PhoneInput
                      placeholder="Enter a phone number"
                      {...field}
                      defaultCountry="BD"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full cursor-pointer">
              Subscribe
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
