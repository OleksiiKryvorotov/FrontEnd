import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";
import { useState } from "react";
import UserInfo from "./components/UserInfo/UserInfo";
import chats from "./mock/chats";
import ChatBackground from "./components/ChatBackground/ChatBackground";
import NewMessage from "./components/NewMessage/NewMessage";
import ChatMessages from "./components/ChatMessages/ChatMessages";

function App() {
  const [currentID, setCurrentId] = useState(+localStorage.getItem("chatId"));
  const [chat, setChat] = useState({});
  const [chatsMessages, setChatMessages] = useState([
    {
      id: 0,
      text: "Hello",
    },
    {
      id: 1,
      text: "Fine",
    },
    {
      id: 2,
      text: "Hello mam",
    },
  ]);

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
        <ChatBackground />
        <UserInfo title={chat.title} avatar={chat.avatar} />
        <ChatMessages messages={chatsMessages} />
        <NewMessage />
      </div>
    </div>
  );
}

export default App;

