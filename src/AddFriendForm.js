import { useState } from "react";
export const AddFriendForm = function ({ addFriend, handleAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!friendName || !friendImage) return;
    addFriend({
      id: Date.now(),
      name: friendName,
      image: friendImage + `?u=${Date.now()}`,
      balance: 0,
    });
    handleAddFriend();
    setFriendImage("https://i.pravatar.cc/48");
    setFriendName("");
  };
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label>🌄 Image URL</label>
      <input
        type="url"
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
};
