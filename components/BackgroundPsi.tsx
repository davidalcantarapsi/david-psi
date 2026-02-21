type BackgroundPsiProps = {
  className?: string;
  variant?: "primary" | "accent" | "light";
  size?: number;
};

const variantClasses = {
  primary: "text-primary-500",
  accent: "text-accent",
  light: "text-white",
};

export default function BackgroundPsi({
  className = "",
  variant = "primary",
  size = 640,
}: BackgroundPsiProps) {
  return (
    <span
      className={`pointer-events-none select-none font-serif italic opacity-[0.06] ${variantClasses[variant]} ${className}`}
      style={{ fontSize: size }}
      aria-hidden
    >
      Ψ
    </span>
  );
}
