"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import ResponsiveDialog from "@/components/ui/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/ui/empty-state";


const AgentsView = () => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions({}));
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
 
    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
           <DataTable data={data} columns={columns}/>
           {data.length == 0 && (
            <EmptyState
            title="Create your first agent"
            description="Create an agent to join your meetings. Each agent will follow your instructions
            and can interact with participants during the call."/>
           )}
        </div>
    )
}

export default AgentsView