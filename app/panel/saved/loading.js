import { Sk } from "@/components/ui/Skeleton";
import styles from "./SavedLoading.module.css";

export default function SavedLoading() {
    return (
        <div className={styles.wrapper}>
            {/* header */}
            <Sk w="140px" h="32px" r="8px" mb="8px" />
            <Sk w="260px" h="14px" r="6px" mb="32px" />

            {/* tab bar */}
            <Sk w="280px" h="40px" r="12px" mb="24px" />

            {/* section label */}
            <Sk w="100px" h="11px" r="4px" mb="12px" />

            {/* saved cards grid */}
            <div className={styles.cardsGrid} style={{ marginTop: "30px" }} >
                {[1, 2].map((i) => (
                    <div key={i} className={styles.card}>
                        <Sk w="100%" h="90px" r="10px" mb="14px" />
                        <Sk w="150px" h="17px" r="6px" mb="6px" />
                        <Sk w="120px" h="12px" r="4px" mb="12px" />
                        <div className={styles.tags}>
                            <Sk w="60px" h="22px" r="99px" />
                            <Sk w="70px" h="22px" r="99px" />
                        </div>
                        <div className={styles.actions}>
                            <Sk w="100%" h="34px" r="8px" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
