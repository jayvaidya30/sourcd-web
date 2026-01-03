import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-linear-to-b from-blue-400 to-white-500 h-screen">
        <Navbar />
        <Hero />
        {/* <Card
          img="/send-white.svg"
          alt="image"
          imageSideText="verfied resource"
          belowText="We verify every resouce we share on the platform"
        /> */}
      </div>
    </div>
  );
};

export default Home;
