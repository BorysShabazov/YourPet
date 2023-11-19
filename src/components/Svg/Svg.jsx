import sprite from '../../images/sprite.svg';

const Svg = ({ id, size, fill, stroke }) => {
  return (
    <div>
      <svg width={size} height={size} fill={fill} stroke={stroke}>
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};

Svg.defaultProps = {
  size: 24,
  color: 'black',
};

export default Svg;
