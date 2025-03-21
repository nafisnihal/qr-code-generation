"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get("phone");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 border rounded-md flex flex-col items-center justify-center gap-2">
        <h1 className="text-violet-800 text-2xl font-bold">
          Subscription Confirmed!
        </h1>
        {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
        <p className="text-green-700">
          Thank you for confirming your subscription.
        </p>
        <Link href="/" className="mt-2">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}