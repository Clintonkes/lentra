import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
}

export default function StarRating({ rating, size = "sm" }: StarRatingProps) {
  const starSize = size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < rating
              ? "text-copper-400 fill-copper-400"
              : "text-navy-200"
          }`}
        />
      ))}
    </div>
  );
}
