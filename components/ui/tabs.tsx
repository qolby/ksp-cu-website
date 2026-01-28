"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, defaultValue, value, onValueChange, children, ...props },
    ref
  ) => {
    const [activeTab, setActiveTab] = React.useState(value || defaultValue)

    React.useEffect(() => {
      if (value !== undefined) {
        setActiveTab(value)
      }
    }, [value])

    const handleSetActiveTab = React.useCallback(
      (newValue: string) => {
        setActiveTab(newValue)
        onValueChange?.(newValue)
      },
      [onValueChange]
    )

    return (
      <TabsContext.Provider
        value={{ activeTab, setActiveTab: handleSetActiveTab }}
      >
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-12 items-center justify-center rounded-lg bg-[var(--color-soft-gray)] p-1",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) {
      throw new Error("TabsTrigger must be used within Tabs")
    }

    const isActive = context.activeTab === value

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          isActive
            ? "bg-white text-[var(--color-dark-slate)] shadow-sm border-b-2 border-[var(--color-accent)]"
            : "text-[var(--color-medium-gray)] hover:text-[var(--color-dark-slate)]",
          className
        )}
        onClick={() => context.setActiveTab(value)}
        {...props}
      />
    )
  }
)
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext)
    if (!context) {
      throw new Error("TabsContent must be used within Tabs")
    }

    if (context.activeTab !== value) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn("mt-4 focus-visible:outline-none", className)}
        {...props}
      />
    )
  }
)
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
