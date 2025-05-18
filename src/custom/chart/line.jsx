"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { day: "Monday", desktop: 40 },
  { day: "Tuesday", desktop: 20 },
  { day: "Wednesday", desktop: 40 },
  { day: "Thursday", desktop: 66 },
  { day: "Friday", desktop: 55 },
  { day: "Saturday", desktop: 10 },
  { day: "Sunday", desktop: 90 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#4DAF01",
  },
};

export function CustomLineChart() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          tick={{ fontSize: 11 }} // ← customize font size and color
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="desktop"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
