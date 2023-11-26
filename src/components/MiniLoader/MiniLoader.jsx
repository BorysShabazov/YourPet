import './MiniLoader.css';
import svg from './Loader.svg';

const MiniLoader = () => {
  return (
    <>
      <div className="ajax-miniloader">
        {[...Array(1)].map((_, i) => (
          <div key={i} className={`minipaw minipaw${i + 1} no-cssanimations`}>
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <use href={`${svg}#minipaw`} />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default MiniLoader;
