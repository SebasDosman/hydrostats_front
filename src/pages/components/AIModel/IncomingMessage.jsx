import PropTypes from 'prop-types';

import { Loading } from '../../../components';


export const IncomingMessage = ({ text, isLoading }) => {
    return (
        <div className='flex items-end incoming w-11/12'>
            <div className='rounded bg-primary-500 w-8 aspect-square p-1.5 bg-main-blue-700'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                    <g fill='none' stroke='#ffffff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' color='#ffffff'>
                        <path d='M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4' />
                        <circle cx='7' cy='3' r='1' />
                        <circle cx='17' cy='3' r='1' />
                        <path d='M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7' />
                        <path d='M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15' />
                    </g>
                </svg>
            </div>
            { 
                isLoading
                ? <Loading />
                : <p className='mx-2 p-2 rounded leading-4 text-sm text-justify bg-gray-200'>{ text }</p>
            }
        </div>
    );
};


IncomingMessage.propTypes = {
    text: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
};
