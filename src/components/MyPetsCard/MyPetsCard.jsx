import { DeleteIcon } from '../DeleteIcon/DeleteIcon';


const MyPetsCard = ({photo, name, birth, type, comments}) => {

  return (
                <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[16px] pb-[24px] px-[20px] md:w-[703px] md:flex xl:w-[821px] md:gap-5">
                  <div className="w-60 rounded-[20px] justify-center flex smOnly:mb-[20px] ">
                    <img
                      className="w-full h-[240px] rounded-[40px] object-cover md:w-[128px] md:h-[128px] xl:w-[161px] xl:h-[161px]"
                      src={photo}
                    />
                  </div>
                  <div className="relative w-full">
                    <div className="absolute top-[-4px] right-[0]">
                      <DeleteIcon />
                    </div>
                    <ul className="flex flex-col gap-[12px]">
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Name:
                          </span>{' '}
                          {name}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Date of birth:
                          </span>{' '}
                          {birth}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Type:
                          </span>{' '}
                          {type}
                        </p>
                      </li>
                      <li>
                        <p className="text-black text-sm font-normal font-['Manrope'] tracking-wide">
                          <span className="text-black text-sm font-bold font-['Manrope'] tracking-wide">
                            Comments:
                          </span>{' '}
                          {comments}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

  );
};
export default MyPetsCard;
