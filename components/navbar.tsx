// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ThemeToggle } from "@/components/theme-toggle"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
// import { Search, Menu, X, Film, History, Award, Bookmark } from "lucide-react"
// import { cn } from "@/lib/utils"

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [showSearch, setShowSearch] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const toggleSearch = () => {
//     setShowSearch(!showSearch)
//   }

//   const categories = [
//     { name: "Nature", href: "/category/nature", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "History", href: "/category/history", icon: <History className="h-4 w-4 mr-2" /> },
//     { name: "Science", href: "/category/science", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "Technology", href: "/category/technology", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "Society", href: "/category/society", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "Art", href: "/category/art", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "Sports", href: "/category/sports", icon: <Film className="h-4 w-4 mr-2" /> },
//     { name: "Travel", href: "/category/travel", icon: <Film className="h-4 w-4 mr-2" /> },
//   ]

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full transition-all duration-300",
//         isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent",
//       )}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center space-x-2">
//               <Film className="h-6 w-6 text-primary" />
//               <span className="font-bold text-xl">BestDocs</span>
//             </Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-1">
//             <NavigationMenu>
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <Link href="/" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
//                       Home
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <Link href="/documentaries" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/documentaries"}>
//                       All Documentaries
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
//                   <NavigationMenuContent>
//                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
//                       {categories.map((category) => (
//                         <li key={category.name}>
//                           <Link
//                             href={category.href}
//                             className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                           >
//                             <div className="flex items-center">
//                               {category.icon}
//                               <div className="text-sm font-medium leading-none">{category.name}</div>
//                             </div>
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <Link href="/featured" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/featured"}>
//                       <Award className="h-4 w-4 mr-2" />
//                       Featured
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//                 <NavigationMenuItem>
//                   <Link href="/watchlist" legacyBehavior passHref>
//                     <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/watchlist"}>
//                       <Bookmark className="h-4 w-4 mr-2" />
//                       Watchlist
//                     </NavigationMenuLink>
//                   </Link>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           <div className="flex items-center space-x-2">
//             {showSearch ? (
//               <div className="relative">
//                 <Input
//                   type="search"
//                   placeholder="Search documentaries..."
//                   className="w-[200px] lg:w-[300px]"
//                   autoFocus
//                 />
//                 <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full" onClick={toggleSearch}>
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//             ) : (
//               <Button size="icon" variant="ghost" onClick={toggleSearch}>
//                 <Search className="h-5 w-5" />
//                 <span className="sr-only">Search</span>
//               </Button>
//             )}

//             <ThemeToggle />

//             <Button variant="outline" className="hidden md:flex">
//               Sign In
//             </Button>

//             <Button className="hidden md:flex">Sign Up</Button>

//             <Button size="icon" variant="ghost" className="md:hidden" onClick={toggleMenu}>
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-background md:hidden">
//           <div className="flex h-16 items-center justify-between px-4">
//             <Link href="/" className="flex items-center space-x-2">
//               <Film className="h-6 w-6 text-primary" />
//               <span className="font-bold text-xl">BestDocs</span>
//             </Link>
//             <Button size="icon" variant="ghost" onClick={toggleMenu}>
//               <X className="h-6 w-6" />
//               <span className="sr-only">Close menu</span>
//             </Button>
//           </div>

//           <nav className="px-4 py-6">
//             <ul className="space-y-6">
//               <li>
//                 <Link href="/" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/documentaries" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
//                   All Documentaries
//                 </Link>
//               </li>
//               <li>
//                 <div className="text-lg font-medium mb-2">Categories</div>
//                 <ul className="grid grid-cols-2 gap-2 pl-4">
//                   {categories.map((category) => (
//                     <li key={category.name}>
//                       <Link
//                         href={category.href}
//                         className="flex items-center text-muted-foreground hover:text-foreground"
//                         onClick={toggleMenu}
//                       >
//                         {category.icon}
//                         {category.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//               <li>
//                 <Link href="/featured" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
//                   <Award className="h-5 w-5 mr-2" />
//                   Featured
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/watchlist" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
//                   <Bookmark className="h-5 w-5 mr-2" />
//                   Watchlist
//                 </Link>
//               </li>
//             </ul>

//             <div className="mt-8 space-y-4">
//               <Button variant="outline" className="w-full">
//                 Sign In
//               </Button>
//               <Button className="w-full">Sign Up</Button>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Search, Menu, X, Film, History, Award, Bookmark, Users , Trophy, ShieldAlert, Globe, Cpu, Microscope } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const categories = [
    { name: "Crime", href: "/category/crime", icon: <ShieldAlert className="h-4 w-4 mr-2" /> },
    { name: "History", href: "/category/history", icon: <History className="h-4 w-4 mr-2" /> },
    { name: "Science", href: "/category/science", icon: <Microscope className="h-4 w-4 mr-2" /> },
    { name: "Technology", href: "/category/technology", icon: <Cpu className="h-4 w-4 mr-2" /> },
    { name: "Society", href: "/category/society", icon: <Globe className="h-4 w-4 mr-2" /> },
    { name: "Movies", href: "/category/movies", icon: <Film className="h-4 w-4 mr-2" /> },
    { name: "Sports", href: "/category/sports", icon: <Trophy className="h-4 w-4 mr-2" /> },
    { name: "Biography", href: "/category/biography", icon: <Users className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">BestDocs</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/documentaries" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/documentaries"}>
                      All Documentaries
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link
                            href={category.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center">
                              {category.icon}
                              <div className="text-sm font-medium leading-none">{category.name}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/featured" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/featured"}>
                      <Award className="h-4 w-4 mr-2" />
                      Featured
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/watchlist" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/watchlist"}>
                      <Bookmark className="h-4 w-4 mr-2" />
                      Watchlist
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-2">
            {showSearch ? (
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search documentaries..."
                  className="w-[200px] lg:w-[300px]"
                  autoFocus
                />
                <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full" onClick={toggleSearch}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button size="icon" variant="ghost" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <ThemeToggle />

            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>

            <Button className="hidden md:flex">Sign Up</Button>

            <Button size="icon" variant="ghost" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <Film className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">BestDocs</span>
            </Link>
            <Button size="icon" variant="ghost" onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <nav className="px-4 py-6">
            <ul className="space-y-6">
              <li>
                <Link href="/" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/documentaries" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
                  All Documentaries
                </Link>
              </li>
              <li>
                <div className="text-lg font-medium mb-2">Categories</div>
                <ul className="grid grid-cols-2 gap-2 pl-4">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={category.href}
                        className="flex items-center text-muted-foreground hover:text-foreground"
                        onClick={toggleMenu}
                      >
                        {category.icon}
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/featured" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
                  <Award className="h-5 w-5 mr-2" />
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="flex items-center text-lg font-medium" onClick={toggleMenu}>
                  <Bookmark className="h-5 w-5 mr-2" />
                  Watchlist
                </Link>
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">Sign Up</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

