import PropTypes from 'prop-types';

const NavLink = ({ children, href, className = '' }) => {
  return (
    <a href={href} className={' font-medium border-expand' + className}>
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
