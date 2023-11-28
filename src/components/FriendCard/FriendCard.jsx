import { FriendsItem } from './FriendsItem';

const FriendCards = ({ friends }) => {
  return (
    <>
      <ul className="grid gap-[20px] md:grid-cols-2 md:gap-[32px] xl:grid-cols-3">
        {friends.map((friend) => (
          <FriendsItem key={friend._id} friend={friend} />
        ))}
      </ul>
    </>
  );
};

export default FriendCards;


