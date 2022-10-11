import scss from "../styles/Notification.module.scss";

//action map
const userActions = {
  REACT_POST: "reacted to your recent post ",
  FOLLOW: "followed you",
  JOINED_GROUP: "has joined your group",
  LEFT_GROUP: "left the group",
  MESSAGE: "sent you a private message",
  COMMENT_PIC: "commented on your picture",
};

function Notification({ user, action, target, read, time }) {
  return (
    <div className={read ? scss.container : scss["container--unread"]}>
      <img
        src={user.avatar}
        type="image/webp"
        alt={`${user.userName}'s avatar`}
        className={scss.avatar}
      />
      <div>
        <a href="/" className={scss.user_name}>
          {user.userName}
        </a>{" "}
        {userActions[action]}{" "}
        {action === "REACT_POST" && (
          <a href="/" className={scss.link_post}>
            {target}
          </a>
        )}
        {(action === "JOINED_GROUP" || action === "LEFT_GROUP") && (
          <a href="/" className={scss.link_group}>
            {target}
          </a>
        )}
        {!read && <div className={scss.dot} />}
        <div className={scss.elapsed_time}>{time} ago</div>
        {action === "MESSAGE" && (
          <blockquote className={scss.message}>{target}</blockquote>
        )}
      </div>

      {action === "COMMENT_PIC" && (
        <a href="/" className={scss.commented_pic}>
          <img src={target} alt="" />
        </a>
      )}
    </div>
  );
}

export default Notification;
