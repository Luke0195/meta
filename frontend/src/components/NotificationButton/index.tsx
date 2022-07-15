import React from 'react'
import { toast } from 'react-toastify'
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
     toast.success('Sms Enviado com sucesso!')
    })
    .catch(error =>{
      toast.error('Não foi possível enviar a notifação tente mais tarde!')
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
