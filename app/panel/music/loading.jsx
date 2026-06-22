import { Sk } from "@/components/ui/Skeleton";

export default function MusicLoading() {
    return (
        <div style={{ padding: "28px 20%" }}>
            {/* header */}
            <Sk w="260px" h="36px" r="8px" mb="10px" />
            <Sk w="380px" h="15px" r="6px" mb="36px" />

            {/* input card */}
            <div
                style={{
                    background: "rgba(255,255,255,0.045)",
                    border: "0.5px solid rgba(255,255,255,0.09)",
                    borderRadius: "16px",
                    padding: "24px",
                    marginBottom: "24px",
                }}
            >
                <Sk w="120px" h="11px" r="4px" mb="12px" />
                <Sk w="100%" h="100px" r="10px" mb="16px" />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Sk w="60px" h="12px" r="4px" />
                    <Sk w="130px" h="40px" r="10px" />
                </div>
            </div>

            {/* results label */}
            <Sk w="140px" h="11px" r="4px" mb="14px" />

            {/* result cards */}
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    style={{
                        background: "rgba(255,255,255,0.045)",
                        border: "0.5px solid rgba(255,255,255,0.09)",
                        borderRadius: "16px",
                        padding: "20px 22px",
                        marginBottom: "12px",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                    }}
                >
                    <Sk w="56px" h="56px" r="10px" />
                    <div style={{ flex: 1 }}>
                        <Sk w="160px" h="18px" r="6px" mb="6px" />
                        <Sk w="200px" h="13px" r="4px" mb="10px" />
                        <Sk w="90%" h="13px" r="4px" mb="4px" />
                        <Sk w="70%" h="13px" r="4px" />
                    </div>
                    <Sk w="60px" h="30px" r="8px" />
                </div>
            ))}
        </div>
    );
}
