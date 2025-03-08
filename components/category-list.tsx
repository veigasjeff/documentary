// import Link from "next/link"
// import { Film, History, Microscope, Cpu, Users, Palette, Trophy, Compass } from "lucide-react"

// const categories = [
//   {
//     name: "Nature",
//     icon: <Film className="h-6 w-6" />,
//     href: "/category/nature",
//     color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
//   },
//   {
//     name: "History",
//     icon: <History className="h-6 w-6" />,
//     href: "/category/history",
//     color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
//   },
//   {
//     name: "Science",
//     icon: <Microscope className="h-6 w-6" />,
//     href: "/category/science",
//     color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
//   },
//   {
//     name: "Technology",
//     icon: <Cpu className="h-6 w-6" />,
//     href: "/category/technology",
//     color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
//   },
//   {
//     name: "Society",
//     icon: <Users className="h-6 w-6" />,
//     href: "/category/society",
//     color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
//   },
//   {
//     name: "Art",
//     icon: <Palette className="h-6 w-6" />,
//     href: "/category/art",
//     color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
//   },
//   {
//     name: "Sports",
//     icon: <Trophy className="h-6 w-6" />,
//     href: "/category/sports",
//     color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
//   },
//   {
//     name: "Travel",
//     icon: <Compass className="h-6 w-6" />,
//     href: "/category/travel",
//     color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
//   },
// ]

// export function CategoryList() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {categories.map((category) => (
//         <Link
//           key={category.name}
//           href={category.href}
//           className="flex flex-col items-center justify-center p-6 rounded-lg transition-all hover:scale-105 hover:shadow-md"
//         >
//           <div className={`p-4 rounded-full ${category.color} mb-3`}>{category.icon}</div>
//           <span className="font-medium">{category.name}</span>
//         </Link>
//       ))}
//     </div>
//   )
// }

import Link from "next/link"
import { Film, History, Microscope, Cpu, Users, ShieldAlert, Trophy, Globe } from "lucide-react"

const categories = [
  {
    name: "Movies",
    icon: <Film className="h-6 w-6" />,
    href: "/category/movies",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    name: "History",
    icon: <History className="h-6 w-6" />,
    href: "/category/history",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    name: "Science",
    icon: <Microscope className="h-6 w-6" />,
    href: "/category/science",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    name: "Technology",
    icon: <Cpu className="h-6 w-6" />,
    href: "/category/technology",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    name: "Society",
    icon: <Globe className="h-6 w-6" />, // Changed from Users to Globe
    href: "/category/society",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
},
{
    name: "Crime",
    icon: <ShieldAlert className="h-6 w-6" />, // Changed from Palette to ShieldAlert
    href: "/category/crime",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    name: "Sports",
    icon: <Trophy className="h-6 w-6" />,
    href: "/category/sports",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    name: "Biography",
    icon: <Users className="h-6 w-6" />,
    href: "/category/biography",
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  },
  
]

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex flex-col items-center justify-center p-6 rounded-lg transition-all hover:scale-105 hover:shadow-md"
        >
          <div className={`p-4 rounded-full ${category.color} mb-3`}>{category.icon}</div>
          <span className="font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

