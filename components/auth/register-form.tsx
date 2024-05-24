"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../login-error";
import { FormSuccess } from "../login-success";
import { Register } from "@/actions/register";
import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useIsDesktop from "@/hooks/use-is-desktop";
import { cardVariantsFadeIn, cardVariantsX1, cardVariantsX2 } from "@/utils/motion";
import { Social } from "./social";
import Link from "next/link";
import TwoBCanvas from "../canvas/twoB";

export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:""
        }
    });
    const onSubmit = (values: z.infer<typeof RegisterSchema>) =>{
        setError("");
        setSuccess("");
        startTransition(()=>{
            Register(values).then((data)=>{
                setError(data.error),
                setSuccess(data.success)
            });
        })
    };

    const isDesktop = useIsDesktop();

    return (
        <div className="w-full h-screen flex items-center md:justify-between justify-center md:px-12 px-4">
            <AnimatePresence mode="wait">
                <>
                    <motion.div
                        initial="offscreen"
                        animate="onscreen"
                        exit="exitscreen"
                        variants={isDesktop ? cardVariantsFadeIn : cardVariantsX2 }
                        className="md:w-1/2 w-full h-full flex items-center justify-center"
                    >
                        <CardWrapper headerLabel="Create an account">
                            <Form {...form}>
                                <form className="space-y-6 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                                    <FormField disabled={isPending} control={form.control} name="name" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Nama
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Nama lengkap" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField disabled={isPending} control={form.control} name="email" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Email address" type="email" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField disabled={isPending} control={form.control} name="password" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="******" type="password" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormError message={error} />
                                    <FormSuccess message={success} />
                                    <Social />
                                    <Button disabled={isPending} type="submit" className="w-full">
                                        Create an account
                                    </Button>
                                    <div className="flex justify-center items-center">
                                        <Button variant="link" size="sm" className="mt-4" asChild>
                                            <Link href="/auth">
                                                Have an account? Login
                                            </Link>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardWrapper>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        animate="onscreen"
                        exit="exitscreen"
                        variants={isDesktop ? cardVariantsFadeIn : cardVariantsX1 }
                        className="md:w-1/2 h-full md:flex hidden items-center justify-center"
                    >
                        <TwoBCanvas className="w-full h-full" />
                    </motion.div>
                </>
            </AnimatePresence>
        </div>
    )
}