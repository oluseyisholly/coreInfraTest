import { SearchSvg } from "../assets/search";

export const SearchInput = ({ className, ...props }) => {
  return (
    <div className="relative">
      <SearchSvg className={"absolute bottom-[0.9rem] left-[1.2rem]"} />
      <input
        className={`h-[3.2rem] w-full text-grey2 rounded-[9.7rem]  border-grey1 border px-[3.6rem] typography2 ${className}`}
        placeholder="Search"
        {...props}
      />
    </div>
  );
};
