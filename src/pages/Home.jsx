import { BannerLayout } from '../layouts/BannerLayout';
import { FirstSection, FourthSection, SecondSection, ThirdSection } from './components/Home';


export const Home = () => {
    return (
        <>
            <BannerLayout>
                <FirstSection />
            </BannerLayout>

            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </>
    );
};
