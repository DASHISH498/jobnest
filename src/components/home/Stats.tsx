import { stats } from "../../data/stats";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.id}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}