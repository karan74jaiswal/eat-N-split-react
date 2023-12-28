export const SplitBillForm = function () {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with clark</h2>
      <label>💰 Bill value</label>
      <input type="number" />
      <label>🧍‍♀️ Your expense</label>
      <input type="number" />
      <label>👫 Clark's expense</label>
      <input type="number" disabled />
      <label>🤑 Who is paying the bill</label>
      <select>
        <option>You</option>
        <option>Clark</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
};
