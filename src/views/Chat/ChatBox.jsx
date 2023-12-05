import React, { useEffect } from "react";

import "./styles.scss";

const ChatBox = ({ records = [] }) => {

    // const element = document.getElementsByClassName(`item-${records.length}`);
    // const scrollToBtm = () => {
    //     if (element) {
    //       element.scrollIntoView({
    //         behavior: "smooth",
    //         block: "end",
    //         inline: "nearest",
    //       });
    //     }
    //   };

    //   useEffect(() => {
    //     if(!records.length && element) return;
    //     setTimeout(() => scrollToBtm(), 2000)
        
    //   }, [records])

  return (
    <div id="c-box" className="chat-box">
      {records.length
        ? records.map((item, index) => (
            <div key={index} className={`chat-item`}>
              <p className={`${item.Q ? "ques" : "ms-auto ans"} text-start item-${index+1}`}>
                {item.Q || item.A}
              </p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default ChatBox;
