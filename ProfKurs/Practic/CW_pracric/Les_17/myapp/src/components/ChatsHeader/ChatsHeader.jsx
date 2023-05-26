import Menu from "../Menu/Menu";
import SearchChats from "../SearchChats/SearchChats";
import './ChatsHeader.css';

function ChatsHeader() {
  return (
    <div className="ChatsHeader">
      <Menu />
      <div className="ChatsHeader__temp" />
      <SearchChats />
    </div>
  );
}

export default ChatsHeader;
