"use client"
import { Card , CardContent} from "@/components/ui/card"

export const SignInView = () => {
    return (
        <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
                <form>COl1</form>
                <div className="bg-radial from-green-700 to-green-900 relative hidden md:flex flex-col
                gap-y-4 items-center justify-center">
                    <img src="logo.svg" alt="Image"  className="h-[92px] w-[92px]"/>
                    <p className="text-2xl font--semibold text-white">
                        MEET AI
                    </p>
                </div>
            </CardContent>
            </Card>
        </div>
        
    )
}