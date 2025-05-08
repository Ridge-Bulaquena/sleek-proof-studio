
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:scale-[1.02] active:scale-[0.98] before:bg-gradient-to-r",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 before:from-primary/80 before:to-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 before:from-destructive/80 before:to-destructive",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground before:from-muted/50 before:to-muted/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 before:from-secondary/80 before:to-secondary",
        ghost: "hover:bg-accent hover:text-accent-foreground before:from-accent/50 before:to-accent/10",
        link: "text-primary underline-offset-4 hover:underline before:opacity-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
