import PropTypes from 'prop-types';

const NavLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg"
    >
      {label}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;
