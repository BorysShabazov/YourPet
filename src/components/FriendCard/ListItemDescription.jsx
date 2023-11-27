export default function ListItemDescription({
  title = '',
  url = '',
  children,
}) {
  return (
    <li className="flex flex-col items-start">
      <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
        {title}
      </p>
      <a
        className="no-underline font-normal text-xs md:text-sm xl:text-base"
        href={url}
        target="_blank"
      >
        {children}
      </a>
    </li>
  );
}
