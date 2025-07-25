"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "~/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <div className="scrollbar-none overflow-x-auto">
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          "inline-flex w-max min-w-full items-center justify-start gap-2 rounded-lg p-1",
          "md:justify-center",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "rounded-full border border-transparent px-4 py-2 text-sm font-medium whitespace-nowrap transition",
        "hover:border-[#2969CA]",
        "data-[state=active]:border-white data-[state=active]:bg-[#2969CA] data-[state=active]:text-white",
        "md:px-6 md:text-base",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
