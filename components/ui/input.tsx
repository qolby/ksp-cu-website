import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border border-[#cbd5e1] bg-white px-4 py-3 text-base",
          "placeholder:text-[var(--color-medium-gray)]",
          "focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
