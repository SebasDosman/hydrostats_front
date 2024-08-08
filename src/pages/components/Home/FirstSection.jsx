import { globalConfig } from '../../../config';


export const FirstSection = () => {
    return (
        <div className='flex justify-center items-center w-full text-center text-white'>
            <div className='flex flex-col max-w-5xl space-y-6 justify-center items-center md:items-start md:w-1/3 md:mr-144'>
                <h1 className='text-5xl font-semibold text-center text-white md:text-start'>
                    Gestión Climática Inteligente
                </h1>
                <p className='text-white text-justify w-11/12 md:w-5/6'>
                    Accede a datos precisos y actualizados sobre precipitaciones, caudal y niveles de agua. Obtén información detallada de nuestras estaciones de monitoreo automático, todo al alcance de tu mano.
                </p>
                <a href={ globalConfig.dashboardUrl } target='_blank' className='flex justify-center items-center rounded-md h-10 w-52 bg-main-blue-700 text-white font-semibold'>
                    Consulta & Simula
                </a>
            </div>
        </div>
    );
};
