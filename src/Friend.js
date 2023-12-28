export const Friend = function ({ friendData }) {
  return (
    <li>
      <img src={friendData.image} alt={friendData.name} />
      <h3>{friendData.name}</h3>
      <p
        className={
          friendData.balance < 0 ? "red" : friendData.balance > 0 ? "green" : ""
        }
      >
        {friendData.balance > 0
          ? `${friendData.name} owes you ${friendData.balance}€`
          : friendData.balance < 0
          ? `You owe ${friendData.name} ${Math.abs(friendData.balance)}€`
          : `You and ${friendData.name} are even`}
      </p>
      <button className="button">Select</button>
    </li>
  );
};
