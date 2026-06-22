import { Sk } from "@/components/ui/Skeleton";

export default function SettingsLoading() {
    return (
        <div style={{ padding: "28px 20%" }}>
            {/* header */}
            <Sk w="160px" h="32px" r="8px" mb="8px" />
            <Sk w="240px" h="14px" r="6px" mb="32px" />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "200px 1fr",
                    gap: "24px",
                }}
            >
                {/* settings nav */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    {[1, 2, 3, 4].map((i) => (
                        <Sk key={i} w="100%" h="38px" r="10px" mb="4px" />
                    ))}
                </div>

                {/* settings content */}
                <div>
                    {/* avatar row */}
                    <div
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "16px",
                            overflow: "hidden",
                            marginBottom: "16px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                                padding: "22px",
                                borderBottom:
                                    "0.5px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <Sk w="72px" h="72px" r="50%" />
                            <div>
                                <Sk w="120px" h="16px" r="6px" mb="6px" />
                                <Sk w="160px" h="13px" r="4px" mb="10px" />
                                <Sk w="100px" h="30px" r="8px" />
                            </div>
                        </div>
                        {[1, 2].map((i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "18px 22px",
                                    borderBottom:
                                        "0.5px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <div>
                                    <Sk w="120px" h="14px" r="4px" mb="6px" />
                                    <Sk w="180px" h="12px" r="4px" />
                                </div>
                                <Sk w="180px" h="38px" r="8px" />
                            </div>
                        ))}
                    </div>
                    <Sk w="120px" h="40px" r="10px" />
                </div>
            </div>
        </div>
    );
}
