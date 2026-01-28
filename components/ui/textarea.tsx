import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg border border-[#cbd5e1] bg-white px-4 py-3 text-base",
          "placeholder:text-[var(--color-medium-gray)]",
          "focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
