"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
)

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, type = "single", defaultValue, children, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<string[]>(() => {
      if (defaultValue) {
        return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
      }
      return []
    })

    const toggleItem = React.useCallback(
      (value: string) => {
        setOpenItems((prev) => {
          if (type === "single") {
            return prev.includes(value) ? [] : [value]
          }
          return prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        })
      },
      [type]
    )

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-b border-[var(--color-light-gray)]", className)}
        data-value={value}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, value, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("AccordionTrigger must be used within Accordion")
  }

  const isOpen = context.openItems.includes(value)

  return (
    <button
      ref={ref}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-semibold transition-colors hover:bg-[var(--color-soft-gray)]",
        className
      )}
      onClick={() => context.toggleItem(value)}
      {...props}
    >
      {children}
      <svg
        className={cn(
          "h-5 w-5 shrink-0 text-[var(--color-secondary)] transition-transform duration-200",
          isOpen && "rotate-180"
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    if (!context) {
      throw new Error("AccordionContent must be used within Accordion")
    }

    const isOpen = context.openItems.includes(value)

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
        {...props}
      >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
