import Card from "../ui/Card";

const applications = [
  {
    company: "Google",
    role: "Frontend Developer",
    date: "20 Jul 2026",
    status: "Interview",
  },
  {
    company: "Microsoft",
    role: "React Developer",
    date: "18 Jul 2026",
    status: "Applied",
  },
  {
    company: "Adobe",
    role: "UI Engineer",
    date: "15 Jul 2026",
    status: "Shortlisted",
  },
  {
    company: "Amazon",
    role: "Frontend Engineer",
    date: "12 Jul 2026",
    status: "Rejected",
  },
];

export default function ApplicationTable() {
  return (
    <Card className="border border-zinc-800 p-6">
      <h2 className="text-2xl font-bold text-white">
        Recent Applications
      </h2>

      <div className="mt-6 overflow-x-auto">

        <table className="w-full">

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

            {applications.map((item) => (
              <tr
                key={item.company}
                className="border-b border-zinc-800 last:border-0"
              >
                <td className="py-5 text-white">
                  {item.company}
                </td>

                <td className="py-5 text-zinc-300">
                  {item.role}
                </td>

                <td className="py-5 text-zinc-400">
                  {item.date}
                </td>

                <td className="py-5">

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400">
                    {item.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}