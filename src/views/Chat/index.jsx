import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";

import { api } from "../../utilities/axios";
import { socket } from "../../utilities/socket";
import ChatBox from "./ChatBox";

const Chat = () => {
  const uID = localStorage.getItem("uID");
  const [msg, setMsg] = useState("");
  const [records, setRecords] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();
    setRecords([
      ...records,
      {
        Q: msg,
      },
    ]);
    socket.emit("message", msg);
    setMsg("");
  };

  socket.on("message", (message) => {
    setRecords([...records, message]);
  });

  const getChatHistory = async () => {
    try {
      let payload = {
        uID: uID,
      };
      const { data } = await api.post("/getChats", payload);
      if (data.data.messages) {
        setRecords([...records, ...data.data.messages]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChatHistory();
    socket.on("connect", async () => {
      console.log("Socket connection established");
      socket.emit("joinRoom", uID);
    });
  }, []);

  return (
    <div>
      <div className="mt-2">
        <h4>Chat</h4>
      </div>
      <ChatBox records={records} />
      <div>
        <form onSubmit={sendMessage}>
          <div className="query-box">
            <Input
              type="text"
              name="msg"
              value={msg}
              placeholder="Enter a text..."
              onChange={({ target: { value } }) => setMsg(value)}
            />
            <Button color="success" type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
