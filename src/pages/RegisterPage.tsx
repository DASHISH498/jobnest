import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const users: User[] = JSON.parse(
      localStorage.getItem("jobnest-user") || "[]"
    );

    const alreadyExists = users.find(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (alreadyExists) {
      alert("Email already registered.");
      return;
    }

    users.push({
      name,
      email,
      password,
    });

    localStorage.setItem("jobnest-user", JSON.stringify(users));

    alert("Registration Successful.");

    navigate("/login");
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-12">
      <Card className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-zinc-400">
          Register to continue to JobNest.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

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
            placeholder="Enter password"
          />

          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />

          <Button
            type="submit"
            fullWidth
          >
            Register
          </Button>
        </form>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </Card>
    </section>
  );
}