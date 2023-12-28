export const AddFriendForm = function () {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />
      <label>🌄 Image URL</label>
      <input type="url" value="https://i.pravatar.cc/48" />
      <button className="button">Add</button>
    </form>
  );
};
