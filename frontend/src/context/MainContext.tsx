import React, { createContext, SetStateAction } from 'react';
import axios from 'axios'
import { Sale } from '../models/sale'
import { BASE_URL } from '../services/api';

interface MainContextProps{
  minDate: Date;
  setMinDate: React.Dispatch<SetStateAction<Date>>
  maxDate: Date,
  setMaxDate: React.Dispatch<SetStateAction<Date>>,
  loading: boolean;
  setLoading:React.Dispatch<SetStateAction<boolean>>,
  handleLoadData():Promise<any>
  data:Sale[]
}

interface ComponentProps{
  children:React.ReactNode
}

 const MainContext = createContext({} as MainContextProps)


 const ContextProvider = (props:ComponentProps) =>{
  const { children } = props
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = React.useState<Date>( min)
  const [maxDate, setMaxDate] = React.useState<Date>(max)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [data, setData] = React.useState<Sale[]>([])

  const handleLoadData = async () =>{
    try{
        setLoading(true)
        const dayMin = minDate.toISOString().slice(0, 10)
        const dayMax = maxDate.toISOString().slice(0, 10)
        const { data } = await axios.get(`${BASE_URL}/sales?minDate=${dayMin}&maxDate=${dayMax}`)
        setData(data.content)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }

  }

  return(
    <MainContext.Provider value={{
        minDate:minDate,
        setMinDate:setMinDate,
        maxDate,
        setMaxDate:setMaxDate,
        loading:loading,
        setLoading,
        handleLoadData,
        data,
        }}>
        {children}
    </MainContext.Provider>
  )
}


export { MainContext, ContextProvider}
