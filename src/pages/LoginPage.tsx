import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    const users: User[] = JSON.parse(
      localStorage.getItem("jobnest-user") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!user) {
      alert("Invalid email or password.");
      return;
    }

    login({
      name: user.name,
      email: user.email,
    });

    alert("Login Successful.");

    navigate("/dashboard");
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-12">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-zinc-400">
          Login to continue to JobNest.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <Button
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-cyan-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </section>
  );
}