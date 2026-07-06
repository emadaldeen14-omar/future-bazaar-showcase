import { Star } from "lucide-react";

export function StarRating({
  value,
  size = 16,
  className = "",
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`تقييم ${value} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = i === full && half;
        return (
          <span key={i} className="relative inline-flex">
            <Star size={size} className="text-muted-foreground/30" fill="currentColor" />
            {(filled || isHalf) && (
              <span
                className="absolute inset-0 overflow-hidden text-gold"
                style={{ width: isHalf ? "50%" : "100%" }}
              >
                <Star size={size} className="text-gold" fill="currentColor" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
