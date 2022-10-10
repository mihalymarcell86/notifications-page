import Notification from "./components/Notification";
// import Attribution from "./components/Attribution";
import scss from "./styles/App.module.scss";

import users from "./data/userData";
import chessImage from "./assets/images/image-chess.webp";

function App() {
  return (
    <main className={scss.main}>
      <header className={scss.header}>
        <h1 className={scss.title}>Notifications</h1>
        <div className={scss.number}>3</div>
        <div className={scss.mark_as_read}>Mark all as read</div>
      </header>
      <Notification
        user={users[0]}
        time="1m"
        action="REACT_POST"
        target="My first tournament today!"
        read={false}
      />
      <Notification user={users[1]} time="5m" action="FOLLOW" read={false} />
      <Notification
        user={users[2]}
        time="1 day"
        action="JOINED_GROUP"
        target="Chess Club"
        read={false}
      />
      <Notification
        user={users[3]}
        time="5 days"
        read={true}
        action="MESSAGE"
        target="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
      />
      <Notification
        user={users[4]}
        time="1 week"
        action="COMMENT_PIC"
        target={chessImage}
        read={true}
      />
      <Notification
        user={users[5]}
        time="2 weeks"
        action="REACT_POST"
        target="5 end-game strategies to increase your win rate"
        read={true}
      />
      <Notification
        user={users[6]}
        time="2 weeks"
        action="LEFT_GROUP"
        target="Chess Club"
        read={true}
      />
      {/* <Attribution /> */}
    </main>
  );
}

export default App;
