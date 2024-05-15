import { useState } from 'react';
import { PrismaClient, User } from '@prisma/client';

interface Props {
    users: User[];
    onDeleteUser: (userId: string) => void;
}

const UserTable: React.FC<Props> = ({ users, onDeleteUser }) => {
    const handleDeleteUser = (userId: string) => {
        onDeleteUser(userId);
    };

    return (
        <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Two Factor</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
            <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.isTwoFactorEnabled ? 'Enabled' : 'Disabled'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700">
                    Delete
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default UserTable;
