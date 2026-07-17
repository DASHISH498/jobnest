import FeaturedJobs from "../components/home/FeaturedJobs";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <section className="border-b border-zinc-800 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Browse Jobs
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Find Your Dream Job
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Search thousands of verified jobs from top companies across India.
          </p>
        </div>
      </section>

      <FeaturedJobs />
    </main>
  );
}