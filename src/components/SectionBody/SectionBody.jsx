import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";


const SectionBody = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
        </div>
    );
};

export default SectionBody;