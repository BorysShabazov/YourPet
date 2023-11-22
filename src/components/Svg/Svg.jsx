import sprite from '../../images/sprite.svg';

const Svg = ({ id, size, fill, stroke, className = '', onClick }) => {
  return (
    <div onClick={onClick} className={className}>
      <svg width={size} height={size} fill={fill} stroke={stroke}>
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};

Svg.defaultProps = {
  size: 24,
};

export default Svg;
