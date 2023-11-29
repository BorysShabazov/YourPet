export default function ListItemDescription({
  title = '',
  url = '',
  children,
}) {
  const onClick = (e) => {
    if (e.target.title.toLowerCase() === 'time:') {
      e.preventDefault();
    }
    return;
  };

  return (
    <li className="group flex flex-col items-start hover:text-blue ">
      <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base  group-hover:text-blue">
        {title}
      </p>
      <a
        className="no-underline font-normal text-xs md:text-sm xl:text-base"
        title={title}
        href={url}
        target={!url.includes('tel' || 'mailto' || 'time') ? '_blank' : ''}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}
