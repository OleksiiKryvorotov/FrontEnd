import "./App.css";
import ChatsHeader from "./components/ChatsHeader/ChatsHeader";
import ChatElement from "./components/ChatElement/ChatElement";
import { useState } from "react";

const chats = [
  {
    id: 1,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 2,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 3,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 4,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 5,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 6,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 7,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 8,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 9,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 10,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 11,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 12,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 13,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 14,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 15,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 16,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 17,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 18,
    avatar:
      "https://amiel.club/uploads/posts/2022-03/1647766434_9-amiel-club-p-kartinki-chat-10.png",
    title: "Chat number 1",
    description: "aelr aketkhjanetkhalkntehklslkrlhms;lrm ;mrljmdl;tymj",
    last_msg_time: "23:59",
  },
  {
    id: 19,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
  {
    id: 20,
    avatar:
      "https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg",
    title: "Presidents chat",
    description: "010101010101101010101001001010 0101 010 0101010010",
    last_msg_time: "01:11",
  },
];

function App() {
  const [currentID, setCurrentId] = useState();
  console.log(currentID, 'render');

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
      <div className="ChatWindow"></div>
    </div>
  );
}

export default App;