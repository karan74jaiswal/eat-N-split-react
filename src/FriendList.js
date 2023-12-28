import { AddFriendForm } from "./AddFriendForm";
import { Friend } from "./Friend";

export const FriendList = function ({ initialFriends }) {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend key={friend.id} friendData={friend} />
        ))}
      </ul>
      <AddFriendForm />
      <button className="button">Add friend</button>
    </div>
  );
};
