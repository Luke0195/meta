import React from 'react';

interface Props{
  isLoading: boolean;
}
function Loading(props:Props){
  const { isLoading } = props

  if(!isLoading) return <></>
  return(
    <div className="loading-container">
      <div className="loading-wrapper"></div>
      <p> Carregando...</p>
    </div>
  )
}

export default Loading;
