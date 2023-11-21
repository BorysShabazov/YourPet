const ListOfNotice = ({ data }) => {
return (
    <div className="flex mt-[19px]">
          <ul className="text-justify justify-center inline-flex gap-[8px] flex-col text-black text-sm font-semibold font-['Manrope']">
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
           {data.price && <li>
              <p>Price:</p>
            </li>}
          </ul>
          <ul className=" inline-flex gap-[12px] justify-center flex-col ml-5 text-black text-xs font-medium font-['Manrope']">
            <li>
              <p>{data.name}</p>
            </li>
            <li>
              <p>{data.birthday}</p>
            </li>
            <li>
              <p>{data.type}</p>
            </li>
            <li>
              <p>{data.place}</p>
            </li>
            <li>
              <p>{data.the_sex}</p>
            </li>
            <li className="text-yellow text-xs font-medium font-['Manrope'] underline">
              <a href="#">{data.email}</a>
            </li>
            <li className="text-yellow text-xs font-medium font-['Manrope'] underline">
              <a href="#">{data.phone}</a>
            </li>
          { data.price && <li>
              <p className="text-green">{data.price}</p>
            </li>}
          </ul>
        </div>
)
};

export default ListOfNotice;