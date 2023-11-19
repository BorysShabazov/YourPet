import React from "react";
import PetCard from "./PetCard";

const PetCardList = ({ pets }) => {
    return (
      <div className="flex gap-x-[32px] gap-y-[24px]">
        {pets.map((pet, index) => (
          <PetCard key={index} pet={pet} />
        ))}
      </div>
    );
  };


  export default PetCardList