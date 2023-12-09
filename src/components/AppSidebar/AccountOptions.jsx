import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const AccountOptions = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="account-options">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Account</AccordionHeader>
          <AccordionBody accordionId="1">
            <ul>
              <li><Link to={'/account/profile'}>Profile</Link></li>
              <li>Theme</li>
              <li>Privacy</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccountOptions;
