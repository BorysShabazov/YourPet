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
    <li className="flex flex-col items-start">
      <p className="flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base ">
        {title}
      </p>
      <a
        className="no-underline font-normal text-xs md:text-sm xl:text-base"
        title={title}
        href={url}
        target={!url.includes('tel' || 'mailto') ? '_blank' : ''}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}
