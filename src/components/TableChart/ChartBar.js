import { Bar } from "./style";

export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.totalValue > 0) {
    barFillHeight = Math.round((props.value / props.totalValue) * 100) + "%";
  }

  return (
    <Bar fillheight={barFillHeight}>
      <div className="inner">
        <div className="fill" />
      </div>
      <label>{props.label}</label>
    </Bar>
  );
}
