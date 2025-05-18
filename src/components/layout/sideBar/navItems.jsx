export const NavItems = ({ svg, text, isActive = false }) => {
  return (
    <div
      className={`flex gap-[1.2rem] px-[1.2rem] py-[1rem] typography1 rounded-[0.8rem] cursor-pointer ${
        isActive && 'border'
      } border-grey6 ${isActive ? "bg-grey5" : ""}`}
    >
      {svg}
      <p className={`${isActive ? "text-blue1" : "text-grey1"}`}>{text}</p>
    </div>
  );
};
