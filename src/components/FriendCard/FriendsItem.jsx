const dayNow = new Date();
const numberOfDay = dayNow.getDay();

export const FriendsItem = ({
  title,
  siteUrl,
  mapUrl,
  imageUrl,
  adress,
  workDays,
  phone,
  email,
}) => {
  return (
    <li className="px-[16px] py-[12px] w-[280px] h-[239px] bg-white rounded-[40px] shadow md:w-[336px] md:h-[275px] xl:max-w-[395px]">
      <a
        href={siteUrl}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="block mb-[16px] font-bold text-center text-blue-400 text-xl font-['Manrope'] "
      >
        {title}
      </a>
      <div className="flex  flex-row  items-start">
        <img
          className="mr-[16px] max-w-[100px] md:max-w-[120px] md:mr-[14px] xl:max-w-[158px] xl:mr-16px"
          src={imageUrl}
          alt={title}
        />
        <ul className="flex flex-col items-start justify-center relative [&>*:not(:last-child)]:mb">
          <li className="flex flex-col items-start mb-[12px] last:mb-0">
            <div>
              <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
                Time:
              </p>
              <p className="cursor-pointer flex items-center p-0 border-none text-blue-400 font-medium font-['Manrope'] text-xs w-[85px] md:text-sm md:w-[76px] xl:w-[141px] xl:text-base">
                {workDays[numberOfDay].from}-{workDays[numberOfDay].to}
              </p>
            </div>
          </li>
          <li className="flex flex-col items-start mb-[12px] last:mb-0">
            <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
              Adress:
            </p>
            <a
              className="no-underline font-medium text-xs md:text-sm xl:text-base"
              href={mapUrl}
              target="_blank"
            >
              {adress}
            </a>
          </li>
          <li className="flex flex-col items-start mb-[12px] last:mb-0">
            <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
              Email:
            </p>
            <a
              className="no-underline font-medium text-xs md:text-sm xl:text-base"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </li>
          <li className="flex flex-col items-start mb-[12px] last:mb-0">
            <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
              Phone:
            </p>
            <a
              className="no-underline font-medium text-xs md:text-sm xl:text-base"
              href={`tel:${phone}`}
            >
              {phone}
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
