import Header from "./components/Header";
import HiCard from "./components/HiCard";
import InfoCard from "./components/InfoCard";
import InstructionsCard from "./components/InstructionsCard";
import TwitterLike from "./components/TwitterLike";
import Marquee from "react-fast-marquee";

const App = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen min-w-screen bg-black">
      <Marquee
        className="sticky-icky"
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          fontSize: "20px",
          fontFamily: "JetBrains Mono",
        }}
        speed={150}
      >
        THE PARTY IS OVER, THANKS FOR BEING THERE!( ˶ˆᗜˆ˵ )
      </Marquee>
      <Header text="FRESHERS PARTY 2023" />
      <HiCard />
      <InfoCard />
      <Header text="2nd Sept Room 29" className="alt-header text-9xl" />

      <InstructionsCard
        heading="INSTRUCTIONS"
        para1="              Setting clear rules for games at a freshers party ensures that
              everyone has a fair and enjoyable experience. "
        para2="              Here are some
              general rules and instructions that you can communicate to the
              participants before each game:"
      />
      {/* like button */}
      <TwitterLike />
    </div>
  );
};

export default App;
