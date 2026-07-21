import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import ApplyJobPage from "../pages/ApplyJobPage";
import ApplicationSuccessPage from "../pages/ApplicationSuccessPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

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
        {
          path: "jobs/:id/apply",
          element: <ApplyJobPage />,
        },
        {
          path: "application-success",
          element: <ApplicationSuccessPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
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