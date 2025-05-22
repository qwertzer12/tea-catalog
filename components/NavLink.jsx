"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`NavLink transition-colors ${
        isActive
          ? "text-green-800 dark:text-green-500" // Active tab colors
          : "text-black dark:text-white hover:text-green-700 dark:hover:text-green-300" // Inactive tab colors (default + hover)
      }`}
    >
      {children}
    </Link>
  );
}
