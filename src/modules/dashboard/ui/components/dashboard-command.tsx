import { CommandDialog, CommandInput, CommandItem, CommandList, CommandResponsiveDialog } from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface CommandProps {
    open : boolean, 
    setOpen : Dispatch<SetStateAction<boolean>>
}

export const DashboardCommand = ({open, setOpen} : CommandProps) => {
    return (
        <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="find a meeting or a agent"/>
            <CommandList>
                <CommandItem>Test</CommandItem>
            </CommandList>
        </CommandResponsiveDialog>
    )
}