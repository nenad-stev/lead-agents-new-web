import Image from "next/image";

type SalesToolLogoProps = {
  name: string;
  logo: string;
  size?: "sm" | "md" | "lg";
  fit?: "cover" | "contain";
};

const sizeClasses = {
  sm: "h-12 w-12 rounded-xl",
  md: "h-16 w-16 rounded-2xl",
  lg: "h-20 w-20 rounded-2xl",
};

const imageSizes = {
  sm: 48,
  md: 64,
  lg: 80,
};

export function SalesToolLogo({
  name,
  logo,
  size = "sm",
  fit = "cover",
}: SalesToolLogoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-border/80 bg-background ${sizeClasses[size]}`}
    >
      <Image
        src={logo}
        alt={name}
        fill
        className={fit === "contain" ? "object-contain p-1.5" : "object-cover"}
        sizes={`${imageSizes[size]}px`}
      />
    </div>
  );
}
