import React, { useState, useCallback, useMemo } from 'react'
import { Son } from './Son.jsx'

export const Father =() => {
  const list = useMemo(() => [2, 4, 6, 8, 10], [])
  const [valor, setValor] = useState(0)

  const incremento = useCallback((numero) => {
    setValor((valor) => valor + numero)
  }, [setValor])

  return (
    <div>
      <h1>Incrementar Valor</h1>
      <p>Total: {valor}</p>
      <hr />

      {list.map((num, index) => (
        <Son key={index} numero={num} incremento={incremento} />
      ))}
    </div>
  )
}