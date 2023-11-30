import { format } from 'date-fns';

const dayСurrent = new Date();
const dayWeek = format(dayСurrent, ' ');

const WorkTimeHover = ({ timetable }) => {
  const onClick = (evt) => {
    evt.preventDefault();
    return;
  };

  const workDays = timetable.map((item) =>
    item.day === dayWeek.toUpperCase() ? (
      <li
        className="text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]"
        key={item.day}
      >
        {item?.isOpen ? (
          <p className="flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]">
            <span>{item.day}</span> {item.from}-{item.to}
          </p>
        ) : (
          <p className="flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]">
            <span>{item.day}</span> Closed
          </p>
        )}
      </li>
    ) : (
      <li
        className="text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[6px]"
        key={item.day}
      >
        {item?.isOpen ? (
          <p className="flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]">
            <span>{item.day}</span> {item.from}-{item.to}
          </p>
        ) : (
          <p className="flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]">
            <span>{item.day}</span> Closed
          </p>
        )}
      </li>
    ),
  );
  return (
    <ul
      className="hidden group-hover:inline absolute top-[36px] md:top-[40px] xl:top-[48px] left-0 w-[140px]  flex-col items-stretch content-center bg-white rounded-lg shadow border border-blue p-[12px]"
      onClick={onClick}
    >
      {workDays}
    </ul>
  );
};

export default WorkTimeHover;
