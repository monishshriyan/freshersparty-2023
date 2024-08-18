import backgroundImage from "../assets/hi-background.jpg";

const HiCard = () => {
  return (
    <div
      className="w-96 h-52 rounded-[1.8rem] relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Adjusted to 'contain'
        backgroundRepeat: "no-repeat", // Prevents repeating of the image
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-900 text-6xl font-extrabold tracking-tighter">
        Hi!
      </div>
    </div>
  );
};

export default HiCard;
