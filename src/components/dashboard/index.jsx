import { ActiveCardSvg } from "../../assets/analytics/actCards";
import { PendingReQSvg } from "../../assets/analytics/pendingReq";
import { PersonCardSvg } from "../../assets/analytics/personCard";
import { TodayRevSvg } from "../../assets/analytics/todayRev";
import { CalenderSvg } from "../../assets/calender";
import { ICardSvg } from "../../assets/Icard";
import { MCardSvg } from "../../assets/mCard";
import { PCardSvg } from "../../assets/pCard";
import { RCardSvg } from "../../assets/rCard";
import { Card } from "../../custom/card";
import { CustomBarChart } from "../../custom/chart/bar";
import { CustomLineChart } from "../../custom/chart/line";
import { CustomPieChart } from "../../custom/chart/pie";
import { Table } from "../../custom/table";
import { AnalyticsElement } from "./analyticsElement";
import { QuickAcessElement } from "./quickAccessElement";
import { TableStatus } from "./tableStatus";

export const Dashboard = () => {
  return (
    <>
      <div>
        <div className="flex justify-between mb-[1.3rem]">
          <div className="flex flex-col gap-[0.6rem]">
            <h2 className="typography3 text-black">
              Hi Nazeer, what would you like to do today?
            </h2>
            <p className="typography4">
              {" "}
              <span style={{ fontWeight: "600" }}>Last login:</span> 26/11/2024
              14:39:58
            </p>
          </div>
          <div className=" text-black1 flex gap-[0.4rem] h-[3rem] px-[1.3rem] rounded-[0.4rem] items-center border-[0.01rem] border-grey1 ">
            <div className="flex gap-[0.4rem] h-fit items-center typography12 text-[1.1rem] border-r-[0.06rem] border-grey1 pr-[0.8rem] ">
              <CalenderSvg />
              Today
            </div>
            <p>11 Nov 2024</p>
          </div>
        </div>
        <Card className={"p-[1.6rem]"}>
          <h3 className="typography5 pb-[1.3rem]">Your Quick Access</h3>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-[0.8rem] ">
            {quickAcessData.map((item, index) => (
              <QuickAcessElement key={index} svg={item.svg} text={item.text} />
            ))}
          </div>
        </Card>
        <div className="flex items-center gap-[0.6rem] py-[1rem]">
          <h2 className="typography6">Analytics</h2>
          <div className="border-t-[0.0038px] border-grey1 w-full h-[0px]"></div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-[0.8rem] pb-[0.8rem]">
          {analyticsData.map((item, index) => (
            <AnalyticsElement
              key={index}
              svg={item.svg}
              text={item.text}
              value={item.value}
              increase={item.increase}
              type={item.type}
            />
          ))}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-[0.8rem] ">
          <div className="flex flex-col gap-[0.8rem] ">
            <Card
              className={"pt-[1.5rem] px-[1.6rem] "}
              title={"Monthly Issuance"}
            >
              <CustomBarChart />
            </Card>
            <Card
              className={"pt-[1.5rem] px-[1.6rem]  pb-[3.1rem]"}
              title={"This Week's Income"}
            >
              <CustomLineChart />
            </Card>
          </div>
          <div className="flex flex-col gap-[0.8rem] ">
            <Card
              className={"pt-[1.5rem] px-[1.6rem] pb-[3.3rem] "}
              title={"Recent Card Request"}
            >
              <Table
                tableClassName={"mt-[2.8rem]"}
                headers={[
                  "Branch",
                  "Card Type",
                  "Quantity",
                  "Status",
                  "Action",
                ]}
              >
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div>{item.branch}</div>
                    </td>
                    <td>
                      <div>{item.cardType}</div>
                    </td>
                    <td>
                      <div>{item.quantity}</div>
                    </td>
                    <td>
                      <div>{<TableStatus type={item.status} />}</div>
                    </td>
                    <td>
                      <div className="typography11 text-blue1 cursor-pointer">
                        {" "}
                        {item.action}
                      </div>
                    </td>
                  </tr>
                ))}
              </Table>
            </Card>
            <Card
              className={"pt-[1.5rem] px-[1.6rem]  pb-[3.1rem]"}
              title={"Card Status Distribution"}
            >
              <CustomPieChart />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

const quickAcessData = [
  {
    text: "Manage a Card",
    svg: <MCardSvg />,
  },
  {
    text: "Issue Instant Card",
    svg: <ICardSvg />,
  },
  {
    text: "Issue Personalized Card",
    svg: <PCardSvg />,
  },
  {
    text: "Review Card Requests",
    svg: <RCardSvg />,
  },
];

const analyticsData = [
  {
    svg: <ActiveCardSvg />,
    value: "26,478",
    increase: "9",
    text: "Total Active Cards",
    type: "month",
  },
  {
    svg: <PersonCardSvg />,
    value: "15,703",
    increase: "8.5",
    text: "Total Personalized Cards",
    type: "month",
  },
  {
    svg: <TodayRevSvg />,
    value: "₦9.3M",
    increase: "6",
    text: "Today's Revenue",
    type: "day",
  },
  {
    svg: <PendingReQSvg />,
    value: "38",
    increase: "",
    text: "Pending Request",
    type: "month",
  },
];

const data = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "ready",
    action: "view",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "inProgress",
    action: "view",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "acknowledged",
    action: "view",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: "10",
    status: "pending",
    action: "view",
  },
];
