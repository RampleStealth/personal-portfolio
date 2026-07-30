import { cn } from "@/lib/utils";

type LogoVariant = "icon" | "wordmark" | "lockup";
type LogoSize = "sm" | "md" | "lg";

const markSizes = { sm: "size-7 text-[22px]", md: "size-8 text-[25px]", lg: "size-10 text-[31px]" };
const wordmarkSizes = { sm: "text-base", md: "text-lg", lg: "text-2xl" };

type WongStudioLogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  monochrome?: boolean;
  label?: string;
  className?: string;
};

// Temporary portfolio identity: replace this component when Wong Design System branding is finalized.
export function WongStudioLogo({ variant = "lockup", size = "md", monochrome = false, label, className }: WongStudioLogoProps) {
  const accessibilityProps = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  const mark = <span className={cn("inline-grid shrink-0 place-items-center rounded-[10px] border font-display leading-none", markSizes[size], monochrome ? "border-current text-current" : "border-moss/70 text-ink")}><span className="-mt-0.5">W</span></span>;
  const wordmark = <span className={cn("font-display tracking-[-.03em]", wordmarkSizes[size])}>Wong Studio</span>;

  return <span className={cn("inline-flex items-center", variant === "lockup" && "gap-2.5", className)} {...accessibilityProps}>{variant !== "wordmark" && mark}{variant !== "icon" && wordmark}</span>;
}
