export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <li className="listItem">
      <div className="date">
        <div>{month}</div>
        <div>{year}</div>
        <div className="day">{day}</div>
      </div>
      <div className="description">
        {props.title}
        <div className="price">${props.amount}</div>
      </div>
    </li>
  );
}
