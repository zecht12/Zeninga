"use server";

import { db } from '../lib/db';
import * as z from "zod";
import { FavoriteSchema } from '../schemas';
import { getUserByEmail } from '../data/user';

export const addFavorite = async (values: z.infer<typeof FavoriteSchema>) => {
    const validatedField = FavoriteSchema.safeParse(values);

    if (!validatedField.success) {
        return { error: "Terjadi kesalahan!" };
    }

    const { title, cover, originalTitle, url, parodies, characters, tags, artists, groups, languages, categories, images, user } = validatedField.data;

    if (user.length === 0) {
        return { error: "User data is missing!" };
    }

    const userData = user[0];
    const email = userData.email;

    const existingUser = await getUserByEmail(email);

    try {
        await db.favorite.create({
            data: {
                title: title ?? "",
                originalTitle: originalTitle ?? "",
                cover: cover ?? "",
                url: url ?? "",
                user: {
                    connect: { id: existingUser?.id }
                },
                parodies: {
                    connect: parodies?.map(parodyId => ({ id: parodyId })) || []
                },
                characters: {
                    connect: characters?.map(characterId => ({ id: characterId })) || []
                },
                tags: {
                    connect: tags?.map(tag => ({ id: tag.id, name: tag.name })) || []
                },
                artists: {
                    connect: artists?.map(artistId => ({ id: artistId })) || []
                },
                groups: {
                    connect: groups?.map(groupId => ({ id: groupId })) || []
                },
                languages: {
                    connect: languages?.map(language => ({ id: language.id, name: language.name })) || []
                },
                categories: {
                    connect: categories?.map(category => ({ id: category.id, name: category.name })) || []
                },
                images: {
                    create: images?.map(image => ({ url: image.url })) || []
                }
            }
        });

        return { success: "Telah ditambahkan ke Favorite!" };
    } catch (error) {
        console.error(error);
        return { error: "Terjadi kesalahan saat menambahkan ke Favorite!" };
    }
};
