export const SecondSection = () => {
    return (
        <section className='bg-white flex flex-col md:flex-row items-center justify-center py-40 px-10 text-black'>
            <div className='flex flex-col items-center w-full max-w-5xl gap-10 md:flex-row md:gap-8'>
                <img src='/isolation-mode.svg' alt='HydroStats' className='w-64 h-auto md:mr-6' />
                <div className='flex flex-col items-center w-full md:w-3/4'>
                    <h2 className='text-4xl font-bold mb-4 text-center'>
                        ¿Qué es <span className='text-main-blue-700'>HydroStats</span>?
                    </h2>
                    <p className='text-justify'>
                        HydroStats es una plataforma interactiva diseñada para identificar precipitaciones y niveles de caudal en estaciones ubicadas en la región pacífica colombiana. Utilizando <b>Power BI</b>, HydroStats proporciona visualizaciones claras y accesibles de datos meteorológicos, mejorando la comprensión y gestión de las precipitaciones. Esta plataforma facilita una respuesta más eficaz ante eventos climáticos extremos y apoya la planificación agrícola y la gestión de recursos hídricos en la región.
                    </p>
                </div>
            </div>
        </section>
    );
};

