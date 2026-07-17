import { Menu, BriefcaseBusiness } from "lucide-react";

const menus = [
  "Home",
  "Jobs",
  "Companies",
  "Categories",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-black">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              JobNest
            </h2>

            <p className="text-xs text-zinc-400">
              Find Your Dream Job
            </p>
          </div>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {menus.map((menu, index) => (
              <li key={menu}>
                <a
                  href="#"
                  className={`transition ${
                    index === 0
                      ? "font-semibold text-cyan-400"
                      : "text-zinc-300 hover:text-cyan-400"
                  }`}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-500">
            Login
          </button>

          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Sign Up
          </button>
        </div>

        {/* Mobile */}

        <button className="lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}