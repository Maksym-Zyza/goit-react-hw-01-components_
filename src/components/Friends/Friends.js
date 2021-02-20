import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";
import style from "./Friends.module.css";

const Friends = ({ avatar, name, isOnline }) => (
  <div>
  <span className={isOnline ? style.online : style.offline}>{isOnline}</span>
  <img className={style.avatar} src={avatar} alt={name} width="48" />
  <p className={style.name}>{name}</p>
  </div>
);

Friends.defaultProps = {
  uavatar: defaultImage,
};

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friends;