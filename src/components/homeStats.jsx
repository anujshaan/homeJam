import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 60 },
];
const COLORS = ["#808080", "#e75480"];

const HomeStats = () => {
  return (
    <div className="piechartContainer">
      <PieChart width={208} height={208} className="piechart">
        <Pie
          data={data}
          cx={100}
          cy={100}
          startAngle={-270}
          innerRadius={80}
          outerRadius={82}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0}/>
          ))}
          
        </Pie>
      </PieChart>
      <div className="piechartLabel">
        <i class="far fa-heart" style={{fontSize:'24px', color:'#0259EB'}}></i>
        <p style={{fontSize:'24px', fontFamily:'Libre Baskerville'}}>0</p>
        <p style={{fontSize:'16px', fontFamily:'Nunito'}}>Label</p>
      </div>
    </div>
  );
};

export default HomeStats;
