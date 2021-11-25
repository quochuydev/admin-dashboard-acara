import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

const sampleData = [79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10];

function GlucoseRate() {
  return (
    <Sparklines data={sampleData} height={50}>
      <SparklinesLine
        color="rgba(254, 99, 78, 1)"
        fill="rgba(254, 99, 78, .5)"
      />
      <SparklinesSpots />
    </Sparklines>
  );
}

export default GlucoseRate;
