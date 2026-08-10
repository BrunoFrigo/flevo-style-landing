export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand shadow-brand">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            d="M3.5 5h4.2l4.3 10.4L16.3 5h4.2l-6.4 14.4a2.4 2.4 0 0 1-4.4 0L3.5 5Z"
            fill="currentColor"
            className="text-primary-foreground"
          />
        </svg>
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${inverted ? "text-ink-foreground" : "text-foreground"}`}>
        Veriox<span className="text-primary">Pay</span>
      </span>
    </span>
  );
}
