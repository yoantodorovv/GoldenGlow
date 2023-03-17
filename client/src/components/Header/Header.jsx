import { Navigation } from "./Navigation";

import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['logo']}>
                <h1>GoldenGlow</h1>
            </div>
            <Navigation />
        </header>
    );
}