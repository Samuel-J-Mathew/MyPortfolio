import Work from "../Components/Work";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Contact from "../Components/Contact";
import Stairs from "../Components/Stairs";

const HomePage = () => {
    return (
        <Stairs>
            <div className="relative z-50">
                <Hero />
                <Info />
                <Work workTitle={true} />
                <Contact />
            </div>
        </Stairs>
    );
};

export default HomePage;
