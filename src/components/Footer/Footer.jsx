import { NavLink } from 'react-router-dom';

import { globalConfig } from '../../config';


export const Footer = () => {
    return (
        <footer className='py-3 bg-gray-700 sm:mx-auto md:py-6'>
            <div className='flex items-center justify-center gap-8 md:gap-12 mx-2'>
                <img src='/datathon.png' className='h-10' />
                <span className='block text-sm text-white text-center'>
                    ©Copyright { globalConfig.year } por 
                    <NavLink to='/home'> { globalConfig.title }™</NavLink> | Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
};
