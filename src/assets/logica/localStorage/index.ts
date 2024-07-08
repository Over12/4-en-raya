interface guardarPartidaProps {
    tablero: string[] | null[];
    newTurno: string;
    newWinner: string | null; 
}

export const guardarPartida = ({ tablero, newTurno, newWinner }: guardarPartidaProps) => {
    localStorage.setItem('tablero', JSON.stringify(tablero));
    localStorage.setItem('turno', newTurno);
    localStorage.setItem('winner', JSON.stringify(newWinner));
}

export const borrarPartida = () => {
    localStorage.removeItem('tablero');
    localStorage.removeItem('turno');
    localStorage.removeItem('winner');
}