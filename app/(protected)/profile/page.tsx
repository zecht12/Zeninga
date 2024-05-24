import UserInfo from '@/components/pages/user-info'
import { currentUser } from '@/lib/auth'
import React from 'react'

const SettingsPage = async () => {
    const user = await currentUser()
    return (
        <UserInfo user={user}/>
    )
}

export default SettingsPage