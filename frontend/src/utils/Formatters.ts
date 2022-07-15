// Arquivo contendo funções puras para formatação ou transformação de dados.

export function notEmptyStringOrDefault(value:String, defaultValue = ''):String{
    return typeof value === 'string' ? value.trim() : defaultValue
}

export function notNumberOrDefault(value: number):number{
  return typeof  value === 'number' ? value : 0
}

export function formatBRLCoin(value: number):string{
  return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(value)
}
