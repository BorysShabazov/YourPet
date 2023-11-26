import { useEffect, useState } from 'react';

import { Container, Title } from '../../ui';
import { getFriends } from '../../assets/getFriends';
import FriendCard from '../../components/FriendCard/FriendCard';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await getFriends();
        setFriends(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFriends();
  }, []);

  return (
    <Container>
      <Title className="mt-[40px] md:mt-[80px]">Our Friends</Title>
      <FriendCard friends={friends} />
    </Container>
  );
};

export default OurFriendsPage;
