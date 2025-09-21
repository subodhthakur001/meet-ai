"use client"
import { Card , CardContent} from "@/components/ui/card"
import {email, z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    email : z.string().email(),
    password: z.string().min(1, {message : "Password is required"})
});

export const SignInView = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    return (
        <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
                <Form {...form}>
                    <form className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    Welcome Back !
                                </h1>
                                <p className="text-muted-foreground text-balance">
                                    Login to your account
                                </p>
                            </div>
                            <div className="grid gap-3">
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                type="email"
                                                placeholder="m@exmaple.com"
                                                {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                type="password"
                                                placeholder="********"
                                                {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                </div>
                                {true && (
                            <Alert className="bg-destructive/10 border-none">
                                <OctagonAlertIcon className="w-4 h-4 !text-destructive"/>
                                <AlertTitle>Error</AlertTitle>
                            </Alert>
                        )}
                        <Button type="submit" className="w-full">Sign In</Button>  
                        <div className="after:border-border relative text-center text-sm after:absolute
                        after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                            <span className="bg-card text-muted-foreground relative z-10 px-2">
                                or continue with
                            </span>
                        </div> 
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" type="button" className="w-full">
                                Google
                            </Button>
                             <Button variant="outline" type="button" className="w-full">
                                Github
                            </Button>
                        </div> 
                        </div>
                        
                    </form>
                </Form>
                
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