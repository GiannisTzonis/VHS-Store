function SortMoviesSelect({ handleSort }) {
  return (
    <select onInput={handleSort}>
      <option>Order By</option>
      <option>Highest Average Vote</option>
      <option>Lowest Average Vote</option>
    </select>
  );
}

export default SortMoviesSelect;
