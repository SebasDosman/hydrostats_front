import PropTypes from 'prop-types';

import { NavBarItem } from '..';


export const NavBarList = ({ links = [], closeMenu }) => {
    return (
        <ul className='font-medium flex flex-col mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:p-0 md:border-0'>
            {
                links.map(link => (
                    <NavBarItem key={ link.id } url={ link.url } name={ link.name } closeMenu={ closeMenu } />
                ))
            }
        </ul>
    );
};


NavBarList.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    closeMenu: PropTypes.func.isRequired
};
