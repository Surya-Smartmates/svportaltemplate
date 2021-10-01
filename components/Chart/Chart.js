import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useTrackedStore from "../../store/useTrackedStore";

const Chart = () => {
  const state = useTrackedStore();
  const data = [
    {
      name: "Enrolled Students\n(So Far for this Calendar Year)",
      commission:
        state?.agentsResp?.[0]?.No_of_Enrolled_Students_This_Year || 0,
      color: "#121f29",
    },
    {
      name: "Applications in Progress (Pending Applications)",
      commission: state?.agentsResp?.[0]?.Applications_in_Progress || 0,
      color: "#2b3744",
    },
    {
      name: "Prospective Students(Based on Number of Leads Registered)",
      commission: state?.agentsResp?.[0]?.No_of_Prospective_Students || 0,
      color: "#c7d42e",
    },
  ];

  const barColors = ["#121f29", "#2b3744", "#c7d42e"];
  return (
    <>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          barCategoryGap={10}
          margin={{
            top: 5,
            right: 30,
            left: 75,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            type="number"
            tick={{ color: "#000" }}
            axisLine={false}
            ticks={[5, 10, 15, 20, 25, 30]}
            domain={[0, 30]}
          />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />

          <Bar dataKey="commission" fill="#00a0fc" barSize={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
