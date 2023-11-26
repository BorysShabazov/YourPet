import { FriendsItem } from './FriendsItem';

const FriendCard = ({ friends }) => {
  const friendCard = friends.map(
    ({
      _id,
      title,
      url,
      addressUrl,
      imageUrl,
      address,
      workDays,
      phone,
      email,
    }) => (
      <FriendsItem
        key={_id}
        title={title}
        siteUrl={url}
        mapUrl={addressUrl}
        imageUrl={imageUrl}
        adress={address}
        workDays={workDays}
        phone={phone}
        email={email}
      />
    ),
  );

  return (
    <>
      <ul className="grid gap-[20px] md:grid-cols-2 md:gap-[32px] xl:md:grid-cols-3">
        {friendCard}
      </ul>
    </>
  );
};

export default FriendCard;

// FriendCard.defaultProps = {
//   items: [],
// };
