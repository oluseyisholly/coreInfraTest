import { Header } from "./header";
import { SideBar } from "./sideBar";

export const Layout = ({ children }) => {
  return (
    <div className="w-[100%] h-[100vh] bg-deep_blue md:grid grid-cols-[23rem_1fr]">
      <div className="hidden md:block pt-[2.7rem] overflow-auto">
        <SideBar />
        <p className="text-white"></p>
      </div>
      <div className="bg-body">
        <Header />
        <div className="border-grey1 border overflow-auto px-[2rem] py-[0.8rem] h-[calc(100vh-4.6rem)]">
          {children}
        </div>
      </div>
     
    </div>
  );
};
