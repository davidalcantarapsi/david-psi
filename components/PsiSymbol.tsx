type PsiSymbolProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light" | "accent";
  ariaHidden?: boolean;
};

const sizeClasses = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
};

const variantClasses = {
  default: "text-primary-500/70",
  light: "text-white/60",
  accent: "text-accent/60",
};

export default function PsiSymbol({
  className = "",
  size = "md",
  variant = "default",
  ariaHidden = true,
}: PsiSymbolProps) {
  return (
    <span
      className={`font-serif italic ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden={ariaHidden}
    >
      Ψ
    </span>
  );
}
