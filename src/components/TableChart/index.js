import ChartBar from "./ChartBar";
import { ChartStyle } from "./style";

export default function TableChart(props) {
  const valuesArray = props.chartData.map((x) => x.value);
  const max = Math.max(...valuesArray);

  return (
    <ChartStyle>
      {props.chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={max}
          label={data.label}
        />
      ))}
    </ChartStyle>
  );
}
