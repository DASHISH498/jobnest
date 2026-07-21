import { Menu, BriefcaseBusiness } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const menus = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Jobs",
    path: "/jobs",
  },
  {
    title: "Companies",
    path: "/companies",
  },
  {
    title: "Categories",
    path: "/categories",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {menus.map((menu) => (
              <li key={menu.title}>
                <Link
                  to={menu.path}
                  className="text-zinc-300 transition hover:text-cyan-400"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {!user ? (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-500"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="rounded-xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-500"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <button className="lg:hidden">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}