import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "jobs",
          element: <JobsPage />,
        },
        {
          path: "jobs/:id",
          element: <JobDetailsPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.PROD ? "/jobnest" : "/",
  }
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}