"use server";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import z from "zod";

const userSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/,
        ),
});

export const login = async (state, formData) => {
    const user = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    if (!user.email || !user.password) return { err: "" };
    const zodResult = userSchema.safeParse(user);
    if (!zodResult.success) {
        if (zodResult.error.issues[0].path[0] == "password")
            return { err: "Password is invalid" };
        if (zodResult.error.issues[0].path[0] == "email")
            return { err: "Email is invalid" };
    }

    const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        callbackUrl: "/panel", // handle redirect manually
    });

    if (res?.error) {
        return { err: res.error };
    }

    redirect("/panel");
};

export const register = async (state, formData) => {
    const user = {
        email: formData.get("email"),
        password: formData.get("password"),
    };
    if (!user.email || !user.password) return { err: "" };
    const repeat = formData.get("repeat");
    if (user.password !== repeat) return { err: "Passwords do not match" };
    const zodResult = userSchema.safeParse(user);
    if (!zodResult.success) {
        if (zodResult.error.issues[0].path[0] == "password")
            return { err: "Password is invalid" };
        if (zodResult.error.issues[0].path[0] == "email")
            return { err: "Email is invalid" };
    }

    // call our register API
    const resCreate = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user }),
    });

    const data = await resCreate.json();

    if (!resCreate.ok) {
        return;
    }

    // auto sign in after register
    // const res = await signIn("credentials", {
    //     email: user.email,
    //     password: user.password,
    //     callbackUrl: "/panel", // handle redirect manually
    // });

    if (res?.error) {
        return { err: res.error };
    }
};
