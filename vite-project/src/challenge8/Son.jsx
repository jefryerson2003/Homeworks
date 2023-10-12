import React from 'react'

export const Son = React.memo(({ numero, incremento }) => {
  console.log('Recargando');

  return (
    <button className="buton" onClick={() => incremento(numero)}>
      {numero}
    </button>
  );
});