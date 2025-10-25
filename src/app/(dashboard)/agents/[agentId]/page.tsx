import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react";
import AgentIdView from "@/modules/agents/ui/views/agents-id-view";
import LoadingState from "@/components/ui/loading-state";
import ErrorState from "@/components/ui/error-state";

interface Props {
    params: Promise<{agentId: string}>
}

const Page = async({ params }: Props) => {
    const { agentId } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.agents.getOne.queryOptions({ id: agentId})
    )
    
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<LoadingState 
            title="Loading Agent" 
            description="This may take few seconds"/>}>
                <ErrorBoundary fallback={<ErrorState
                title="Error fetching Agent"
                description="Please try again later"/>}>
                <AgentIdView agentId={agentId} />
                </ErrorBoundary>
            </Suspense>
        </HydrationBoundary>
    )
}

export default Page;