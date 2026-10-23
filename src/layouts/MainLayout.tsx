import { Outlet, useLocation } from "react-router";

export default function MainLayout() {
  const location = useLocation();
  const isApplyPage = /^\/jobs\/[^/]+\/apply\/?$/.test(location.pathname);

  return (
    <div
      className={
        isApplyPage
          ? "fixed inset-0 overflow-hidden bg-zinc-950 text-white"
          : "min-h-screen bg-zinc-950 text-white"
      }
    >
      <Outlet />
    </div>
  );
}