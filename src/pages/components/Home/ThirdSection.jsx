export const ThirdSection = () => {
    return (
        <section className='bg-main-blue-700 flex flex-col items-center justify-start py-20 text-center text-white'>
            <div className='flex flex-col items-center w-full max-w-5xl gap-20'>
                <div className='w-4/5 md:w-full'>
                    <h2 className='text-4xl font-bold'>
                    HydroStats esta aquí para facilitar el acceso a datos meteorológicos, permitiendo a los usuarios tomar decisiones informadas y mejorar la gestión ante el cambio climático.
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-around w-full gap-10'>
                    <div className='bg-white text-black rounded-4xl p-10 shadow-lg flex flex-col items-center rounded-3xl'>
                        <img src='/vector.svg' alt='Datos Actualizados' className='h-20 w-20 mb-4'/>
                        <b className='text-2xl text-black'>Datos Actualizados</b>
                    </div>
                    <div className='bg-white text-black rounded-4xl p-10 shadow-lg flex flex-col items-center rounded-3xl'>
                        <img src='/chart-icon.svg' alt='Estudios de Datos' className='h-20 w-20 mb-4'/>
                        <b className='text-2xl text-black'>Estudios De Datos</b>
                    </div>
                    <div className='bg-white text-black rounded-4xl p-10 shadow-lg flex flex-col items-center rounded-3xl'>
                        <img src='/isolation-mode-1.svg' alt='Potenciado con IA' className='h-20 w-20 mb-4'/>
                        <b className='text-2xl text-black'>Potenciado Con IA</b>
                    </div>
                </div>
            </div>
        </section>
    );
};

