const data = {
  group: 'In good hands',
  title: 'Сute dog looking for a home',
  name: 'Pesto',
  birthday: '21.09.2020',
  type: 'Dog',
  place: 'Kharkiv',
  the_sex: 'male',
  email: 'user@mail.com',
  phone: '+380123456789',
  comments:
    'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! ',
};

const LearnMore = () => {
// Треба ще використати функцію для перевірки чи є користувач авторизований
  return (
    <div className=" smOnly:w-64 md:max-w-2xl">
      <div className="md:flex ">
        <div className="flex relative justify-center items-center smOnly:mt-8">
        <p className=" InGoodHands py-2 px-3 rounded-e-2xl bg-lightBlue text-neutral-900 text-sm font-medium font-['Manrope'] top-5 smOnly: left-2 md:left-0 absolute">{data.group}</p>
          <img
            src="/src/images/Rectangle24.png"
            alt="dog"
            className="Rectangle303 smOnly:w-60 smOnly:h-60 md:w-64 md:h-72 rounded-bl-3xl rounded-br-3xl"
          />
        </div>
 <div className="md:ml-6">
 <h2 className=" text-black text-2xl sm: w-52 font-bold font-['Manrope']">
          {data.title}
        </h2>
        <div className="flex ">
          <ul className="text-justify justify-center inline-flex gap-2 flex-col text-black text-[16px] font-semibold font-['Manrope']">
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
          </ul>
          <ul className=" inline-flex gap-3 justify-center flex-col ml-5 text-black text-[14px] font-medium font-['Manrope']">
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
          </ul>
        </div>
 </div>
      </div>
      <p className=" mt-3">Comments: {data.comments}</p>
      <div className="button-container flex gap-4 smOnly:mt-3 md:mt-16 smOnly:flex-col md:justify-end">
        <a href={`tel:${data.phone}`}
          type="button"
          className=" text-blue text-base font-bold font-['Manrope'] tracking-wide smOnly:w-64 smOnly:h-10 md:w-32 md:h-10 px-5 py-2 rounded-3xl border-2 border-blue justify-center items-center gap-2 inline-flex"
        >
          Contact
        </a>
        <button
          type="button"
          className=" md:w-32 md:h-10 smOnly:w-64 smOnly:h-10 px-5 py-2 bg-blue rounded-3xl justify-center items-center gap-2 inline-flex text-stone-50 text-base font-bold font-['Manrope'] tracking-wide"
        >
          Add to<span>@</span>
        </button>
      </div>
    </div>
  );
};

export default LearnMore;

// const [isLearnMoreModalOpen, setLearnMoreModalOpen] = useState(false);

// const handleOpenLearnMoreModal = () => {
//     setLearnMoreModalOpen(true);

//   };
//   const handleCloseLearnMoreModal = () => {
//     setLearnMoreModalOpen(false);
//   };

{/* <BasicModal 
isOpen={isLearnMoreModalOpen}
        onCloseModal={handleCloseLearnMoreModal} >
             <LearnMore onCloseModal={handleCloseLearnMoreModal} />
        </BasicModal> */}
