import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import Section from 'components/Section';
import Title from 'components/Title';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Title>Log in to Phonebook</Title>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <span className={css.text}>Email</span>
          <input
            type="email"
            name="email"
            placeholder="Yout email"
            aria-label="Input for your email"
            className={css.input}
            required
          />
        </label>
        <label className={css.label}>
          <span className={css.text}>Password</span>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            aria-label="Input for your password"
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </form>
    </Section>
    
  );
};
