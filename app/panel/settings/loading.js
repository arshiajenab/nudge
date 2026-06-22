import { Sk } from "@/components/ui/Skeleton";
import styles from "./SettingsLoading.module.css";

export default function SettingsLoading() {
    return (
        <div className={styles.wrapper}>
            {/* header */}
            <Sk w="160px" h="32px" r="8px" mb="8px" />
            <Sk w="240px" h="14px" r="6px" mb="32px" />

            <div className={styles.grid}>
                {/* settings nav */}
                <div className={styles.nav}>
                    {[1, 2, 3, 4].map((i) => (
                        <Sk key={i} w="100%" h="38px" r="10px" mb="4px" />
                    ))}
                </div>

                {/* settings content */}
                <div>
                    <div className={styles.card}>
                        {/* avatar row */}
                        <div className={styles.avatarRow}>
                            <Sk w="72px" h="72px" r="50%" />
                            <div>
                                <Sk w="120px" h="16px" r="6px" mb="6px" />
                                <Sk w="160px" h="13px" r="4px" mb="10px" />
                                <Sk w="100px" h="30px" r="8px" />
                            </div>
                        </div>

                        {/* fields */}
                        {[1, 2].map((i) => (
                            <div key={i} className={styles.fieldRow}>
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
