import { globalConfig } from '../../../config';


export const Embedded = () => {
    return (
        <div className='relative w-full h-screen flex items-center justify-center'>
            <iframe 
                title='hydrostats' 
                src={ globalConfig.dashboardUrl } 
                className='w-[80%] h-[90%] mt-10 rounded-xl'
            ></iframe>
        </div>
    );
};

