type InstructionsCardProps = {
  heading?: string;
  para1?: string;
  para2?: string;
};

const InstructionsCard: React.FC<InstructionsCardProps> = ({
  heading,
  para1,
  para2,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col gap-5 items-center justify-center p-10 w-96 rounded-[1.8rem] bg-[#151515] border-zinc-800 border-[0.05rem] ">
        {heading && (
          <h1 className="text-gray-100 font-bold text-4xl">{heading}</h1>
        )}
        {para1 && (
          <p className="text-gray-400 text-lg leading-tight">{para1}</p>
        )}
        {para2 && (
          <p className="text-gray-400 text-lg leading-tight">{para2}</p>
        )}
      </div>
    </div>
  );
};

export default InstructionsCard;
