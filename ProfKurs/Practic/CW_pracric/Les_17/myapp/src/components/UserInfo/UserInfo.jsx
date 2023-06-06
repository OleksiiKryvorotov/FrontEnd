import "./UserInfo.css";
import chats from "../../mock/chats";

export default function UserInfo() {
  const userInfo = chats[0];
  return (
    <div className="UserInfo">
      <div className="UserInfo__chatInfo">
        <img className="UserInfo__avatar" src={userInfo.avatar} />
        <div className="UserInfo__chatInfoText">
          <h3 className="UserInfo__title">{userInfo.title}</h3>
          <p className="UserInfo__status">Online</p>
        </div>
      </div>
      <div className="UserInfo__icons">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-phone"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
}