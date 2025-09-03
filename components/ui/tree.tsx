"use client";

import * as React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Tree = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1", className)}
    {...props}
  />
));
Tree.displayName = "Tree";

const TreeItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: string;
  }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative", className)}
    data-value={value}
    {...props}
  />
));
TreeItem.displayName = "TreeItem";

const TreeItemTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    expanded?: boolean;
  }
>(({ className, expanded, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    data-state={expanded ? "open" : "closed"}
    {...props}
  >
    {expanded ? (
      <ChevronDown className="h-4 w-4 shrink-0" />
    ) : (
      <ChevronRight className="h-4 w-4 shrink-0" />
    )}
    {children}
  </button>
));
TreeItemTrigger.displayName = "TreeItemTrigger";

const TreeItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm", className)}
    {...props}
  />
));
TreeItemContent.displayName = "TreeItemContent";

export { Tree, TreeItem, TreeItemTrigger, TreeItemContent }; 