import { Mail, UserRound } from "lucide-react";
import Card from "../ui/Card";
import { useAuth } from "../../context/AuthContext";

export default function ProfileCard() {
  const { user } = useAuth();

  return (
    <Card className="border border-zinc-800 bg-zinc-900/70 p-6">
      <div className="flex flex-col items-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cyan-500/10">
          <UserRound
            size={46}
            className="text-cyan-400"
          />
        </div>

        <h2 className="mt-5 text-2xl font-bold text-white">
          {user?.name}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-zinc-400">
          <Mail size={16} />
          <span>{user?.email}</span>
        </div>

        <div className="mt-8 w-full">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-zinc-400">
              Profile Completion
            </span>

            <span className="text-sm font-semibold text-cyan-400">
              100%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

            <div className="h-full w-full rounded-full bg-cyan-500" />

          </div>

        </div>

      </div>
    </Card>
  );
}