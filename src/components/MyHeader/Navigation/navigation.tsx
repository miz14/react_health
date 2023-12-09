import css from "./navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={css.navigation_block}>
            <ul>
                <li>Home</li>
                <li>Find a doctor</li>
                <li>Apps</li>
                <li>Testomonals</li>
                <li>About us</li>
            </ul>
        </nav>
    )
}