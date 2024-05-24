"use client";

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../login-error";
import { FormSuccess } from "../login-success";
import { Login } from "@/actions/login";
import { useState, useTransition } from "react";
import Link from "next/link";
import { Social } from "./social";
import { AnimatePresence, motion } from "framer-motion";
import useIsDesktop from "@/hooks/use-is-desktop";
import { cardVariantsFadeIn, cardVariantsX1, cardVariantsX2 } from "@/utils/motion";
import TwoBCanvas from "../canvas/twoB";

export const LoginForm = () => {
    const SearchParams = useSearchParams();
    const callbackUrl = SearchParams.get("callbackUrl");
    const UrlError = SearchParams.get("error") === "OAuthAccountNotLinked" ? "Email sudah dipakai" : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            Login(values, callbackUrl).then((data) => {
                if (data?.error) {
                    form.reset();
                    setError(data.error);
                }
                if (data?.success) {
                    form.reset();
                    setError(data.success);
                }
                if (data?.twoFactor) {
                    setShowTwoFactor(true);
                }
            }).catch(() => setError("Terjadi kesalahan!"))
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
                        className="md:w-1/2 h-full md:flex hidden items-center justify-center"
                    >
                        <TwoBCanvas className="w-full h-full" />
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        animate="onscreen"
                        exit="exitscreen"
                        variants={isDesktop ? cardVariantsFadeIn : cardVariantsX1 }
                        className="md:w-1/2 w-full h-full flex items-center justify-center"
                    >
                        <CardWrapper headerLabel="Welcome back!">
                            <Form {...form}>
                                <form className="space-y-6 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                                    {showTwoFactor && (
                                        <FormField disabled={isPending} control={form.control} name="code" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Two factor code
                                                </FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="123456" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    )}
                                    {!showTwoFactor && (
                                        <>
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
                                                    <Button asChild variant="link" size="sm" className="px-0 font-normal">
                                                        <Link href="/auth/reset">
                                                            Forgot password
                                                        </Link>
                                                    </Button>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </>
                                    )}
                                    <FormError message={error || UrlError} />
                                    <FormSuccess message={success} />
                                    <Social />
                                    <Button disabled={isPending} type="submit" className="w-full">
                                        {showTwoFactor ? "Confirm" : "Login"}
                                    </Button>
                                    <div className="flex justify-center items-center">
                                    <Button variant="link" size="sm" className="mt-4" asChild>
                                            <Link href="/auth/register">
                                            Don't have an account? Register
                                            </Link>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardWrapper>
                    </motion.div>
                </>
            </AnimatePresence>
        </div>
    )
}