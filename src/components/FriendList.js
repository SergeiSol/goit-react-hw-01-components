import PropTypes from 'prop-types';
function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friends-item">
          <span className={friend.isOnline ? 'online' : 'offline'}>
            {friend.isOnline ? 'онлайн' : 'офлайн'}
          </span>
          <img src={friend.avatar} alt="User avatar" />
          <p className="friends-name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
