import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";

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
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out";

  const variants: Record<ButtonVariant, string> = {
    primary: "primary text-white",
    secondary: "secondary text-white",
    accent: "accent text-main",
    outline: "border-2 border-primary text-primary bg-transparent",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}