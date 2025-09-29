"use client"
import { useQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import { agents } from "@/db/schema";
import LoadingState from "@/components/ui/loading-state";
import ErrorState from "@/components/ui/error-state";

export const AgentsView = () => {
    const trpc = useTRPC();
    const {data, isLoading, isError} = useQuery(trpc.agents.getMany.queryOptions());

    if(isLoading){
        return <LoadingState 
        title="Loading Agents" 
        description="This may take few seconds"/>
    }

    if(isError){
       return <ErrorState
       title="Failed to load agents"
       description="Something went wrong!"
       />
    }


    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    )


}