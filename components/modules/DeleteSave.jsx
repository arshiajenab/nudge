"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteSave({ res, method }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const SaveIt = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/save-${method}`, {
                method: "DELETE",
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
            router.refresh();
        } catch (error) {
            console.log("Error fetching response:", error);
            toast.error("something went wrong!", {
                position: "bottom-center",
            });
            setError("something went wrong!");
            return null;
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <button className="sc-remove-btn" onClick={SaveIt}>
                ✕
            </button>
        </div>
    );
}
