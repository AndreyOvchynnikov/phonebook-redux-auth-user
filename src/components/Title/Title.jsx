import React, { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Title.module.css';

const Title = ({children}) => {
  const itemRef = createRef(null);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={css}
      nodeRef={itemRef}
    >
      <div className={css.conteiner}>
        <h1 className={css.title} ref={itemRef}>
          {children}
        </h1>
      </div>
    </CSSTransition>
  );
};

export default Title;