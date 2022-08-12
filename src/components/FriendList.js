function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friends-item">
          <span className="status">{friend.isOnline}</span>
          <img src={friend.avatar} alt="User avatar" />
          <p className="friends-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;
