import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NavBarList } from '..';
import { globalConfig, navbarConfig } from '../../config';


export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='fixed top-0 left-0 w-full z-20' style={{ background: 'linear-gradient(to bottom, #374151, transparent)' }}>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2'>
                <NavLink to='/home' className='flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src={ globalConfig.icon } className='h-10 md:h-14' alt='HydroStats Logo' />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap text-white'>{ globalConfig.title }</span>
                </NavLink>
                <button data-collapse-toggle='navbar-default' type='button' className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-100 focus:ring-gray-100' aria-controls='navbar-default' aria-expanded={ isOpen } onClick={ toggleMenu }>
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15'/>
                    </svg>
                </button>
                <div className={ `${ isOpen ? 'block' : 'hidden' } w-full md:block md:w-auto` } id='navbar-default'>
                    <NavBarList links={ navbarConfig.links } closeMenu={ closeMenu } />
                </div>
            </div>
        </nav>
    );
};
