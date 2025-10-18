"use client"

import { Button } from "@/components/ui/button"
import { PlusIcon, XCircleIcon } from "lucide-react"
import { NewAgentDialog } from "./new-agent-dialog"
import { useState } from "react"
import { useAgentFilters } from "../../hooks/use-agent-filters"
import { AgentsSearchFilter } from "./agents-search-filter"
import { DEFAULT_PAGE } from "@/constants"

export const AgentsList = () => {
    const[ filters, setFilters ] = useAgentFilters();
    const isFilterModified = !!filters.search;
    console.log(isFilterModified)
    const onClearFilters = () => {
        setFilters({
            search: "",
            page: DEFAULT_PAGE,
        });
    } 
    const[isDialogOpen, SetIsDialogOpen] = useState<boolean>(false);
    return(
        <>
        <NewAgentDialog open={isDialogOpen} onOpenChange={SetIsDialogOpen}/>
        <div className="px-4 py-4 md:px-8 flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h5 className="font-medium text-xl">My Agents</h5>
                <Button onClick={() => SetIsDialogOpen(true)}>
                    <PlusIcon/>
                    New Agent
                </Button>
            </div>  
            <div className="flex items-center gap-x-2 p-1">
                <AgentsSearchFilter/>
                { isFilterModified && (
                    <Button variant="outline" size="sm" onClick={onClearFilters}>
                        <XCircleIcon/>
                        clear
                    </Button> 
                )}
            </div>
        </div>
        </>
        
    )
}