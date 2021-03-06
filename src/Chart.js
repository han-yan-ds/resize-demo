import React from "react";
import { VictoryChart, VictoryBar, VictoryContainer } from "victory";

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const Chart = ({width, height}) => (
  <VictoryChart 
    containerComponent={
      <VictoryContainer preserveAspectRatio="none" responsive={false} />
    }
    width={width} 
    height={height}
  >
    <VictoryBar
      data={data}
      x="quarter"
      y="earnings"
    />
  </VictoryChart>
)

export default Chart;
