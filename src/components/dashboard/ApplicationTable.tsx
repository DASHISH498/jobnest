import { useMemo } from "react";
import { Link } from "react-router";
import Card from "../ui/Card";
import { getApplications } from "../../utils/applications";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusClass(status: string) {
  switch (status) {
    case "Shortlisted":
      return "bg-emerald-500/10 text-emerald-400";

    case "Under Review":
      return "bg-amber-500/10 text-amber-400";

    case "Rejected":
      return "bg-red-500/10 text-red-400";

    default:
      return "bg-cyan-500/10 text-cyan-400";
  }
}

export default function ApplicationTable() {
  const applications = useMemo(() => getApplications(), []);

  return (
    <Card className="border border-zinc-800 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-white">
          Recent Applications
        </h2>

        <span className="text-sm text-zinc-400">
          Total: {applications.length}
        </span>
      </div>

      {applications.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          <p className="text-lg font-semibold text-white">
            No applications yet
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            Apply for a job and your application details will appear here.
          </p>

          <Link
            to="/jobs"
            className="mt-5 inline-flex rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-400"
          >
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="pb-4 text-left text-sm font-medium text-zinc-500">
                  Company
                </th>

                <th className="pb-4 text-left text-sm font-medium text-zinc-500">
                  Role
                </th>

                <th className="pb-4 text-left text-sm font-medium text-zinc-500">
                  Applied
                </th>

                <th className="pb-4 text-left text-sm font-medium text-zinc-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b border-zinc-800 last:border-0"
                >
                  <td className="py-5 font-medium text-white">
                    {application.company}
                  </td>

                  <td className="py-5 text-zinc-300">
                    {application.jobTitle}
                  </td>

                  <td className="py-5 text-zinc-400">
                    {formatDate(application.appliedAt)}
                  </td>

                  <td className="py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${getStatusClass(
                        application.status,
                      )}`}
                    >
                      {application.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}