import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="NavLink text-black dark:text-white hover:text-green-700 dark:hover:text-green-300 transition-colors"
    >
      {children}
    </Link>
  );
}
