import styled from '@emotion/styled';

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--background);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 767px) {
    background-image: url('src/images/mobile_bg.png');
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    background-image: url('src/images/tablet_bg.png');
  }
  @media (min-width: 1280px) {
    background-image: url('src/images/desktop_bg.png');
  }
`;
