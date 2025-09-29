import LoadingState from "@/components/ui/loading-state";
import AgentsView from "@/modules/agents/ui/views/agents-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { dehydrate, HydrationBoundary, useQueryClient } from "@tanstack/react-query";


const Page = () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions())

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState 
            title="Loading Agents" 
            description="This may take few seconds"/>}>
            <AgentsView/>
            </Suspense>
        </HydrationBoundary>
    )
}

export default Page;