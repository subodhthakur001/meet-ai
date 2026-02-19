import ResponsiveDialog from "@/components/ui/responsive-dialog"
import { Dispatch, SetStateAction } from "react"

interface NewMeetingDialogProps{
    open : boolean,
    onOpenChange : (open: boolean) => void
}
export const NewMeetingDialog = ({
    open,
    onOpenChange
} : NewMeetingDialogProps) => {
    return (
        <ResponsiveDialog
        title="New Meetings"
        description="Create a new Meeting"
        open={open}
        onOpenChange={onOpenChange}>
        TODO: Meeting Form
        </ResponsiveDialog>
    )

}