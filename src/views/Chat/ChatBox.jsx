import React, { useEffect } from "react";

import "./styles.scss";
import moment from "moment/moment";

const ChatBox = ({ records = [] }) => {
  const element = document.getElementById(`c-box_btm`);

  useEffect(() => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [records]);

  return (
    <div className="chat-box">
      {records.length
        ? records.map((item, index) => (
            <div key={index} className={`chat-item`}>
              <p
                className={`${
                  item.Q ? "ques" : "ms-auto ans"
                } text-start item-${index + 1}`}
              >
                {item.Q || item.A}
              <span className="chat-timestamp">{moment(item.createdAt).format('DD-mm-yyyy hh:mm a')}</span>
              </p>
            </div>
          ))
        : ""}
      <div id="c-box_btm" /> {/* bottom scroll ref element  */}
    </div>
  );
};

export default ChatBox;
