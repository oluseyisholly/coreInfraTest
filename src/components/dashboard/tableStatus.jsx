export const TableStatus = ({ type }) => {
    const typeData = {
      ready: {
        bg: "#ECFDF3",
        color: "#067647",
        border: "#ABEFC6",
        text: "Ready",
      },
      pending: {
        bg: "#F9FAFB",
        color: "#344054",
        border: "#EAECF0",
        text: "Pending",
      },
      inProgress: {
        bg: "#FFFAEB",
        color: "#B54708",
        border: "#FEDF89",
        text: "In Progress",
      },
      acknowledged: {
        bg: "#EFF8FF",
        color: "#175CD3",
        border: "#B2DDFF",
        text: "Acknowledged",
      },
    };
  
    const { bg, color, border, text } = typeData[type] || {};
  
    return (
      <div
        className="flex w-fit py-[0.1rem] px-[0.8rem] items-center justify-center border-[0.1rem] rounded-[1.6rem]"
        style={{
          backgroundColor: bg,
          color: color,
          borderColor: border,
        }}
      >
        {text}
      </div>
    );
  };
  