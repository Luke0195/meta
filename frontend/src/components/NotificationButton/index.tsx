import React from 'react'
import axios from 'axios'
import icon from '../../assets/img/Vector.svg'
import { BASE_URL } from '../../services/api'

type Props ={
  id: number
}
function NotificationButton(props:Props){
  const { id } = props;

  function handleNotification(id:number){
    axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response =>{
      console.log('Sucesso')
    })
    .catch(error =>{
      console.log('Não foi possível enviar a notificação')
    })
  }


  return(
    <div className="dsmeta-red-btn-container">
      <div className="dsmeta-red-btn" onClick={() => handleNotification(id)}>
        <img src={icon} alt="Notificar" />
      </div>
    </div>

  )
}

export default NotificationButton;
