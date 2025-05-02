import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-secondary-900 hover:text-primary-500 font-normal transition-colors duration-300 font-secondary text-lg"
    >
      {label}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;