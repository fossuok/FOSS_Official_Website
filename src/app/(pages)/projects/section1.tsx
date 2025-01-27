import { BarChart, RadarChart } from "@mantine/charts";
import { data } from "./data";

export function Section1() {
  return (
    <>
      <BarChart
        pb={100}
        h={400}
        data={data}
        dataKey="month"
        tooltipAnimationDuration={200}
        series={[
          { name: "Smartphones", color: "violet.6" },
          { name: "Laptops", color: "blue.6" },
          { name: "Tablets", color: "teal.6" },
        ]}
        tickLine="none"
      />
      <RadarChart
        h={400}
        data={data}
        dataKey="month"
        series={[
          { name: "Smartphones", color: "violet.6" },
          { name: "Laptops", color: "blue.6" },
          { name: "Tablets", color: "teal.6" },
        ]}
      />
    </>
  );
}
