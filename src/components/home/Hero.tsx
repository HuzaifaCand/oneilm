import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center flex items-center justify-center">
        <div className="space-y-3">
          <h1 className="font-bold tracking-tight text-4xl md:text-5xl text-primary">
            Introducing One<span className="">ilm</span>
          </h1>
          <p className="text-sm sm:text-lg text-primary">
            Your All in <strong>One</strong> Solution to Scaling Your Teaching
            Business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 gap-4  ">
            <Link
              href="/pricing"
              className="bg-secondary font-medium w-full sm:w-60 rounded-lg py-3 text-sm shadow-md text-white"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="bg-accent font-medium  rounded-lg w-full sm:w-60 py-3 text-sm text-primary shadow-sm font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
