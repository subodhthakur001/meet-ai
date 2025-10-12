import LoadingState from "@/components/ui/loading-state";
import AgentsView from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query";
import { AgentsList } from "@/modules/agents/ui/components/agents-list";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { TRPCError } from "@trpc/server";
import { redirect, useRouter } from "next/navigation";


const Page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
      })
    
      if(!session){
        redirect("/sign-in")
      }
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

    return (
        <>
        <AgentsList/>
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState 
            title="Loading Agents" 
            description="This may take few seconds"/>}>
            <AgentsView/>
            </Suspense>
        </HydrationBoundary>
        </>
    )
}

export default Page;