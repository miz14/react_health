import css from "./navigation.module.scss";

export default function Navigation() {
    return (
        <nav className={css.navigation_block}>

            <a href="">Home</a>
            <a href="">Find a doctor</a>
            <a href="">Apps</a>
            <a href="">Testomonals</a>
            <a href="">About us</a>

        </nav>
    )
}