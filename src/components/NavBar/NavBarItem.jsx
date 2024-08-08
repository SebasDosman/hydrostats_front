import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export const NavBarItem = ({ url, name, closeMenu }) => {
    return (
        <li>
            <NavLink to={ url } onClick={closeMenu } className={ ({ isActive }) => `block py-2 px-3 rounded ${ isActive ? 'text-main-blue-600 font-semibold' : 'text-white' } hover:text-main-blue-600 hover:font-semibold md:border-0 md:p-0 md:hover:bg-transparent` }>
                { name }
            </NavLink>
        </li>
    );
};


NavBarItem.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    closeMenu: PropTypes.func.isRequired
};
