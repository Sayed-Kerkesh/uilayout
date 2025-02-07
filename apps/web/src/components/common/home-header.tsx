'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Github,
  MonitorSmartphone,
  Moon,
  MoonIcon,
  Sun,
  SunIcon,
} from 'lucide-react'
import { Button } from '../ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { techIcons } from '@/assets/icons'
import MobileHeader from './moibile-header'
import { SearchDialog } from './search-bar'
import GitHubButton from '@/registry/components/github-repo-btn/github-repo-btn'
import { useRecentPagesStore } from '@/hooks/use-zust-store'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Timeline Animation',
    href: 'components/timeline-animation',
    description:
      'When you scroll down to that specific section, all the animations will slowly play one after another.',
  },
  {
    title: 'Hover Card',
    href: '/components/hover-cards',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Dialog',
    href: 'components/dialog',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Text Scroll Animation ',
    href: 'components/text-animation',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: 'components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Image Mousetrail',
    href: '/components/image-mousetrail',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

function HomeHeader() {
  const { setTheme } = useTheme()
  const { addVisitedPage, getRecentPages } = useRecentPagesStore()

  const recentPages = getRecentPages()
  console.log(recentPages)

  return (
    <>
      <header className=" dark:bg-base-dark/20 bg-white/40 w-full fixed z-20 top-0 left-0 border-b-[1px] border-border py-3 backdrop-blur-lg">
        <div className=" container px-4 sm:px-6 lg:px-8 relative mx-auto flex justify-between items-center">
          <MobileHeader />
          <Link href="/">
            {/* <Image src="/logo.png" alt="logo" width={35} height={35} /> */}
            <div className="relative lg:flex hidden gap-2 ">
              <div className="2xl:w-7 2xl:h-7 w-6 h-6 mx-auto dark:bg-white bg-black rounded-sm before:absolute relative before:w-full before:h-full dark:before:bg-white/50 before:bg-black/50 before:rounded-sm 2xl:before:-top-1.5 before:-top-1 2xl:before:-left-1.5 before:-left-1"></div>
              <h1 className="2xl:text-2xl text-2xl font-semibold">UI-LAYOUT</h1>
              <span className="dark:bg-gray-100 bg-gray-300 dark:text-black text-black font-medium  px-2 rounded-[0.15em] text-xs absolute -top-2 -right-12">
                beta
              </span>
            </div>
          </Link>
          <div className="flex gap-2">
            <div className="lg:block hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/get-started" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Getting started
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <Link href="/components">Components</Link>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {recentPages.length !== 0 && (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Recent Visit
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex w-[400px] flex-wrap justify-between gap-3 p-4 md:w-[500px]  lg:w-[600px] ">
                          {recentPages.map((component) => (
                            <ListItem
                              key={component.id}
                              title={component.name}
                              href={component.id}
                            >
                              {component.name}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <SearchDialog />
            <a
              target="_blank"
              href="https://github.com/naymurdev/uilayout"
              className="border w-10  place-content-center rounded-md sm:hidden grid bg-primary text-primary-foreground"
            >
              <Github />
            </a>
            <GitHubButton
              username="naymurdev"
              repo="uilayout"
              classname="sm:flex hidden "
            />
            <a
              target="_blank"
              href="https://x.com/naymur_dev"
              className="border bg-primary  text-primary-foreground text-2xl w-10   sm:grid hidden place-content-center    rounded-md"
            >
              <svg
                width="120"
                height="109"
                viewBox="0 0 120 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-primary-foreground w-6 h-5"
              >
                <path d="M94.5068 0H112.907L72.7076 46.172L120 109H82.9692L53.9674 70.8942L20.7818 109H2.3693L45.3666 59.6147L0 0H37.9685L64.1848 34.8292L94.5068 0ZM88.0484 97.9318H98.2448L32.4288 10.4872H21.4882L88.0484 97.9318Z" />
              </svg>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" /> Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" /> Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <MonitorSmartphone className="mr-2 h-4 w-4" /> System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
export default HomeHeader
