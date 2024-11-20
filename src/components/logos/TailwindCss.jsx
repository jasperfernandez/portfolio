import PropTypes from 'prop-types';

const TailwindCss = ({ color = '#fff', size = '20' }) => {
  return (
    <svg
      fill={color}
      width={size + 'px'}
      height={size + 'px'}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z'
      />
    </svg>
  );
};

TailwindCss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

export default TailwindCss;
