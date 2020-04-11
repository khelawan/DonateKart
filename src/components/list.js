import React from "react";

import Nav from 'react-bootstrap/Nav'
function CharacterDropDown(props) {
  const [items] = React.useState([
    { label: "Currency INR", value: "INR" },
    { label: "Currency USD", value: "USD" }
  ]);
  return (

    <div>
    <Nav className="justify-content-end" activeKey="/home">
    
    <Nav.Item>
      <Nav.Link  >
      <select onChange={e=>{props.setCurrencey(e.target.value)}}>
      {items.map(item => (
        <option 
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
      </Nav.Link>
    </Nav.Item>
  </Nav>
    </div>
   
  );
}
export default CharacterDropDown;