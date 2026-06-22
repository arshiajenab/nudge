import { Sk } from "@/components/ui/Skeleton";
import styles from "./OverviewLoading.module.css";

export default function OverviewLoading() {
    return (
        <div className={styles.wrapper}>
            {/* greeting */}
            <Sk w="220px" h="32px" r="8px" mb="8px" />
            <Sk w="160px" h="14px" r="6px" mb="32px" />

            {/* stats row */}
            <div className={styles.continueGrid}>
                {[1, 2].map((i) => (
                    <div key={i} className={styles.continueCard}>
                        <Sk w="32px" h="32px" r="8px" mb="10px" />
                        <Sk w="80px" h="16px" r="6px" mb="6px" />
                    </div>
                ))}
            </div>

            {/* jump back in label */}
            <Sk w="100px" h="12px" r="4px" mb="12px" />

            {/* continue cards */}
            <div className={styles.statsGrid}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={styles.statCard}>
                        <Sk w="60px" h="36px" r="6px" mb="10px" />
                        <Sk w="100px" h="12px" r="4px" mb="20px" />
                    </div>
                ))}
            </div>
        </div>
    );
}
