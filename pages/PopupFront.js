import React, { useState } from 'react';
import Popup from './Popup';
 import Purchase from "./Purchase"
function PopupFront() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    
    {isOpen && <Popup
      content={<>
        <Purchase/>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    <div>

    </div>
  </div>
}
 
export default PopupFront;