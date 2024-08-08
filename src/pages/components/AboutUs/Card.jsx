import { cardsConfig } from '../../../config';
import { CardList } from './'


export const Card = () => {
    return (
        <div className='w-full h-screen px-4 md:px-10 pt-10 gap-5 mt-24 flex items-center justify-center overflow-x-auto md:overflow-hidden'>
            <CardList people={ cardsConfig.people } />
        </div>
    );
};
