import { cn } from "@/lib/utils";

interface TikTokIconProps {
  className?: string;
  size?: number;
}

export const TikTokIcon = ({ className, size = 24 }: TikTokIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("", className)}
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.032-.093 6.411 6.411 0 0 0-6.4 6.41 6.411 6.411 0 0 0 9.6 5.568V21.44a6.329 6.329 0 0 0 1.032.093 6.411 6.411 0 0 0 6.41-6.411V9.388a8.224 8.224 0 0 0 4.623 1.448V7.39a4.793 4.793 0 0 1-4.623-3.704h.623z"/>
    </svg>
  );
};