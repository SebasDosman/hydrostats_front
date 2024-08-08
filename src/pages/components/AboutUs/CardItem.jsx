import PropTypes from 'prop-types';


export const CardItem = ({ image, career, name, description, github }) => {
    return (
        <div className='relative mt-12 md:mt-24 mb-32 w-full mx-auto'>
            <div className='rounded-lg overflow-hidden shadow-md bg-white w-72'>
                <div className='absolute -mt-20 w-full flex justify-center'>
                    <div className='h-32 w-32'>
                        <img src={ image } className='rounded-full object-cover h-full w-full shadow-md' />
                    </div>
                </div>
                <div className='px-6 mt-16'>
                    <h2 className='font-bold text-3xl text-center mb-1'>{ name }</h2>
                    <p className='text-main-blue-700 text-sm text-center'>{ career }</p>
                    <p className='text-center text-gray-600 text-base pt-3 font-normal'>
                        { description }
                    </p>
                    <div className='w-full flex justify-center pt-5 pb-5'>
                        <a href={ github } className='mx-5'>
                            <div aria-label='Github'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                                    fill='none' stroke='#718096' strokeWidth='1.5' strokeLinecap='round'
                                    strokeLinejoin='round' className='feather feather-github'>
                                    <path
                                        d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'>
                                    </path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


CardItem.propTypes = {
    image: PropTypes.string.isRequired,
    career: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
};
