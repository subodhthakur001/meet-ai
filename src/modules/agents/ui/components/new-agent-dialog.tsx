import ResponsiveDialog from "@/components/ui/responsive-dialog"
import { Dispatch, SetStateAction } from "react"
import { AgentForm } from "./agents-form"

interface NewAgentDialogProps{
    open : boolean,
    onOpenChange : (open: boolean) => void
}
export const NewAgentDialog = ({
    open,
    onOpenChange
} : NewAgentDialogProps) => {
    return (
        <ResponsiveDialog
        title="New Agents"
        description="Create a new Agent"
        open={open}
        onOpenChange={onOpenChange}>
        <AgentForm
        isSuccess={() => onOpenChange(false)}
        isCancel={() => onOpenChange(false)}/>
        </ResponsiveDialog>
    )

}