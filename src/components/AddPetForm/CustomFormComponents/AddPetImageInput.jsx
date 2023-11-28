import { useState } from 'react';
import Svg from '../../Svg/Svg';

export const AddPetImageInput = ({ petImage, setPhoto, imageError }) => {
  const [petImagePath, setPetImagePath] = useState(
    petImage ? URL.createObjectURL(petImage) : '',
  );
  const hasPetImage = petImagePath !== '';

  return (
    <div className="relative flex flex-col items-center gap-[13px]">
      <label
        className={`flex flex-col gap-[8px] items-center mx-auto ${
          hasPetImage ? 'pointer-events-none' : 'cursor-pointer'
        }`}
      >
        {!hasPetImage && (
          <p className="text-black text-sm font-medium font-manrope">
            Add pet's photo:
          </p>
        )}

        <div
          className={`relative w-[112px] h-[112px] bg-lightBlue bg-cover bg rounded-[20px] md:w-[182px] md:h-[182px]`}
        >
          {hasPetImage ? (
            <img
              className="w-[100%] h-[100%] rounded-[20px] object-cover"
              src={petImagePath}
              alt="Pet photo"
            />
          ) : (
            <Svg
              id="icon-add-cross"
              className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[24px] "
              fill="#54ADFF"
            />
          )}

          <input
            id="petImage"
            name="petImage"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              const localPath = URL.createObjectURL(file);
              setPhoto(file);
              setPetImagePath(localPath);
            }}
            className="w-0 h-0 invisible"
          />
        </div>
      </label>
      {hasPetImage && (
        <label
          htmlFor="petImage"
          className="flex flex-row items-center cursor-pointer"
        >
          <Svg
            id="icon-camera"
            className="flex items-center w-fit mr-[8px]"
            fill="transparent"
            stroke="#54ADFF"
          />
          <p className="text-black text-xs font-normal font-manrope leading-snug tracking-wide">
            Edit photo
          </p>
        </label>
      )}
      {imageError && (
        <p className="absolute -bottom-[18px] break-keep text-red text-xs font-normal">
          {imageError}
        </p>
      )}
    </div>
  );
};
