import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export default function ApplicationSuccessPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center">
        <CheckCircle2
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-8 text-4xl font-bold">
          Application Submitted Successfully 🎉
        </h1>

        <p className="mt-5 leading-8 text-zinc-400">
          Thank you for applying.
          <br />
          Your application has been submitted successfully.
          <br />
          Our recruitment team will review your profile and contact you if you
          are shortlisted.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/jobs"
            className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-cyan-500"
          >
            Browse More Jobs
          </Link>

          <Link
            to="/"
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}