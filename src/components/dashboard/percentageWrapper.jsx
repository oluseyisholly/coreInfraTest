import { ArrowUpSvg } from "../../assets/arrowUp";

export const PercentageWrapper = ({ value }) => {
  return (
    <div className="flex items-center w-fit rounded-[0.4rem] bg-green1 gap-[0.3rem] px-[0.6rem] h-[2rem] ">
      <ArrowUpSvg />
      <span className="text-green2">+{value}%</span>
    </div>
  );
};
