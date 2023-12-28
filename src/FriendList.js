import { useState } from "react";
import { AddFriendForm } from "./AddFriendForm";
import { Friend } from "./Friend";

export const FriendList = function ({
  friends,
  addFriend,
  selectedId,
  handleSelectedId,
}) {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const handleAddFriend = function () {
    setShowAddFriendForm((show) => !show);
  };

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friendData={friend}
            selectedId={selectedId}
            handleSelectedId={handleSelectedId}
            setShowAddFriendForm={setShowAddFriendForm}
          />
        ))}
      </ul>
      {showAddFriendForm ? (
        <AddFriendForm
          addFriend={addFriend}
          handleAddFriend={handleAddFriend}
        />
      ) : null}
      <button className="button" onClick={handleAddFriend}>
        {showAddFriendForm ? "Close" : "Add friend"}
      </button>
    </div>
  );
};
