import PropTypes from 'prop-types';


export const OutgoingMessage = ({ text }) => {
    return (
        <div className='flex items-end justify-end outgoing'>
            <div className='rounded bg-primary-500 w-8 aspect-square p-1.5 bg-main-blue-700'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
                    <path fill='#ffffff' d='M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56' />
                </svg>
            </div>
            <p className='mx-2 p-2 rounded leading-4 text-sm text-justify bg-gray-200'>{ text }</p>
        </div>
    );
};


OutgoingMessage.propTypes = {
    text: PropTypes.string.isRequired
};
