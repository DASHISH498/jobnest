interface EmptyStateProps {
  title: string;
  description?: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-700 p-10 text-center">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}