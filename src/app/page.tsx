'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await authClient.signUp.email(
        {
          email,
          password,
          name,
          callbackURL: "/dashboard",
        },
        {
          onSuccess: () => {
            window.alert("success");
          },
          onError: (ctx) => {
            window.alert(ctx?.error?.message ?? "error");
          },
        }
      );
    } catch (err: any) {
      // In case the SDK throws outside onError
      window.alert(err?.message ?? "Something went wrong");
    }
  }

  return (
    <div className="max-w-sm space-y-3">
      <form onSubmit={handleSignUp} className="space-y-3">
        <div>
          <div className="mb-1">Name</div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            name="name"
            autoComplete="name"
          />
        </div>

        <div>
          <div className="mb-1">Email</div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <div className="mb-1">Password</div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            name="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
}
