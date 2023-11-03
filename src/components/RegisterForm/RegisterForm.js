import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import Section from 'components/Section';
import Title from 'components/Title';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <Title>Create your account</Title>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <span className={css.text}>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Yout name"
            aria-label="Input for your name"
            className={css.input}
            required
          />
        </label>
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
            placeholder="Should be at least 6 characters"
            aria-label="Input for your password"
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>Create account</button>
    </form>
    </Section>
    
  );
};
