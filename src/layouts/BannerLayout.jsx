import PropTypes from 'prop-types';


export const BannerLayout = ({ children }) => {
    return (
        <section className='relative flex justify-center items-center bg-cover bg-center' style={{ backgroundImage: "url('/background.png')", height: 'calc(100vh / 0.8)' }}>
            <div className='absolute inset-0 bg-[#253E5B] opacity-50'></div>
            <main className='z-10 w-full flex justify-center items-center p-4'>
                { children }
            </main>
        </section>
    );
};


BannerLayout.propTypes = {
    children: PropTypes.node.isRequired
};