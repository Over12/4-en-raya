import { useState } from 'react'

import { Tablero } from './assets/components/Tablero'
import { Square } from './assets/components/Square'
import { TURNOS } from './assets/constantes'
import { agregarFicha, verificarWinner } from './assets/logica/tablero'
import { guardarPartida, borrarPartida } from './assets/logica/localStorage'
import './App.css'



function App() {
  const [tablero, setTablero] = useState(() => {
    const tableroGuardado = localStorage.getItem('tablero');

    return tableroGuardado ? JSON.parse(tableroGuardado) : Array(16).fill(null);
  });

  const [turno, setTurno] = useState(() => {
    const turnoGuardado = localStorage.getItem('turno');

    return turnoGuardado ? turnoGuardado : TURNOS.amarillo;
  });

  const [winner, setWinner] = useState<string | null>(() => {
    const winnerGuardado = localStorage.getItem('winner');

    return winnerGuardado ? JSON.parse(winnerGuardado) : null;
  });

  const actualizarTablero = (index: number) => {
    const nuevoTablero = [...tablero];

    const newTurno = agregarFicha(index, nuevoTablero, turno, actualizarTurno);

    const newWinner = verificarWinner(nuevoTablero);

    if (!winner) {
      setTablero(nuevoTablero);

      if (newWinner) {
        setWinner(newWinner);
        setTurno(newWinner);
      }
    }

    if (newTurno) {
      guardarPartida({ tablero: nuevoTablero, newTurno, newWinner });
    }
  }

  const ReiniciarJuego = () => {
    setTablero(Array(16).fill(null));
    setTurno(TURNOS.amarillo);
    setWinner(null);
    borrarPartida();
  }

  const actualizarTurno = () => {
    const newTurno = turno === TURNOS.amarillo ? TURNOS.rojo : TURNOS.amarillo;
    setTurno(newTurno);
    return newTurno;
  }

  return (
    <main className='tablero'>
      <h1>4 en raya</h1>
      <button className='buttonReset' onClick={ReiniciarJuego}>Reiniciar</button>
      <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />
      <section className='turno'>
        <Square turno={ winner === null ? turno : winner } />
      </section>
      {winner && (
        <section className='winnerModal'>
          <div className='winner'>
            <h3>
              {winner === 'empate' ? 'Empate' : 'Ganador'}
            </h3>
            {
              winner !== 'empate' && <Square turno={winner} />
            }
            <button className='buttonReset' onClick={ReiniciarJuego}>Reiniciar</button>
          </div>
        </section>
      )}
    </main>
  )
}

export default App
