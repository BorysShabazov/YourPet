import { parseISO, format } from 'date-fns';

const ListOfNotice = ({ data }) => {
  const dateObject = parseISO(data.birthDate);
  const formattedDate = format(dateObject, 'dd.MM.yyyy');

  return (
    <div className="flex mt-[19px]">
      <ul className="text-justify justify-center inline-flex gap-[8px] flex-col text-black smOnly:text-sm md:text-base font-semibold font-['Manrope']">
        <li>
          <p>Name:</p>
        </li>
        <li>
          <p>Birthday:</p>
        </li>
        <li>
          <p>Type:</p>
        </li>
        <li>
          <p>Place:</p>
        </li>
        <li>
          <p>The sex:</p>
        </li>
        <li>
          <p>Email:</p>
        </li>
        <li>
          <p>Phone:</p>
        </li>
        {data.price && (
          <li>
            <p>Price:</p>
          </li>
        )}
      </ul>
      <ul className=" inline-flex gap-[8px] justify-center flex-col ml-5 text-black smOnly:text-sm md:text-base font-medium font-['Manrope']">
        <li>
          <p>
            {data.name || (
              <span className="text-gray-300">No information...</span>
            )}
          </p>
        </li>
        <li>
          <p>
            {formattedDate || (
              <span className="text-gray-300">No information...</span>
            )}
          </p>
        </li>
        <li>
          <p>
            {data.type || (
              <span className="text-gray-300">No information...</span>
            )}
          </p>
        </li>
        <li>
          <p>
            {data.location || (
              <span className="text-gray-300">No information...</span>
            )}
          </p>
        </li>
        <li>
          <p>
            {data.sex || (
              <span className="text-gray-300">No information...</span>
            )}
          </p>
        </li>
        <li className="hover:scale-110 transition-transform transform-all text-yellow smOnly:text-sm md:text-base font-medium font-['Manrope'] underline">
          <a href={data.owner.email ? `mailto:${data.owner.email}` : '#'}>
            {data.owner.email || (
              <span className="text-gray-300">No information...</span>
            )}
          </a>
        </li>
        <li className="hover:scale-110 transition-transform transform-all text-yellow smOnly:text-sm md:text-base font-medium font-['Manrope'] underline">
          <a href={data.owner.phone ? `tel:${data.owner.phone}` : '#'}>
            {data.owner.phone || (
              <span className="text-gray-300">No information...</span>
            )}
          </a>
        </li>
        {data.price && (
          <li>
            <p className="text-green">{data.price}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ListOfNotice;
