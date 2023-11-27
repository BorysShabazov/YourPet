import { useEffect, useState } from 'react';

import { Container, Title } from '../../ui';
import { getFriends } from '../../assets/getFriends';
import FriendCards from '../../components/FriendCard/FriendCard';

const OurFriendsPage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const data = await getFriends();
        setFriends(data.data.friends);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFriends();
  }, []);

  return (
    <Container className='pt-[40px] md:pt-[80px]'>
      <Title className='mb-[24px]'>Our Friend</Title>
      <FriendCards friends={friends} />
    </Container>
  );
};

export default OurFriendsPage;
