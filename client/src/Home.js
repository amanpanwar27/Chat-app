import React from "react";
import styled from "styled-components";
import io from "socket.io-client";
import Rooms from "./Room";
import { useState } from "react";
const socket = io.connect("http://localhost:9000");
console.log(socket);
export default function Home() {
  const [Room, setRoom] = useState("");
  const [Name, setName] = useState("");
  const [showRoom, setshowRoom] = useState(false);
  const Onclickhandler = (e) => {
    e.preventDefault();
    socket.emit("join_room", Room);
    setshowRoom(true);
  };
  return (
    <div>
      {showRoom ? (
        <Rooms socket={socket} Name={Name} Room={Room} />
      ) : (
        <Card>
          <Head>ChatDord</Head>
          <form>
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <select
              placeholder="Room"
              onChange={(e) => setRoom(e.target.value)}
            >
              <option style={{ display: "none" }}>Select room</option>
              <option>Room number 176</option>
            </select>
            <button type="button" onClick={(e) => Onclickhandler(e)}>
              Enter Chat
            </button>
          </form>
        </Card>
      )}
    </div>
  );
}
const Card = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(162, 101, 247, 0.7);
  margin: auto;
  margin-top: 30px;
  form {
    margin: 10px 30%;
    input {
      width: 200px;
      height: 30px;
      outline: none;
      border: none;
      padding-left: 5px;
    }
    select {
      width: 208px;
      height: 30px;
      outline: none;
      border: none;
      margin-top: 10px;
    }
    button {
      margin: 10px 50px;
      width: 100px;
      height: 30px;
      border: none;
      outline: none;
    }
  }
`;
const Head = styled.header`
  background-color: purple;
  width: 100%;
  height: 40px;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  color: white;
`;
