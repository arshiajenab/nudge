"use client";

import { useState } from "react";

export default function PasswordInput({ repeat, setUser, user }) {
    const [show, setShow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <input
                className="input-field"
                type={show ? "text" : "password"}
                name={repeat ? "repeat" : "password"}
                placeholder={repeat ? "Repeat Passwor" : "Password"}
                style={{ paddingRight: "44px" }}
                autoComplete="current-password"
                onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                }
            />
            <button
                type="button" // ← important! prevents form submission
                onClick={() => setShow(!show)}
                style={{
                    position: "absolute",
                    right: "12px",
                    top: "calc(50% - 6px)",
                    transform: "translateY(-50%)",

                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--muted)",
                    fontSize: "13px",
                    fontFamily: "var(--mono)",
                }}
            >
                {show ? "hide" : "show"}
            </button>
        </div>
    );
}
