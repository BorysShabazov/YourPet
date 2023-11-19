import { useState } from 'react';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';

const petsObj = [
  {
    id: 1,
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Persialainen.jpg',
    name: 'Simba',
    birth: '22.22.2022',
    type: ' Persian cat',
    comments:
      " Simba is a red Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
  },
  {
    id: 2,
    photo:
      'https://people.com/thmb/n6EdTmvAL3TkkAqrT47caD6tUu8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(723x121:725x123)/wisp-the-cat-from-tiktok-092823-1-74797b02afe7475295e1478b2cdf2883.jpg',
    name: 'Max',
    birth: '13.11.2023',
    type: ' Persian cat',
    comments:
      " Max is a white Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat.",
  },
];

const MyPetsCard = () => {
  const [pets, setPets] = useState(petsObj);

  return (
    <div>
      <h2 className="text-black  text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] ">
        My pets:
      </h2>
      <ul className="flex flex-col gap-[20px]">
        {pets
          ? pets.map((el) => (
              <li key={el.id}>
                <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[16px] pb-[24px] px-[20px] md:w-full md:flex">
                  <div className="w-60 mb-[20px] rounded-[20px] justify-center flex md:w-full">
                    <img
                      className="w-[182px] h-[182px] rounded-[40px] object-cover"
                      src={el.photo}
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-[-4px] right-[0]">
                      <DeleteIcon />
                    </div>
                    <ul className="flex flex-col gap-[12px]">
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Name:
                          </span>{' '}
                          {el.name}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Date of birth:
                          </span>{' '}
                          {el.birth}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Type:
                          </span>{' '}
                          {el.type}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Comments:
                          </span>{' '}
                          {el.comments}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))
          : 'not found'}
      </ul>
    </div>
  );
};
export default MyPetsCard;
