import PropTypes from 'prop-types';

const StackChip = ({ stack, className = '', ...props }) => {
  return (
    <div
      {...props}
      className={
        'px-2 py-1 flex bg-primary drop-shadow-sm items-center text-white  gap-1 rounded-md text-xs ' +
        className
      }
    >
      {stack.icon}
      {stack.name}
    </div>
  );
};

StackChip.propTypes = {
  stack: PropTypes.object,
  className: PropTypes.string,
};

export default StackChip;
