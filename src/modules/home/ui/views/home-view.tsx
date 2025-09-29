'use client'
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export const HomeView = () => {
    return (
        <div>
          Home View
        </div>
    )
}
