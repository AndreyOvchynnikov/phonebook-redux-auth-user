import holeImage from '../../components/images/hole.svg';
import css from './HomePageImage.module.css';

const HomePageImage = () => {
    return (
        <div className={css.container}>
            <img src={holeImage} alt="Blackhole" className={css.image} />
        </div>
    )  
}

export default HomePageImage;