import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__container"]}>
                <h1 className={styles["header__heading"]}>Inventora</h1>
            </div>
            <div className={styles["header__nav-menu__container"]}>
                <ul className={styles["header__nav-menu"]}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};
