"use client";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { zodVerify } from "@/utils/zSchema";
import { useRouter } from "next/navigation";
export default function LoginModule() {
    const router = useRouter();
    const [isRegister, setIsRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState({ email: "", password: "", repeat: "" });
    const register = async () => {
        setLoading(true);
        try {
            const zodResult = zodVerify(user);
            console.log(zodResult);

            if (!zodResult.success) {
                setLoading(false);
                if (zodResult.error.issues[0].path[0] == "email")
                    return setError("Email is invalid");
                if (zodResult.error.issues[0].path[0] == "password")
                    return setError("Password is invalid");
            }
            if (user.password !== user.repeat) {
                setLoading(false);

                return setError("Passwords do not match");
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...user }),
            });
            const data = await res.json();
            if (!res.ok) {
                return setError(
                    data?.error?._message ||
                        data?.error?.message ||
                        "Something went wrong",
                );
            }
            setError("");
            router.push("/panel");
            router.refresh();
        } catch (err) {
            setError("Try Again");
        } finally {
            setLoading(false);
        }
    };
    const login = async () => {
        setLoading(true);
        try {
            const zodResult = zodVerify(user);
            console.log(zodResult);

            if (!zodResult.success) {
                setLoading(false);
                if (zodResult.error.issues[0].path[0] == "email")
                    return setError("Email is invalid");
                if (zodResult.error.issues[0].path[0] == "password")
                    return setError("Password is invalid");
            }

            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...user }),
            });
            const data = await res.json();
            console.log(res);
            console.log(data);
            if (!res.ok) {
                return setError(
                    data?.error?._message ||
                        data?.error?.message ||
                        data.error ||
                        "Something went wrong",
                );
            }
            setError("");
            router.push("/panel");
            router.refresh();
        } catch (err) {
            setError("Try Again");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <input
                className="input-field"
                type="text"
                name="email"
                placeholder="Your@email.com"
                autoComplete="email"
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            <PasswordInput setUser={setUser} user={user} />
            {isRegister ? (
                <PasswordInput repeat={true} setUser={setUser} user={user} />
            ) : (
                ""
            )}
            <p className="passErors">{error}</p>
            <button
                className="signin-btn"
                disabled={loading}
                style={
                    loading
                        ? {
                              background:
                                  "linear-gradient(135deg,#403d57 0 10%,#524c80,#403d57 90% 100%)",
                          }
                        : {}
                }
                onClick={isRegister ? register : login}
            >
                {loading ? "Loading" : isRegister ? "Sign Up" : "Login"}
            </button>
            <div className="signin-footer">
                {isRegister ? "Already " : "Don't "}have an account?{" "}
                <button
                    className="signin-footer-button"
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? "Login" : "Sign up free"}
                </button>
            </div>
        </div>
    );
}
4;
