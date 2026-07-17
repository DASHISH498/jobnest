import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Browse By Category
          </h2>

          <p className="mt-4 text-zinc-400">
            Find jobs based on your favourite technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              jobs={category.jobs}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}