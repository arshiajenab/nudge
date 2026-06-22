import z from "zod";

const userSchema = z.object({
    email: z.email(),
    password: z
        .string()
        .regex(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/,
        ),
});

export const zodVerify = (user) => {
    const res = userSchema.safeParse(user);
    return res;
};
