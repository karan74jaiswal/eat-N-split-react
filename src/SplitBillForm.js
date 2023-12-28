import { useState } from "react";

export const SplitBillForm = function ({
  selectedFriendData,
  handleSplitBill,
}) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("me");
  let friendExpense = bill ? bill - myExpense : "";

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!bill || !myExpense || !friendExpense) return;
    handleSplitBill(whoIsPaying === "me" ? friendExpense : -myExpense);
  };
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriendData.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => +e.target.value > 0 && setBill(+e.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => {
          // if (!e.target.value > 0 || !e.target.value <= bill) return;
          setMyExpense(+e.target.value > bill ? +myExpense : +e.target.value);
        }}
      />
      <label>👫 {selectedFriendData.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => {
          setWhoIsPaying(e.target.value);
        }}
      >
        <option value="me">You</option>
        <option value="friend">{selectedFriendData.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
};
