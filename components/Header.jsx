import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="border-b-2 border-green-300 dark:border-green-700 bg-green-50 dark:bg-[#182818]">
      <div className="flex items-center px-4">
        <div className="flex-1">
          {/* Spacer, helps to center */}
        </div>
        <h2 className="text-2xl text-green-950 dark:text-green-100 py-5 text-center">
          Tea Collection
        </h2>
        <div className="flex-1 flex justify-end">
          <nav>
            <ul className="flex space-x-4 text-sm">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink href="/collection">Collection</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
