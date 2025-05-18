import { ArrowRightSvg } from "../../assets/arrowRight";

export const QuickAcessElement = ({ svg, text }) => {
  return (
    <div className="w-full flex h-[4.5rem] items-center gap-[1.6rem] px-[1.6rem] bg-grey4 rounded-[0.4rem] ">
      <div className="flex items-center justify-center w-[28px] h-[28px] bg-blue1 rounded-full">
        {svg}
      </div>
      <div className="flex  gap-[1.1rem] items-center ">
        <p className="typography5 !text-[1.4rem]">{text}</p>
        <ArrowRightSvg />
      </div>
    </div>
  );
};
