import styled from '@emotion/styled'


export const ProfileContainer = styled.div`

  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ProfileWrapper = styled.div`

  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 46px;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
  padding-top: 60px;
  padding-bottom: 60px;
  }
  @media screen and (min-width: 1280px) {
  flex-direction: row;
  }
`;
