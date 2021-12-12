import styled from "styled-components";
import { useEffect, useState } from "react";
const Room = (props) => {
  const [chats, setchats] = useState([]);
  const [message, setmessage] = useState("");
  useEffect(() => {
    props.socket.on("recieve_message", (data) => {
      setchats([...chats, data.message]);
    });
  }, []);

  const Onclickhandler = (e) => {
    e.preventDefault();
    const messagedata = {
      message: message,
      room: props.Room,
      name: props.Name,
    };
    props.socket.emit("send_message", messagedata);
    setchats([...chats, message]);
    setmessage("");
  };
  return (
    <div>
      <Card>
        <Main>
          <Sidebar>Sidebar</Sidebar>
          <Chats>
            {chats.map((chat) => {
              return <span>{chat}</span>;
            })}
          </Chats>
        </Main>
        <ChatArea>
          <textarea
            placeholder="write message to send "
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />
          <button type="button" onClick={(e) => Onclickhandler(e)}>
            send
          </button>
        </ChatArea>
      </Card>
    </div>
  );
};
const Card = styled.div`
  width: 60%;
  height: auto;
  background-color: rgba(162, 101, 247, 0.7);
  margin: auto;
  margin-top: 100px;
`;
const Main = styled.main`
  display: flex;
  flex-direction: row;
`;
const Sidebar = styled.aside`
  width: 200px;
  height: 400px;
  background-color: rgba(162, 101, 247, 0.7);
`;
const ChatArea = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  textarea {
    width: 700px;
    border: none;
    outline: none;
    background-color: lightgrey;
  }
  button {
    width: 200px;
    border: none;
    outline: none;
    background-color: skyblue;
  }
`;
const Chats = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
  span {
    height: 30px;
    width: 90%;
    background-color: white;
    padding-top: 5px;
    padding-left: 5px;
    border-radius: 2px;
  }
`;
export default Room;
