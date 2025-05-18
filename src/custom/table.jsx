export const Table = ({ headers = [], children = [], tableClassName }) => {
  return (
    <table className={` w-full text-left ${tableClassName}`}>
      <thead className="py-[1.4rem]">
        <tr>
          {headers.map((item, index) => {
            const isFirstItem = index === 0;
            const isLastItem = index + 1 === headers.length;
            return (
              <th
                className={`bg-grey4 border-y-[0.1rem] border-grey3 text-center ${
                  isFirstItem
                    ? "border-l-[0.1rem]"
                    : isLastItem
                    ? "border-r-[0.1rem]"
                    : ""
                } `}
              >
                <div
                  className={`typography1  py-[0.8rem] !font-medium capitalize ${
                    isFirstItem ? "pl-[0.6rem]" : ""
                  }`}
                >
                  {item}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="typography-3 !text-[1.5ren]">
        {children?.length < 1 ? (
          <tr>
            <td colSpan="100">
              <div className=" flex flex-col justify-center py-[40px]">
                <span className="text-[#ddddd9]">No Data</span>
              </div>
            </td>
          </tr>
        ) : (
          children
        )}
      </tbody>
    </table>
  );
};
