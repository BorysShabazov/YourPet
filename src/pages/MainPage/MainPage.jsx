import { useEffect } from 'react';
import css from './MainPage.module.css';
import { Container } from '../../ui/Container/Container';

const MainPage = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => document.body.classList.remove('no-scroll');
  }, []);

  return (
    <Container>
      <div className={css.MainContainer}>
        <h1 className={css.MainTitle}>Take good care of your small pets</h1>
        <div className={css.ImageWrapper}>
          <img className={css.ImageLeft} alt="small pets dog" />
          <img className={css.ImageCenter} alt="pets dog" />
          <img className={css.ImageRight} alt="pets cat" />
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
