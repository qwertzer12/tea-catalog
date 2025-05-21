import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="NavLink opacity-50 hover:opacity-100"
    >
      {children}
    </Link>
  );
}
