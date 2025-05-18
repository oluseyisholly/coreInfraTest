export const Card = ({ className, children, title }) => {
  return (
    <div
      className={`bg-white w-[full] rounded-[1rem] border-grey3 border ${className}`}
    >
      {title && <h3 className="typography10 text-black1 px-[1.6rem] mb-[2.2rem]">{title}</h3>}
      {children}
    </div>
  );
};
