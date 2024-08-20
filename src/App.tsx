import Header from "./components/Header";
import HiCard from "./components/HiCard";
import InfoCard from "./components/InfoCard";
/* import InstructionsCard from "./components/InstructionsCard"; */
/* import RulesAlert from "./components/RulesAlert"; */
import TwitterLike from "./components/TwitterLike";
import Marquee from "react-fast-marquee";
import { ThemeProvider } from "./components/ui/theme-provider";
import RulesAlert from "./components/RulesAlert";
import { motion } from "framer-motion";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="dark flex flex-col gap-5 items-center justify-center min-h-screen min-w-screen bg-black">
        <motion.div
          initial={{ opacity: 0, filter: "blur(5px)", y: "-2rem" }}
          animate={{ opacity: 1, filter: "blur(0px)", y: "0rem" }}
          transition={{ duration: 0.5, ease: "circInOut", delay: 1.25 }}
        >
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
        </motion.div>
        <Header text="FRESHERS PARTY 2023" />
        <HiCard />

        <InfoCard />
        <Header text="2nd Sept Room 29" className="alt-header text-9xl" />

        {/*         <InstructionsCard
          heading="INSTRUCTIONS"
          para1="              Setting clear rules for games at a freshers party ensures that
              everyone has a fair and enjoyable experience. "
          para2="              Here are some
              general rules and instructions that you can communicate to the
              participants before each game:"
        /> */}

        <div className="sticky bottom-12 left-0 w-full z-40 flex justify-center items-center opacity-animated">
          <motion.div
            initial={{ opacity: 0, y: "1rem" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "circInOut", delay: 1.5 }}
            className="flex flex-row space-x-2 z-100"
          >
            <RulesAlert />
            <TwitterLike />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "circInOut", delay: 1.5 }}
          className="sticky bottom-0 left-0 w-full h-60 bg-gradient-to-t from-black to-transparent z-10"
        ></motion.div>
      </div>
    </ThemeProvider>
  );
};

export default App;
