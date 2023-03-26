function SortMoviesSelect({ handleSort }) {
  return (
    <select onInput={handleSort}>
      <option>Order By</option>
      <option>asc</option>
      <option>desc</option>
    </select>
  );
}

export default SortMoviesSelect;
