import css from './buttonBurger.module.css';

export default function ButtonBurger({ children, onClick }) {
  return (
    <button type="button" className={css.buttonBurger} onClick={onClick}>
      {children}
    </button>
  );
}
