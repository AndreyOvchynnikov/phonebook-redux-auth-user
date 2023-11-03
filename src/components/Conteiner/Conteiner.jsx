import css from './Conteiner.module.css';


const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export default Container;