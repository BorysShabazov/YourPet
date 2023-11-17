import styled from '@emotion/styled'

export const UserInformationContainer = styled.div`

  width: 100%;
  position: relative;
  padding-top: 20px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 20px;

  box-shadow: var(--shadow-default);
  border-radius: 20px;

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;


export const UserInformationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  @media screen and (min-width: 320px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;


export const EditProfile = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;


export const UserCardTitle = styled.div`

  @media screen and (min-width: 320px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;

export const UserCardAvatar = styled.div`
  width: 182px;
  height: 182px;
  overflow: hidden;
  border-radius: 40px;
  background-color: var(--light-blue);
  margin-bottom: 14px;

  @media screen and (min-width: 320px) {

  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;

export const UserFormWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 25px;
width: 220px;
  
@media screen and (min-width: 320px) {
width: 264px;
  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;

export const UserInputWrapper = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
font-size: 14px;


& input {
  width: 150px;
  border: 1px solid var(--blue);
  border-radius: 20px;
  padding: 4px 12px;
}
  
  @media screen and (min-width: 320px) {
  & input {
  width: 190px;
}
  }
  @media screen and (min-width: 768px) {

  }
  @media screen and (min-width: 1280px) {

  }
`;


export const AvatarUpload = styled.div`
  width: 200px;
  margin-bottom: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; 

  & input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  
  }
`;

