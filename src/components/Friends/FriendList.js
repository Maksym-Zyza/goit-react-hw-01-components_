import React from "react";
import PropTypes from "prop-types";
import Friends from "./Friends";
import style from "./Friends.module.css";

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={style.item}>
        <Friends
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;