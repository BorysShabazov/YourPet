import ListItemDescription from './ListItemDescription';
import css from './friend.module.css';

const dayNow = new Date();
const deyWeekArr = [6, 0, 1, 2, 3, 4, 5];

const numberOfDay = deyWeekArr[dayNow.getDay()];

export const FriendsItem = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    friend;

  return (
    <li className="px-[16px] py-[12px] w-[280px]  bg-white rounded-[40px] shadow md:w-[336px]  xl:w-[395px]">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="block mb-[16px] font-bold text-center text-blue text-xl font-['Manrope'] "
      >
        {title}
      </a>
      <div className="flex  flex-row  items-start gap-[16px] md:gap-[14px] xl:gap-[16px]">
        <img
          className="max-w-[100px] md:max-w-[120px]  xl:max-w-[158px]"
          src={imageUrl}
          alt={title}
        />
        {/* <ul className="flex flex-col items-start justify-center relative [&>*:not(:last-child)]:mb"> */}
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
