import Header from "./components/Header";
import HiCard from "./components/HiCard";
import InfoCard from "./components/InfoCard";
import InstructionsCard from "./components/InstructionsCard";
/* import RulesAlert from "./components/RulesAlert"; */
import TwitterLike from "./components/TwitterLike";
import Marquee from "react-fast-marquee";
import { ThemeProvider } from "./components/ui/theme-provider";
import RulesAlert from "./components/RulesAlert";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="dark flex flex-col gap-5 items-center justify-center min-h-screen min-w-screen bg-black">
        <Marquee
          className="sticky-icky z-9 h-10"
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            fontSize: "20px",
            fontFamily: "JetBrains Mono",
          }}
          speed={150}
          autoFill={true}
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
        <div className="fixed bottom-14 left-0 w-full min-h-100 bg-gradient-to-t from-zinc-950 to-transparent z-40 flex justify-center items-center">
          <div className="flex flex-row space-x-56 z-100">
            <RulesAlert />
            <TwitterLike />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-60 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
      </div>
    </ThemeProvider>
  );
};

export default App;
