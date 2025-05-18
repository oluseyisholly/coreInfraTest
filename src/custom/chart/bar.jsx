"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "May", personalized: 209, instant: 130 },
  { month: "June", personalized: 214, instant: 140 },
  { month: "July", personalized: 237, instant: 120 },
  { month: "August", personalized: 73, instant: 190 },
  { month: "September", personalized: 73, instant: 190 },
  { month: "October", personalized: 73, instant: 190 },
  { month: "November", personalized: 73, instant: 190 },
];

const chartConfig = {
  personalized: {
    label: "Personalized",
    color: "#014DAF",
  },
  instant: {
    label: "Instant",
    color: "#CCE2FF",
  },
};

export function CustomBarChart() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        barCategoryGap="25%" // <-- Wider spacing between bar groups
        accessibilityLayer
        data={chartData}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ fontSize: 11 }} // ← customize font size and color
        />
        <YAxis
          label={{
            offset: 10,
            style: { textAnchor: "middle", fontSize: 12, fill: "#555" },
          }}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <ChartLegend
          content={
            <ChartLegendContent
              className={
                "text-[1.2rem] border-grey3 mt-[1.6rem] pt-[1rem] border-t-[0.07rem]"
              }
            />
          }
        />
        <Bar
          className="bg-[#014DAF]"
          dataKey="personalized"
          stackId="a"
          fill="var(--color-personalized)"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="instant"
          stackId="a"
          fill="var(--color-instant)"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
