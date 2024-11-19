import PropTypes from 'prop-types';

const Button = ({
  className = '',
  children,
  variant = 'primary',
  ...props
}) => {
  const baseClasses = 'px-4 py-2 font-medium rounded-sm ';
  const variantClasses =
    variant === 'secondary'
      ? 'bg-gray-100 text-foreground'
      : 'bg-primary text-white';

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
