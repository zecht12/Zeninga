import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ButtonProps, buttonVariants } from "@/components/ui/button"

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
  color?: "black" | "white"
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  color = "black",
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      color === "black"
        ? "text-slate-100 hover:text-black"
        : "text-black hover:text-slate-700",
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  color = "black",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { color?: "black" | "white" }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    color={color}
    className={cn(
      "gap-1 pl-2.5",
      color === "black" ? "text-slate-100 hover:text-black" : "text-black hover:text-slate-700",
      className
    )}
    {...props}
  >
    <ChevronLeftIcon className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  color = "black",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { color?: "black" | "white" }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    color={color}
    className={cn(
      "gap-1 pr-2.5",
      color === "black" ? "text-slate-100 hover:text-black" : "text-black hover:text-slate-700",
      className
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  color = "black",
  ...props
}: React.ComponentProps<"span"> & { color?: "black" | "white" }) => (
  <span
    aria-hidden
    className={cn(
      "flex h-9 w-9 items-center justify-center",
      color === "black" ? "text-slate-100 hover:text-black" : "text-black hover:text-slate-700",
      className
    )}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
