export default function ExpensesFilter(props) {
  function selectHandler(e) {
    const year = e.target.value;
    props.onFilterChange(year);
  }

  return (
    <div className="filterStyle">
      <label>Filter by year</label>
      <select onChange={selectHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}
