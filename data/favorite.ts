import { db } from '@/lib/db';
import { Favorite } from '@prisma/client';

export const getFavoritesByEmail = async (email: string): Promise<Favorite[]> => {
    try {
        const favorites = await db.favorite.findMany({ 
            where: { email } 
        });
        return favorites;
    } catch (error) {
        return [];
    }
};

export const deleteFavoriteById = async (id: string) => {
    try {
        await db.favorite.delete({
            where: { id }
        });
        return true;
    } catch {
        return false;
    }
};
