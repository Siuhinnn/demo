import ChartBar from "./ChartBar";
import { ChartStyle } from "./style";

export default function TableChart(props) {
  const valuesArray = props.chartData.map((x) => x.value);
  const sum = valuesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0 //initialValue
  );

  return (
    <ChartStyle>
      {props.chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          totalValue={sum}
          label={data.label}
        />
      ))}
    </ChartStyle>
  );
}
