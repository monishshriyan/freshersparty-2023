const InfoCard = () => {
  return (
    <div className="w-[80%] max-w-96 rounded-[1.8rem] border-zinc-800 border-[0.05rem] bg-[#151515] flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center p-10">
        <h1 className="text-gray-100 font-black text-4xl tracking-tight">
          EXCITED FOR YOUR FRESHERS PARTY?
        </h1>
        <p className="text-gray-400 text-lg">
          Get ready to groove and celebrate as we gear up for an unforgettable
          Freshers' Party! Join us at the most happening event of the year,
          where fun, music, and memories await. Let's make this party a day to
          remember!🥰
        </p>
        <p className="animated-gradient-text text-left w-full text-lg">
          #FreshersPartyExcitement
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
