import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        {
          "bg-cyan-500 text-black hover:bg-cyan-400": variant === "primary",
          "bg-zinc-800 text-white hover:bg-zinc-700": variant === "secondary",
          "border border-zinc-700 bg-transparent text-white hover:border-cyan-500 hover:text-cyan-400":
            variant === "outline",
          "bg-red-600 text-white hover:bg-red-500": variant === "danger",
          "w-full": fullWidth,
        },
        className
      )}
    >
      {children}
    </button>
  );
}