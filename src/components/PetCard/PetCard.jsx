
import React from 'react';

const PetCard = ({ pet }) => {
  return (
    < div className=" hover:shadow-xl w-72 h-[456px] bg-white rounded-bl-[40px] rounded-br-[40px] shadow">
      <img className="w-72 h-72" src={pet.image} alt={pet.name} />
      <p className="w-[231px] text-neutral-900 text-2xl font-bold font-['Manrope'] mt-[20px] ml-[20px]">{pet.description}</p>
      <button className="hover:bg-blue-400 hover:text-white w-[248px] h-[38px] mx-[20px] mt-[20px] rounded-[40px] border-2 border-blue-400 justify-center items-center gap-2.5 inline-flex text-blue-400 font-semibold font-['Manrope'] tracking-wide" type='button'> Learn more </button>
    </div>
  
  );
};



export default PetCard;
