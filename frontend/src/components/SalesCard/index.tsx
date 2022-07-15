import React, { useEffect } from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css'
import {BASE_URL} from '../../services/api'
import { Sale } from '../../models/sale'
const SalesCard = () =>{
  //Macete para criar uma data de X dias atrás:
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = React.useState(min);
  const [maxDate, setMaxDate] = React.useState(max);
  const [data, setData] = React.useState<Sale[]>([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/sales`)
    .then(response => {
    const { content } = response.data
    setData(content)
    }).catch(error =>{
      console.log('Deu Error')
    })
  },[])

  return(
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                  selected={minDate}
                  onChange={(date: Date) =>{
                    setMinDate(date)
                  } }
                  className="dsmeta-form-control"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                  selected={maxDate}
                  onChange={(date: Date) =>{
                    setMaxDate(date)
                  } }
                  className="dsmeta-form-control"
                  dateFormat="dd/MM/yyyy"/>
              </div>
            </div>

            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item, index) =>(
                <tr key={item.id}>
                <td className="show992">{`#${item.id}`}</td>
                <td className="show576">{item.date}</td>
                <td>{item.sellerName}</td>
                <td className="show992">{item.visited}</td>
                <td className="show992">{item.deals}</td>
                <td>R$ {item.amount}</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <div className="dsmeta-red-btn">
                      <NotificationButton/>
                    </div>
                  </div>
                </td>
                </tr>
                ))}


                </tbody>

              </table>
            </div>
        </div>

  )
}


export default SalesCard;
