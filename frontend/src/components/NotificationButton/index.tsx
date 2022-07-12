import React from 'react'
import icon from '../../assets/img/Vector.svg'

function NotificationButton(){
  return(
    <div className="dsmeta-red-btn-container">
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </div>

  )
}

export default NotificationButton;
