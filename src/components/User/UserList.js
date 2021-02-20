import React from "react";
import PropTypes from "prop-types";
import User from "./User";
import './User.css';

const UserList = ({ user }) => (
  <ul className="User">
    {user.map(({ name, tag, avatar, location, stats }) => (
      <li key={tag}>
        <User
          avatar={avatar}
          name={name}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </li>
    ))}
  </ul>
);

UserList.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserList;