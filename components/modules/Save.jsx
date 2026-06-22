"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Save({ res, method }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const SaveIt = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/save-${method}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    res,
                }),
            });
            if (!response.ok) {
                setError("something went wrong!");
                toast.error("something went wrong!", {
                    position: "bottom-center",
                });
                return;
            }
            const data = await response.json();
            toast.success("Saved Successfully", {
                position: "bottom-center",
            });
        } catch (error) {
            console.log("Error fetching response:", error);
            setError("something went wrong!");
            toast.error("something went wrong!", {
                position: "bottom-center",
            });
            return null;
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            className={`save-btn`}
            onClick={SaveIt}
        >
            {loading ? "loading..." : "+ Save"}
        </button>
    );
}
