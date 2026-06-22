import { Sk } from "@/components/ui/Skeleton";

export default function OverviewLoading() {
    return (
        <div style={{ padding: "28px 20%" }}>
            {/* greeting */}
            <Sk w="220px" h="32px" r="8px" mb="8px" />
            <Sk w="160px" h="14px" r="6px" mb="32px" />

            {/* stats row */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "14px",
                    marginBottom: "24px",
                }}
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "16px",
                            padding: "20px 22px",
                        }}
                    >
                        <Sk w="60px" h="36px" r="6px" mb="8px" />
                        <Sk w="100px" h="12px" r="4px" />
                    </div>
                ))}
            </div>

            {/* jump back in label */}
            <Sk w="100px" h="12px" r="4px" mb="12px" />

            {/* continue cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "12px",
                    marginBottom: "24px",
                }}
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "10px",
                            padding: "16px",
                        }}
                    >
                        <Sk w="32px" h="32px" r="8px" mb="10px" />
                        <Sk w="80px" h="16px" r="6px" mb="6px" />
                        <Sk w="120px" h="12px" r="4px" />
                    </div>
                ))}
            </div>

            {/* recent activity + saved row */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                }}
            >
                {[1, 2].map((col) => (
                    <div
                        key={col}
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "16px",
                            padding: "24px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "18px",
                            }}
                        >
                            <Sk w="120px" h="16px" r="6px" />
                            <Sk w="60px" h="12px" r="4px" />
                        </div>
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                    padding: "10px 0",
                                    borderBottom:
                                        "0.5px solid rgba(255,255,255,0.06)",
                                }}
                            >
                                <Sk w="8px" h="8px" r="50%" />
                                <Sk w="140px" h="13px" r="4px" />
                                <Sk w="44px" h="20px" r="99px" />
                                <Sk w="40px" h="11px" r="4px" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
