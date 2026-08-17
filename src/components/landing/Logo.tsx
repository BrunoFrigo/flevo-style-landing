import logoAsset from "@/assets/veriox-logo.jpg.asset.json";

export function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoAsset.url}
        alt="VerioxPay"
        className="size-9 rounded-[10px] object-cover shadow-brand"
      />
      <span className={`text-xl font-extrabold tracking-tight ${inverted ? "text-ink-foreground" : "text-foreground"}`}>
        Veriox<span className="text-primary">Pay</span>
      </span>
    </span>
  );
}
