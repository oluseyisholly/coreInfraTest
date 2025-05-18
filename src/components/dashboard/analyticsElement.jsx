import { AttentionSvg } from "../../assets/attention";
import { Card } from "../../custom/card";
import { PercentageWrapper } from "./percentageWrapper";

export const AnalyticsElement = ({
  svg,
  text,
  value,
  increase,
  type = "month",
}) => {
  const typeData = {
    month: "this Month",
    day: "vs yesterday",
  };
  return (
    <Card className={"p-[1.2rem] pb-[1.7rem]"}>
      {svg}
      <p className="typography7 pt-[0.4rem] text-grey8">{text}</p>
      <div className="flex justify-between pt-[1.1rem]">
        <p className="typography8">{value}</p>
        {increase ? (
          <div className="flex items-center gap-[0.8rem]">
            <PercentageWrapper value={increase} />
            <span className="text-grey8 typography9">{typeData[type]}</span>
          </div>
        ) : (
          <div className="flex items-center gap-[0.4rem] ">
            <AttentionSvg/>
            <p className="text-orange1">Requires attention</p>
          </div>
        )}
      </div>
    </Card>
  );
};
