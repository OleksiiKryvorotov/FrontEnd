import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";
import { useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import chats from "./mock/chats";

function App() {
  const [currentID, setCurrentId] = useState();
  console.log(currentID, "render");

  return (
    <div className="App">
      <div className="Chats">
        <ChatsHeader />
        <div className="Chats__list">
          {chats.map((chatItem) => {
            return (
              <ChatElement
                key={chatItem.id}
                isBlue={chatItem.id === currentID}
                avatar={chatItem.avatar}
                title={chatItem.title}
                description={chatItem.description}
                time={chatItem.last_msg_time}
                handleClick={() => {
                  setCurrentId(chatItem.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="ChatWindow">
        <UserInfo />
      </div>
    </div>
  );
}

export default App;