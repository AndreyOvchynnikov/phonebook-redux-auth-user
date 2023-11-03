import { Link } from "react-router-dom";
import css from './HomePageButton.module.css';


const HomePageButton = () => {
    return (
        <Link className={css.button} to='/contacts'>Try it now!</Link>
    )
}

export default HomePageButton;