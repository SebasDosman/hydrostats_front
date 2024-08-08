export const FourthSection = () => {
    return (
        <section className='bg-white flex flex-col items-center justify-start py-20 px-10 text-gray'>
            <div className='flex flex-col md:flex-row items-center w-full max-w-5xl gap-20 md:gap-24'>
                <div className='flex flex-col items-start w-full md:w-1/2 gap-6'>
                    <h2 className='text-4xl font-bold text-center'>
                        ¿De dónde provienen nuestros datos?
                    </h2>
                    <p className='text-justify'>
                        HydroStats se nutre de un conjunto de datos abiertos proporcionados por el gobierno colombiano, asegurando que la información sea precisa y actualizada. Además, contamos con un chatbot interactivo que está siempre disponible para responder preguntas acerca de las condiciones climáticas en la región pacífica colombiana.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center w-full md:w-1/2 md:gap-4'>
                    <img src='/qrcode-2@2x.png' alt='QR Code' className='h-40 w-40 md:h-52 md:w-52'/>
                    <img src='/image-2@2x.png' alt='Imagen' className='h-32 md:h-52 w-full object-cover'/>
                </div>
            </div>
        </section>
    );
};
