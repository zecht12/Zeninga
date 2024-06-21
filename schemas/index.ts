import * as z from "zod";
import { UserRole } from "@prisma/client";

const TagSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
});

const UserSchema = z.object({
    id: z.string().uuid(),
    name: z.optional(z.string()),
    email: z.string().email(),
});

const LanguageSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
});

const CategorySchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
});

const ImageSchema = z.object({
    id: z.string().uuid(),
    url: z.string().url(),
});

export const FavoriteSchema = z.object({
    id: z.string().uuid(),
    title: z.optional(z.string()),
    originalTitle: z.optional(z.string()),
    cover: z.optional(z.string().url()),
    url: z.optional(z.string().url()),
    userId: z.string().uuid(),
    user: z.array(UserSchema),
    createdAt: z.string().optional(),
    parodies: z.array(z.string().uuid()).optional(),
    characters: z.array(z.string().uuid()).optional(),
    tags: z.array(TagSchema).optional(),
    artists: z.array(z.string().uuid()).optional(),
    groups: z.array(z.string().uuid()).optional(),
    languages: z.array(LanguageSchema).optional(),
    categories: z.array(CategorySchema).optional(),
    images: z.array(ImageSchema).optional(),
});

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    image: z.optional(z.string().url()),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }
        return true;
    }, {
        message: "Password baru dibutuhkan!",
        path: ["newPassword"],
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }
        return true;
    }, {
        message: "Password Dibutuhkan!",
        path: ["password"],
    });

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimal 6 karakter",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(1, {
        message: "Password dibutuhkan",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email dibutuhkan",
    }),
    password: z.string().min(6, {
        message: "Minimal 6 karakter",
    }),
    name: z.string().min(1, {
        message: "Nama dibutuhkan",
    }),
});
