type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-500">
      <h2 className="text-5xl font-bold text-cyan-400">
        {value}
      </h2>

      <p className="mt-4 text-zinc-400">
        {label}
      </p>
    </div>
  );
}