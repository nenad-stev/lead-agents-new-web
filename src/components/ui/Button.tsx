import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-black hover:bg-[var(--accent-hover)] hover:text-black focus-visible:ring-accent",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:text-accent",
  inverse:
    "bg-[#141416] text-white shadow-[0_8px_24px_-8px_rgb(0_0_0/0.55)] hover:bg-black hover:text-white focus-visible:ring-[#141416]",
  outlineInverse:
    "border-2 border-[#141416]/35 bg-transparent text-[#141416] hover:border-[#141416] hover:bg-[#141416]/8 focus-visible:ring-[#141416]",
};

type SharedProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

type ButtonAsLink = SharedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantClasses[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, variant: _variant, className: _className, children: _children, ...linkProps } =
      props;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    className: _className,
    children: _children,
    type = "button",
    ...buttonProps
  } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
