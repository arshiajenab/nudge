"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function logout() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    if (!token) redirect("/login");
    cookieStore.delete("token");
    redirect("/login");
}
