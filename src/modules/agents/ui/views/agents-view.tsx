"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import ResponsiveDialog from "@/components/ui/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/ui/empty-state";
import { useAgentFilters } from "../../hooks/use-agent-filters";
import { DataPagination } from "../components/data-pagination";
import { useRouter } from "next/navigation";


const AgentsView = () => {
    const router = useRouter();
    const [filters, setFilters] = useAgentFilters();
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions({
        ...filters,
    }));
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
 
    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
           <DataTable 
           data={data.items} 
           columns={columns}
           onRowClick={(row) => router.push(`/agents/${row.id}`)}/>
        <DataPagination
           page={filters.page}
           totalPages={data.totalPages}
           onPageChange={(page) => setFilters({ page })}/>

           {data.items.length == 0 && (
            <EmptyState
            title="Create your first agent"
            description="Create an agent to join your meetings. Each agent will follow your instructions
            and can interact with participants during the call."/>
           )}
        </div>
    )
}

export default AgentsView