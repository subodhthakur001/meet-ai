"use client"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"
import ResponsiveDialog from "@/components/ui/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const AgentsView = () => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.agents.getMany.queryOptions());
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    return (
        <div>
            <ResponsiveDialog
             title="Responsive Test"
            description="description"
            open={dialogOpen}
            onOpenChange={() => {}}>
                <Button>
                    Click me
                </Button>
            </ResponsiveDialog>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}

export default AgentsView