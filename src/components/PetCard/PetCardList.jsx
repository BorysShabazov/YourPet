import React from "react";
import PetCard from "./PetCard";

const PetCardList = ({ pets }) => {
    return (
      <div className="mt-[24px] md:mt-[40px] mx-auto  flex flex-wrap  gap-[24px] md:gap-x-[32px]">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}

      </div>
    );
  };


  export default PetCardList