import React, { useEffect } from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css'
import {BASE_URL} from '../../services/api'
import { Sale } from '../../models/sale'
import { formatBRLCoin,notEmptyStringOrDefault,notNumberOrDefault } from '../../utils/Formatters'
import Loading from '../Loading'
const SalesCard = () =>{
  //Macete para criar uma data de X dias atrás:
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = React.useState<Date>(min);
  const [maxDate, setMaxDate] = React.useState<Date>(max);
  const [loading, setLoading] = React.useState<boolean>(true)
  const [data, setData] = React.useState<Sale[]>([]);


  useEffect(() => {
    const dayMin = minDate.toISOString().slice(0, 10)
    const dayMax = maxDate.toISOString().slice(0, 10)
    setLoading(true)
    axios.get(`${BASE_URL}/sales?minDate=${dayMin}&maxDate=${dayMax}`)
    .then(response => {
    const { content } = response.data
    setData(content)
    }).catch(error =>{
      console.log('Deu Error')
    })
  },[minDate, maxDate])

  return(
   <React.Fragment>
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
                    <td className="show992">{`#${notNumberOrDefault(item.id)}`}</td>
                    <td className="show576">{notEmptyStringOrDefault(new Date(item.date).toLocaleDateString())}</td>
                    <td>{notEmptyStringOrDefault(item.sellerName)}</td>
                    <td className="show992">{notNumberOrDefault(item.visited)}</td>
                    <td className="show992">{notNumberOrDefault(item.deals)}</td>
                    <td>{formatBRLCoin(item.amount)}</td>
                    <td>
                      <div className="dsmeta-red-btn-container">
                        <div className="dsmeta-red-btn">
                          <NotificationButton id={item.id}/>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}


                </tbody>

              </table>
            </div>
        </div>
        </React.Fragment>
  )
}


export default SalesCard;
