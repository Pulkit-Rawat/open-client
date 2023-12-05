import React, { useEffect } from "react";

import "./styles.scss";

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
              </p>
            </div>
          ))
        : ""}
      <div id="c-box_btm" /> {/* for bottom scrolling to bottom  */}
    </div>
  );
};

export default ChatBox;
