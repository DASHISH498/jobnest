import { HTMLAttributes } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export default function Card({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-3xl border border-zinc-800 bg-zinc-900",
        className
      )}
    >
      {children}
    </div>
  );
}