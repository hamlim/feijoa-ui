import { ThemeToggle } from 'feijoa-ui'
import type { ReactNode } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from 'feijoa-ui'
import { HardHat, FlaskConical, Citrus } from 'lucide-react'
import { Heading } from 'feijoa-ui'
import NextLink, { LinkProps } from 'next/link'
import { cn } from 'feijoa-ui'
import { Container } from 'feijoa-ui'

interface ListItemProps extends Omit<LinkProps<string>, 'title'> {
  className?: string
  title: ReactNode
  children: ReactNode
}

function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <NextLink
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </NextLink>
      </NavigationMenuLink>
    </li>
  )
}

export function LargeNav() {
  return (
    <div className="hidden md:flex mt-4">
      <Container className="flex justify-between items-baseline">
        <div className="flex items-baseline">
          <Heading is="h1" className="mr-4">
            Feijoa UI
          </Heading>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NextLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Citrus />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          feijoa-ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A barebones UI component recipe-kit.
                        </p>
                      </NextLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using shadcn/ui, Radix UI and
                      Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/components" title="Components">
                      Start adding components to your application
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                    <li className="row-span-3">
                      <NextLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/sandbox"
                      >
                        <HardHat />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Sandbox
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A live editor experience with all the components!
                        </p>
                      </NextLink>
                    </li>
                    <li className="row-span-3">
                      <NextLink
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/kitchen-sink"
                      >
                        <FlaskConical />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Kitchen Sink
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A few pre-built examples using the components!
                        </p>
                      </NextLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ThemeToggle />
      </Container>
    </div>
  )
}
