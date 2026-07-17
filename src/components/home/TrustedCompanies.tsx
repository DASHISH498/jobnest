const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Spotify",
  "Adobe",
  "AirBnb",
];

export default function TrustedCompanies() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-zinc-500">
          Trusted By Top Companies
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-white"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
