import { AvatarSvg } from "../../assets/avatar";
import { BellSvg } from "../../assets/bell";
import { HomeSvg } from "../../assets/home";
import { SearchInput } from "../../custom/searchInput";

export const Header = () => {
  return (
    <div className="h-[4.6rem] bg-white flex justify-between px-[2rem] border-grey1 border">
      <div className="flex items-center h-[100%] gap-[1.2rem] ">
        <HomeSvg />
        <p className="typography1">Dashboard</p>
      </div>
      <div className="flex items-center gap-[2.87rem]">
        <SearchInput/>
        <BellSvg/>
        <div className="flex items-center rounded-full w-[3.2rem] h-[3.2rem] bg-body border-grey1 border justify-center">
          <AvatarSvg  />
        </div>
      </div>
    </div>
  );
};
