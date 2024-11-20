import PropTypes from 'prop-types';

const Footer = ({ className = '', ...props }) => {
  return (
    <div {...props} className={'mx-auto max-w-6xl p-6 ' + className}>
      <span className='font-medium text-md'>
        &copy; 2024 Jasper Fernandez. All Rights Reserved.
      </span>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
