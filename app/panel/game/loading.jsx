import { Sk } from "@/components/ui/Skeleton";
import styles from "./MusicLoading.module.css";

export default function MusicLoading() {
    return (
        <div className={styles.wrapper}>
            {/* header */}
            <Sk w="260px" h="36px" r="8px" mb="10px" />

            {/* input card */}
            <div className={styles.inputCard}>
                <Sk w="120px" h="11px" r="4px" mb="12px" />
                <Sk w="100%" h="100px" r="10px" mb="16px" />
                <div className={styles.inputFooter}>
                    <Sk w="60px" h="12px" r="4px" />
                    <Sk w="130px" h="40px" r="10px" />
                </div>
            </div>

            {/* results label */}
            <Sk w="140px" h="11px" r="4px" mb="14px" />
        </div>
    );
}