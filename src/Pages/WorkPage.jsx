import Work from "../Components/Work";
import Contact from "../Components/Contact";
import Scroll from "../Components/Scroll";
import Stairs from "../Components/Stairs";

const WorkPage = () => {
    return (
        <Stairs>
            <div className="">
                <section className="w-full relative pt-25 md:pt-30 lg:pt-32 h-[80vh] pb-5 flex flex-col justify-center items-center">
                    <Scroll bottom={"bottom-0"} />
                    <div className="text-color-primary flex flex-col justify-center items-center text-center mb-[6vw]">
                        <h2 className="text-[19vw] sm:text-[150px] md:text-[150px] lg:text-[180px] xl:text-[200px] 2xl:text-[250px] leading-[100%] font-font4">
                            Selected Work
                        </h2>
                        <h3 className="text-4xl xl:text-5xl 2xl:text-6xl font-font4 leading-[100%]">
                            Explore my creative expertise
                        </h3>
                        <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-[130%] px-5">
                            Check out some of my projects by area of explertise
                        </p>
                    </div>
                </section>
                <Work workTitle={false} />
                <Contact />
            </div>
        </Stairs>
    );
};

export default WorkPage;
