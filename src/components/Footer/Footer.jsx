import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <small className={css.text}>
                &copy; {new Date().getFullYear()} Developed with{' '}
                <span role="img" aria-label="heart" className={css.heart}>
                ❤
                </span>
                by
                <a
                href="https://github.com/AndreyOvchynnikov"
                target="_blank"
                rel="noopener noreferrer"
                title="Github profile"
                aria-label="Link to Github profile"
                className={css.link}
                >
                    <span className={css.name}>AndreyOvchynnikov</span>
                </a>
            </small>
        </footer>
    )
}

export default Footer
