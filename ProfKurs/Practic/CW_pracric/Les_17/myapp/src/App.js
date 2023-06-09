import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";
import { useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import RecordButton from "./components/RecordButton/RecordButton";
import chats from "./mock/chats";

function App() {
  const [currentID, setCurrentId] = useState(+localStorage.getItem("chatId"));
  const [chat, setChat] = useState({});
  console.log("render");

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
                  setChat(chatItem);
                  localStorage.setItem("chatId", chatItem.id);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="ChatWindow">
        <UserInfo title={chat.title} avatar={chat.avatar} />
        <div
          className="RecordButton__wrapper"
          style={{
            height: "600px",
          }}
        >
          <RecordButton />
        </div>
      </div>
    </div>
  );
}

export default App;

