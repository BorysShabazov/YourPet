import sprite from '../../images/sprite.svg';

const Svg = ({ id, size, color }) => {
  return (
    <svg width={size} height={size} fill={color}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

Svg.defaultProps = {
  size: 30,
  color: 'black',
};

export default Svg;
