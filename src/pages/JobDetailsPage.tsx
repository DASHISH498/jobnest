import { ArrowLeft } from "lucide-react";

export default function JobDetailsPage() {
  return (
    <section className="min-h-screen bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <button className="mb-10 flex items-center gap-2 text-zinc-400 transition hover:text-cyan-400">
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-6">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500 text-3xl font-bold text-black">
                G
              </div>

              <div>

                <p className="text-cyan-400">
                  Google
                </p>

                <h1 className="mt-2 text-5xl font-bold">
                  Senior React Developer
                </h1>

                <p className="mt-3 text-zinc-400">
                  Bangalore • Full Time • ₹18 LPA
                </p>

              </div>

            </div>

            <button className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
              Apply Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}