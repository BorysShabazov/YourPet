import ListItemDescription from './ListItemDescription';
import defaultFriends from '../../images/defaultFriends.jpg';

const dayNow = new Date();
const deyWeekArr = [6, 0, 1, 2, 3, 4, 5];

const numberOfDay = deyWeekArr[dayNow.getDay()];

export const FriendsItem = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    friend;

  return (
    <li className=" px-[14px] py-[16px] bg-white rounded-[40px] shadow w-[280px] md:w-[336px] xl:w-[394px]">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="block mb-[16px] font-bold text-center text-blue text-xl font-['Manrope'] "
      >
        {title}
      </a>
      <div className="grid items-start gap-[16px] grid-cols-[100px_auto] md:grid-cols-[120px_auto] md:gap-[14px] xl:grid-cols-[158px_auto] xl:gap-[16px]">
        <img
          src={imageUrl ?? defaultFriends}
          alt={title}
        />
        <ul className="flex flex-col items-start justify-center gap-[12px]">
          <ListItemDescription title="Time:">
            {workDays
              ? !workDays[numberOfDay].isOpen
                ? 'Close'
                : `${workDays[numberOfDay].from || ''}-${
                    workDays[numberOfDay].to || ''
                  }`
              : 'day and night'}
          </ListItemDescription>
          {address ? (
            <ListItemDescription title="Adress:" url={addressUrl}>
              {address}
            </ListItemDescription>
          ) : (
            <ListItemDescription title="Adress:" url={url}>
              website only
            </ListItemDescription>
          )}
          {email ? (
            <ListItemDescription title="Email:" url={`mailto:${email}`}>
              {email}
            </ListItemDescription>
          ) : (
            <ListItemDescription title="Email:" url={url}>
              website only
            </ListItemDescription>
          )}
          {phone ? (
            <ListItemDescription title="Phone:" url={`tel:${phone}`}>
              {phone}
            </ListItemDescription>
          ) : (
            <ListItemDescription title="Phone:" url={url}>
              website only
            </ListItemDescription>
          )}
        </ul>
      </div>
    </li>
  );
};
