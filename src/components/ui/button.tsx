
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 hover:scale-[1.03] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#1e2d5a] via-[#374e96] to-[#6e82c2] text-white shadow-md before:from-[#374e96]/90 before:to-[#6e82c2]/90",
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
        sm: "h-9 rounded-full px-3",
        lg: "h-12 rounded-full px-8 text-base font-bold tracking-wider",
        xl: "h-14 rounded-full px-10 text-lg font-bold tracking-widest",
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
    // Elastic animation handler
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (btnRef.current) {
        btnRef.current.classList.remove("animate")
        void btnRef.current.offsetWidth
        btnRef.current.classList.add("animate")
      }
      if (props.onClick) props.onClick(e)
    }
    
    return (
      <Comp
        ref={(node: any) => {
          if (typeof ref === "function") ref(node)
          else if (ref) (ref as React.MutableRefObject<any>).current = node
          if (!asChild) btnRef.current = node
        }}
        className={cn(buttonVariants({ variant, size, className }), "button")}
        {...props}
        onClick={handleClick}
      >
        <span className="relative z-10">{props.children}</span>
        <span className="absolute top-[-50%] left-[-100%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-[25deg] transition-all duration-800 group-hover:left-[150%]"></span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
