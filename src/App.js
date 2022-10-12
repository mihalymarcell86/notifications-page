import { useState } from "react";
import Notification from "./components/Notification";
// import Attribution from "./components/Attribution";

import scss from "./styles/App.module.scss";
import notifications from "./data/notificationsData";

function App() {
  const [data, setData] = useState(notifications);
  const unreadCount = data.reduce(
    (prev, curr) => (curr.read ? prev + 0 : prev + 1),
    0
  );

  function changeReadStatus(i) {
    setData((prevData) =>
      prevData.map((n, idx) => {
        if (idx === i) n.read = true;
        return n;
      })
    );
  }

  function markAllRead() {
    setData((prevData) =>
      prevData.map((n) => {
        return { ...n, read: true };
      })
    );
  }

  return (
    <main className={scss.main}>
      <header className={scss.header}>
        <h1 className={scss.title}>Notifications</h1>
        <div className={scss.number}>{unreadCount}</div>
        <div className={scss.mark_as_read} onClick={markAllRead}>
          Mark all as read
        </div>
      </header>
      {data.map((n, i) => (
        <Notification
          key={i}
          username={n.userName}
          avatar={n.avatar}
          time={n.time}
          action={n.action}
          target={n.target}
          read={n.read}
          onClick={() => changeReadStatus(i)}
        />
      ))}
      {/* <Attribution /> */}
    </main>
  );
}

export default App;
