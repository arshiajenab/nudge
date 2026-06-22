// app/register/page.jsx
"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        // call our register API
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error);
            setLoading(false);
            return;
        }

        // auto sign in after register
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/panel",
        });
    }

    return (
        <div className="signin-card">
            <div className="signin-logo">
                <div className="signin-logo-icon">✦</div>
                Nudge
            </div>

            <h2>Create account</h2>
            <p className="signin-sub">Join Nudge for free</p>

            <button
                className="oauth-btn oauth-google"
                onClick={() => signIn("google", { callbackUrl: "/panel" })}
            >
                Continue with Google
            </button>

            <div className="divider-or">or</div>

            {error && (
                <p
                    style={{
                        color: "#ff6eb0",
                        fontSize: "13px",
                        marginBottom: "12px",
                        textAlign: "center",
                    }}
                >
                    {error}
                </p>
            )}

            <input
                className="input-field"
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="input-field"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input-field"
                type="password"
                placeholder="password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                className="signin-btn"
                onClick={handleRegister}
                disabled={loading}
            >
                {loading ? "Creating account..." : "Create account →"}
            </button>

            <div className="signin-footer">
                Already have an account? <a href="/signin">Sign in</a>
            </div>
        </div>
    );
}
