import PropTypes from 'prop-types';

const NavLink = ({ children, href, className = 'font-medium' }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavLink;
