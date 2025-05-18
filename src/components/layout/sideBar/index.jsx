import { AccountSvg } from "../../../assets/sideBar/account";
import { AuthListSvg } from "../../../assets/sideBar/authList";
import { AuthQueueSvg } from "../../../assets/sideBar/authQueue";
import { BlockCardSvg } from "../../../assets/sideBar/blockCard";
import { BranchesSvg } from "../../../assets/sideBar/branches";
import { CardSvg } from "../../../assets/sideBar/card";
import { CardProfSvg } from "../../../assets/sideBar/cardProf";
import { CardReqSvg } from "../../../assets/sideBar/cardReq";
import { CardSchSvg } from "../../../assets/sideBar/cardsch";
import { HomeSvg } from "../../../assets/sideBar/home";
import { LogOutSvg } from "../../../assets/sideBar/logout";
import { RolesSvg } from "../../../assets/sideBar/roles";
import { StockSvg } from "../../../assets/sideBar/stock";
import { TrailSvg } from "../../../assets/sideBar/trail";
import { UsersSvg } from "../../../assets/sideBar/users";
import { Card } from "../../../custom/card";
import { NavItems } from "./navItems";

export const SideBar = () => {
  return (
    <div className="pr-[1.3rem] pl-[1.1rem] ">
      <img src="/logo.svg" />

      <div className="pt-[3.1rem]">
        <NavItems isActive={true} svg={<HomeSvg />} text={"Dashboard"} />
      </div>
      <div className="pt-[1.6rem]">
        <h4 className="text-grey7 typography1 !text-[0.85rem]">MAIN MENU</h4>
        {mainMenuData.map((item) => (
          <NavItems svg={item.svg} text={item.text} />
        ))}
      </div>

      <div className="pt-[7.3rem] pb-[4.4rem]">
        <NavItems svg={<LogOutSvg />} text={"Logout"} />
      </div>
      <div className="px-[1.2rem]">
        <h4 className="text-grey7 typography1 !text-[0.85rem]">POWERED BY</h4>
        <img src={'/cardInfra.svg'}/>
      </div>
    </div>
  );
};

const mainMenuData = [
  {
    svg: <BranchesSvg />,
    text: "Branches",
  },
  {
    svg: <RolesSvg />,
    text: "Roles",
  },
  {
    svg: <UsersSvg />,
    text: "Users",
  },
  {
    svg: <CardSchSvg />,
    text: "Card Scheme",
  },
  {
    svg: <CardProfSvg />,
    text: "Card Profile",
  },
  {
    svg: <CardReqSvg />,
    text: "Card Request",
  },
  {
    svg: <StockSvg />,
    text: "Stock",
  },
  {
    svg: <CardSvg />,
    text: "Cards",
  },
  {
    svg: <BlockCardSvg />,
    text: "Block/Unblock Card",
  },
  {
    svg: <AuthListSvg />,
    text: "Authorization List",
  },
  {
    svg: <AuthQueueSvg />,
    text: "Authorization Queue",
  },
  {
    svg: <TrailSvg />,
    text: "Trail",
  },
  {
    svg: <AccountSvg />,
    text: "Account",
  },
];
