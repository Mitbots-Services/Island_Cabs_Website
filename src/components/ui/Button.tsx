import { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "outlineBlue";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "relative group inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold overflow-hidden transition-all duration-300";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "primary border-2 border-[var(--primary)] text-white hover:bg-[var(--secondary)] hover:text-white hover:border-[var(--secondary)]",

    secondary:
      "secondary text-white hover:text-[var(--primary)] hover:bg-[var(--bg)]",

    accent:
      "accent text-main hover:primary hover:text-white border-2 border-[var(--accent)]",

    outline:
      "border-2 border-primary text-[var(--bg)] bg-transparent hover:border-[var(--primary)]",
    outlineBlue:
      "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:border-[var(--primary)]",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {(variant === "outline" || variant === "outlineBlue") && (
        <span className="absolute inset-0 primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
      )}

      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
          variant === "outline" || variant === "outlineBlue"
            ? "group-hover:text-white"
            : ""
        }`}
      >
        {children}
      </span>
    </button>
  );
}
