import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <section className="z-10 flex mx-auto flex-col items-center gap-5 text-center">
        <div className="z-10 flex w-full flex-col items-center gap-5 text-center">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            QR Code Subscription Form
          </h1>
          <p className="max-w-[450px] text-muted-foreground">
            Enter your phone number to generate a <b>QR code</b> for
            subscription confirmation. Scan the QR code to verify.
          </p>
        </div>
        <Subscribe />
      </section>
    </div>
  );
}
