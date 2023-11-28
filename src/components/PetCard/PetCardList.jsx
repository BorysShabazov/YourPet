import React from "react";
import PetCard from "./PetCard";

const PetCardList = ({ pets }) => {
    return (
      <div className="mt-[24px] md:mt-[40px]  smOnly:justify-center flex flex-wrap  gap-[24px] md:gap-x-[32px]">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}

      </div>
    );
  };


  export default PetCardList