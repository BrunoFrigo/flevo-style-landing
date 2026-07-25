export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand shadow-brand">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
          <path
            d="M6 20c1.5-7 3-11.5 6-13.6C14.1 4.9 16.5 4.6 19 5c-1.4 1.9-3.2 3-5.6 3.6C10 9.6 8.3 12 7.4 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            className="text-primary-foreground"
          />
          <path
            d="M8.5 12.5h7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            className="text-primary-foreground"
          />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-foreground">
        Flevo<span className="text-primary">Pay</span>
      </span>
    </span>
  );
}
