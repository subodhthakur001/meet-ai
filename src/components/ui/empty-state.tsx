import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";

interface Props {
    title : string,
    description: string,
}

const EmptyState = ({title, description}: Props) => {
    return(
        <div className="py-4 px-8 flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg
            p-10 shadow-sm">
                <Image src="/empty.svg" alt="Empty" width={240} height={240}/>
                <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
                    <h6 className="text-lg font-medium">{title}</h6>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
             
        </div>
    )
}

export default EmptyState;