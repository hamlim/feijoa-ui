"use client";

import { cn } from "feijoa-ui";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "feijoa-ui";
import { ScrollArea } from "feijoa-ui";
import { Sheet, SheetContent, SheetTrigger } from "feijoa-ui";
import { ThemeToggle } from "feijoa-ui";
import { Citrus, FlaskConical, HardHat, MenuSquare } from "lucide-react";

export function SmallNav() {
  const [open, setOpen] = React.useState(false);
  let pathname = usePathname();

  return (
    <div className="md:hidden border-b-[1px] border-slate-400 border-solid">
      <div className="mx-4 flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <MenuSquare className="h-5 w-5  inline-flex mr-2" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileLink
              href="/"
              className={cn(
                pathname === "/" && "font-bold text-slate-400",
                "flex items-center",
              )}
              onOpenChange={setOpen}
            >
              <Citrus className="h-5 w-5  inline-flex mr-2" />
              <span className="font-bold">Feijoa UI</span>
            </MobileLink>
            <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                <MobileLink
                  href="/docs"
                  className={pathname === "/docs" ? "font-bold text-slate-400" : ""}
                  onOpenChange={setOpen}
                >
                  Introduction
                </MobileLink>
                <MobileLink
                  href="/docs/installation"
                  className={pathname === "/docs/installation"
                    ? "font-bold text-slate-400"
                    : ""}
                  onOpenChange={setOpen}
                >
                  Installation
                </MobileLink>
                <MobileLink
                  href="/docs/components"
                  className={pathname === "/docs/components"
                    ? "font-bold text-slate-400"
                    : ""}
                  onOpenChange={setOpen}
                >
                  Components
                </MobileLink>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-3 pt-6">
                  <h4 className="font-medium">Explore</h4>

                  <MobileLink
                    href="/sandbox"
                    onOpenChange={setOpen}
                    className="text-muted-foreground"
                  >
                    <HardHat className="h-5 w-5 inline-flex mr-2" /> Sandbox
                  </MobileLink>
                  <MobileLink
                    href="/kitchen-sink"
                    onOpenChange={setOpen}
                    className="text-muted-foreground"
                  >
                    <FlaskConical className="h-5 w-5  inline-flex mr-2" /> Kitchen Sink
                  </MobileLink>
                </div>
              </div>
            </ScrollArea>
            <ThemeToggle />
          </SheetContent>
        </Sheet>
        <h1 className="font-bold">Feijoa UI</h1>
      </div>
    </div>
  );
}

interface MobileLinkProps extends LinkProps<string> {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        // @ts-expect-error - doesn't play nicely with typed routes at the moment
        router.push(href);
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
