import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Search,
  Users,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[850px] max-w-7xl flex-col items-center gap-20 px-6 py-24 lg:flex-row">
        {/* Left */}

        <div className="flex-1">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            🚀 India's Fastest Growing Job Portal
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight lg:text-7xl">
            Find Your
            <br />
            <span className="text-cyan-400">Dream Job With</span>
            <br />
            Confidence
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Explore thousands of verified jobs from top companies and get hired
            faster with JobNest.
          </p>

          {/* Search */}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-3">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-zinc-950 px-4">
                <Search size={20} />
                <input
                  placeholder="Job title..."
                  className="h-16 w-full bg-transparent outline-none"
                />
              </div>

              <div className="flex flex-1 items-center gap-3 rounded-xl bg-zinc-950 px-4">
                <Building2 size={20} />
                <input
                  placeholder="Location..."
                  className="h-16 w-full bg-transparent outline-none"
                />
              </div>

              <button className="flex h-16 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-10 font-semibold text-black transition hover:bg-cyan-400">
                Search
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap gap-10">
            <div>
              <h2 className="text-3xl font-bold">50K+</h2>
              <p className="text-zinc-400">Jobs</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">12K+</h2>
              <p className="text-zinc-400">Companies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">35K+</h2>
              <p className="text-zinc-400">Candidates</p>
            </div>
          </div>
        </div>

        {/* Right */}

        {/* Right */}

        <div className="relative hidden flex-1 lg:flex items-center justify-center">
          <div className="relative w-[480px]">
            {/* Main Card */}

            <div className="rounded-[32px] border border-zinc-800 bg-zinc-900/80 p-8 backdrop-blur">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-zinc-400">Weekly Hiring</p>
                  <h2 className="mt-2 text-4xl font-bold">2,500+</h2>
                </div>

                <div className="rounded-2xl bg-cyan-500 p-4 text-black">
                  <BriefcaseBusiness size={36} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-zinc-950 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 font-bold">
                      G
                    </div>

                    <div>
                      <h3 className="font-semibold">Google</h3>
                      <p className="text-sm text-zinc-400">
                        Senior React Developer
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                    Hiring
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-zinc-950 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 font-bold">
                      M
                    </div>

                    <div>
                      <h3 className="font-semibold">Microsoft</h3>
                      <p className="text-sm text-zinc-400">Frontend Engineer</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-400">
                    Remote
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-zinc-950 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 font-bold">
                      A
                    </div>

                    <div>
                      <h3 className="font-semibold">Amazon</h3>
                      <p className="text-sm text-zinc-400">UI Engineer</p>
                    </div>
                  </div>

                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-400">
                    Hybrid
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -left-16 top-20 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl">
              <Users className="mb-2 text-cyan-400" />
              <h3 className="text-2xl font-bold">15K+</h3>
              <p className="text-sm text-zinc-400">Candidates</p>
            </div>

            {/* Floating Card */}

            <div className="absolute -right-16 bottom-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-xl">
              <Building2 className="mb-2 text-cyan-400" />
              <h3 className="text-2xl font-bold">1200+</h3>
              <p className="text-sm text-zinc-400">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
