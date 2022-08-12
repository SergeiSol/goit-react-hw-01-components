import PropTypes from 'prop-types';
export default function Profile(props) {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="User avatar" className="avatar" />
        <p className="name">{props.username}</p>
        <p className="name">{props.tag}</p>
        <p className="name">{props.location}</p>
      </div>

      <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity"> {props.stats.followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity"> {props.stats.views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity"> {props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
