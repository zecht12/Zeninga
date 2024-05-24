import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExtendedUser } from '@/next-auth';

interface UserInfoProps {
    user?: ExtendedUser;
}

const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <div className="h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-zinc-900 md:py-12 py-14 px-4 flex items-center justify-center">
            <Card className='w-[500px]'>
                <CardHeader>
                    <p className="text-xl font-semibold text-center">Profile</p>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex items-center justify-center rounded-lg p-2">
                        <Image width="190" height="190" className="rounded-full w-40 h-40" src={user?.image || '/images/placeholder.jpg'} alt={user?.name ?? "Profile Picture"} />
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-lg p-3">
                        <p className="text-sm font-semibold">Name</p>
                        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                            {user?.name ?? "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-lg p-3">
                        <p className="text-sm font-semibold">Email</p>
                        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                            {user?.email ?? "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-lg p-3">
                        <p className="text-sm font-semibold">Role</p>
                        <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                            {user?.role ?? "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <p className="text-sm font-semibold">Two Factor Authentication</p>
                        <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
                            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                        </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button asChild variant="default" size="sm">
                            <Link href="/profile/edit" className='font-semibold'>
                                Edit Your Profile
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default UserInfo;
