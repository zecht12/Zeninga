"use client";

import UserEdit from "@/components/pages/user-edit";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();
    return (
        <UserEdit/>
    )
}

export default SettingsPage