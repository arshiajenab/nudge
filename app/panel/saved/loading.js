import { Sk } from "@/components/ui/Skeleton";

export default function SavedLoading() {
    return (
        <div style={{ padding: "28px 20%" }}>
            {/* header */}
            <Sk w="140px" h="32px" r="8px" mb="8px" />
            <Sk w="260px" h="14px" r="6px" mb="32px" />

            {/* tab bar */}
            <Sk w="280px" h="40px" r="12px" mb="24px" />

            {/* section label */}
            <Sk w="100px" h="11px" r="4px" mb="12px" />

            {/* saved cards grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                    gap: "14px",
                    marginBottom: "28px",
                }}
            >
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "16px",
                            padding: "20px",
                        }}
                    >
                        <Sk w="100%" h="90px" r="10px" mb="14px" />
                        <Sk w="150px" h="17px" r="6px" mb="6px" />
                        <Sk w="120px" h="12px" r="4px" mb="12px" />
                        <div
                            style={{
                                display: "flex",
                                gap: "6px",
                                marginBottom: "14px",
                            }}
                        >
                            <Sk w="60px" h="22px" r="99px" />
                            <Sk w="70px" h="22px" r="99px" />
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <Sk w="100%" h="34px" r="8px" />
                            <Sk w="36px" h="34px" r="8px" />
                        </div>
                    </div>
                ))}
            </div>

            {/* second section label */}
            <Sk w="80px" h="11px" r="4px" mb="12px" />

            {/* second grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
                    gap: "14px",
                }}
            >
                {[1, 2].map((i) => (
                    <div
                        key={i}
                        style={{
                            background: "rgba(255,255,255,0.045)",
                            border: "0.5px solid rgba(255,255,255,0.09)",
                            borderRadius: "16px",
                            padding: "20px",
                        }}
                    >
                        <Sk w="100%" h="90px" r="10px" mb="14px" />
                        <Sk w="150px" h="17px" r="6px" mb="6px" />
                        <Sk w="120px" h="12px" r="4px" mb="12px" />
                        <div style={{ display: "flex", gap: "8px" }}>
                            <Sk w="100%" h="34px" r="8px" />
                            <Sk w="36px" h="34px" r="8px" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
