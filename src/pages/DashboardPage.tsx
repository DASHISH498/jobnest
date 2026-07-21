import { Link } from "react-router";
import ProfileCard from "../components/dashboard/ProfileCard";
import TopCompanyCard from "../components/dashboard/TopCompanyCard";
import ApplicationTable from "../components/dashboard/ApplicationTable";
import {
  BriefcaseBusiness,
  Bookmark,
  UserRound,
  Search,
  Heart,
  FileText,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

import QuickActionCard from "../components/dashboard/QuickActionCard";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  const stats = [
    {
      title: "Applications",
      value: "12",
      icon: BriefcaseBusiness,
      color: "bg-cyan-500",
    },
    {
      title: "Saved Jobs",
      value: "08",
      icon: Bookmark,
      color: "bg-violet-500",
    },
    {
      title: "Profile",
      value: "100%",
      icon: UserRound,
      color: "bg-emerald-500",
    },
  ];

  const jobs = [
    {
      company: "Google",
      role: "Frontend Developer",
      salary: "₹18-25 LPA",
      location: "Bangalore",
    },
    {
      company: "Microsoft",
      role: "React Developer",
      salary: "₹22-30 LPA",
      location: "Hyderabad",
    },
    {
      company: "Adobe",
      role: "UI Engineer",
      salary: "₹15-20 LPA",
      location: "Noida",
    },
  ];

  const activities = [
    "Applied for Frontend Developer",
    "Saved React Developer",
    "Logged into JobNest",
  ];

  const companies = [
    {
      company: "Google",
      openings: "24 Jobs",
      location: "Bangalore",
    },
    {
      company: "Microsoft",
      openings: "18 Jobs",
      location: "Hyderabad",
    },
    {
      company: "Adobe",
      openings: "12 Jobs",
      location: "Noida",
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Card className="border border-zinc-800 bg-linear-to-r from-cyan-500/10 via-zinc-900 to-violet-500/10 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-zinc-400">Welcome Back 👋</p>

              <h1 className="mt-2 text-4xl font-bold text-white">
                {user?.name}
              </h1>

              <p className="mt-3 max-w-2xl text-zinc-400">
                Manage your applications, save interesting jobs and discover
                your next opportunity.
              </p>
            </div>

            <Link to="/jobs">
              <Button>Browse Jobs</Button>
            </Link>
          </div>
        </Card>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              title={item.title}
              value={item.value}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border border-zinc-800 p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Recommended Jobs
                </h2>

                <Link to="/jobs" className="text-cyan-400">
                  View All
                </Link>
              </div>

              <div className="mt-6 space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.role}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-cyan-500"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {job.role}
                        </h3>

                        <p className="mt-1 text-zinc-400">{job.company}</p>

                        <p className="mt-2 text-sm text-zinc-500">
                          {job.location} • {job.salary}
                        </p>
                      </div>

                      <Button>Apply</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border border-zinc-800 p-6">
              <h2 className="text-2xl font-bold text-white">Quick Actions</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <QuickActionCard
                  title="Browse Jobs"
                  description="Explore latest openings."
                  icon={Search}
                  to="/jobs"
                />

                <QuickActionCard
                  title="Saved Jobs"
                  description="View all saved jobs."
                  icon={Heart}
                  to="/jobs"
                />

                <QuickActionCard
                  title="Applications"
                  description="Track your applications."
                  icon={FileText}
                  to="/dashboard"
                />
              </div>
            </Card>

            <Card className="border border-zinc-800 p-6">
              <h2 className="text-2xl font-bold text-white">
                Top Companies Hiring
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {companies.map((company) => (
                  <TopCompanyCard
                    key={company.company}
                    company={company.company}
                    openings={company.openings}
                    location={company.location}
                  />
                ))}
              </div>
            </Card>
            <ApplicationTable />
          </div>

          <div className="space-y-6">
            <ProfileCard />

            <Card className="border border-zinc-800 p-6">
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

              <div className="mt-6 space-y-5">
                {activities.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CircleCheckBig className="mt-1 text-emerald-400" />

                    <div>
                      <p className="text-white">{item}</p>

                      <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                        <Clock3 size={14} />
                        Just Now
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <Button fullWidth onClick={logout}>
                  Logout
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
