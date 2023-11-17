import MyPetsCard from "../../components/MyPetsCard/MyPetsCard";
import UserCard from "../../components/UserCard/UserCard";
import { ProfileContainer, ProfileWrapper } from "./UserPage.styled";

const UserPage = () => {

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <UserCard/>
        <MyPetsCard/>
      </ProfileWrapper>
    </ProfileContainer>
  )
};

export default UserPage;
