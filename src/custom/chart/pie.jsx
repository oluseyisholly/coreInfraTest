"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "active", cards: 1845, fill: "var(--color-active)" },
  { browser: "expired", cards: 200, fill: "var(--color-expired)" },
  { browser: "inactive", cards: 173, fill: "var(--color-inactive)" },
  { browser: "blocked", cards: 190, fill: "var(--color-blocked)" },
  { browser: "lost", cards: 190, fill: "var(--color-lost)" },
];

const chartConfig = {
  total: {
    label: "Total Cards",
  },
  active: {
    label: "Active",
    color: "#01A4AF",
  },
  expired: {
    label: "Expired",
    color: "#FFBA24",
  },
  inactive: {
    label: "InActive",
    color: "#014DAF",
  },
  blocked: {
    label: "Blocked",
    color: "#8020E7",
  },
  lost: {
    label: "Lost",
    color: "#FF4457",
  },
};

export function CustomPieChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.cards, 0);
  }, []);

  return (
    <ChartContainer config={chartConfig} className="md:max-h-[150rem]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <ChartLegend
          content={
            <ChartLegendContent className={"text-[1.2rem] border-grey3 "} />
          }
        />

        <Pie
          data={chartData}
          dataKey="cards"
          nameKey="browser"
          innerRadius={90}
          outerRadius={100}
          strokeWidth={3}
          cornerRadius={10} // ← This makes the segments rounded
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) - 14}
                      className="fill-muted-foreground text-[#808080] typography12"
                    >
                      Visitors
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 10}
                      className="fill-foreground  typography8"
                    >
                      {totalVisitors.toLocaleString()}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
