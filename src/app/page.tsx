
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { HomeView } from "@/modules/home/ui/views/home-view";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Home = async () => {
  const session = await auth.api.getSession({
    headers : await headers(),
  });
  if(!session){
    redirect("/sign-in")
  }
  return <HomeView/>
}
export default Home;
