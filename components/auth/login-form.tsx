"use client"

import { CardWrapper } from "./card-wrapper";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../login-error";
import { FormSuccess } from "../login-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import Link from "next/link";
import { register } from "@/actions/register";
import { Social } from "./social";
import { motion, AnimatePresence } from "framer-motion";
import { cardVariantsX1, cardVariantsX2, cardVariantsFadeIn } from "@/utils/motion";
import TwoBCanvas from "../canvas/twoB";
import useIsDesktop from "@/hooks/use-is-desktop";

export const LoginForm = () => {
    const SearchParams = useSearchParams();
    const callbackUrl = SearchParams.get("callbackUrl");
    const UrlError = SearchParams.get("error") === "OAuthAccountNotLinked" ? "Email sudah dipakai" : "";

    const [showTwoFactor, setShowTwoFactor] = useState(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [isLogin, setIsLogin] = useState(true);

    const formLogin = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmitLogin = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values, callbackUrl).then((data) => {
                if (data?.error) {
                    formLogin.reset();
                    setError(data.error);
                }
                if (data?.success) {
                    formLogin.reset();
                    setSuccess(data.success);
                }
                if (data?.twoFactor) {
                    setShowTwoFactor(true);
                }
            }).catch(() => setError("Terjadi kesalahan!"))
        })
    };

    const formRegister = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    });

    const onSubmitRegister = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            register(values).then((data) => {
                setError(data.error),
                setSuccess(data.success)
            });
        })
    };

    const isDesktop = useIsDesktop();

    const animationVariants = isDesktop ? { login: cardVariantsX1, register: cardVariantsX2 } : { login: cardVariantsFadeIn, register: cardVariantsFadeIn };

    return (
        <div className="w-full h-screen flex items-center md:justify-between justify-center md:px-12 px-4">
            <AnimatePresence mode="wait">
                {isLogin ? (
                    <>
                        <motion.div
                            key="login-canvas"
                            initial="offscreen"
                            animate="onscreen"
                            exit="exitscreen"
                            variants={isDesktop ? cardVariantsX2 : cardVariantsFadeIn}
                            className="md:w-1/2 h-full md:flex hidden items-center justify-center"
                        >
                            <TwoBCanvas className="w-full h-full"/>
                        </motion.div>
                        <motion.div
                            key="login-form"
                            initial="offscreen"
                            animate="onscreen"
                            exit="exitscreen"
                            variants={animationVariants.login}
                            className="md:w-1/2 w-full h-full flex items-center justify-center"
                        >
                            <CardWrapper headerLabel="Welcome back!">
                                <Form {...formLogin}>
                                    <form className="space-y-6 w-full" onSubmit={formLogin.handleSubmit(onSubmitLogin)}>
                                        {showTwoFactor && (
                                            <FormField disabled={isPending} control={formLogin.control} name="code" render={({ field }) => (
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
                                                <FormField disabled={isPending} control={formLogin.control} name="email" render={({ field }) => (
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
                                                <FormField disabled={isPending} control={formLogin.control} name="password" render={({ field }) => (
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
                                            <Button onClick={() => setIsLogin(false)} variant="link" size="sm" className="mt-4">
                                                Don't have an account? Register
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </CardWrapper>
                        </motion.div>
                    </>
                ) : (
                    <>
                        <motion.div
                            key="register-form"
                            initial="offscreen"
                            animate="onscreen"
                            exit="exitscreen"
                            variants={animationVariants.register}
                            className="md:w-1/2 w-full h-full flex items-center justify-center"
                        >
                            <CardWrapper headerLabel="Create an account">
                                <Form {...formRegister}>
                                    <form className="space-y-6 w-full" onSubmit={formRegister.handleSubmit(onSubmitRegister)}>
                                        <FormField disabled={isPending} control={formRegister.control} name="name" render={({ field }) => (
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
                                        <FormField disabled={isPending} control={formRegister.control} name="email" render={({ field }) => (
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
                                        <FormField disabled={isPending} control={formRegister.control} name="password" render={({ field }) => (
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
                                            <Button onClick={() => setIsLogin(true)} variant="link" size="sm" className="mt-4">
                                                Have an account? Login
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </CardWrapper>
                        </motion.div>
                        <motion.div
                            key="register-canvas"
                            initial="offscreen"
                            animate="onscreen"
                            exit="exitscreen"
                            variants={isDesktop ? cardVariantsX1 : cardVariantsFadeIn}
                            className="md:w-1/2 h-full md:flex hidden items-center justify-center"
                        >
                            <TwoBCanvas className="w-full h-full"/>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
