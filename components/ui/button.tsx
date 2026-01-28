import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            // Primary button
            "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-dark)] hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-[var(--color-accent)]":
              variant === "primary",
            // Secondary button
            "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white focus-visible:ring-[var(--color-primary)]":
              variant === "secondary",
            // Ghost button
            "text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-light-gray)] focus-visible:ring-[var(--color-primary)]":
              variant === "ghost",
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
