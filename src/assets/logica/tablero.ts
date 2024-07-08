import { FILAS, WINNER_COMBINATIONS } from "../constantes";

export const agregarFicha = (index: number, nuevoTablero: string[] | null[], turno: string, actualizarTurno: () => void) => {
    const filas = Object.values(FILAS);

    for (const fila of filas[index]) {
        if (nuevoTablero[fila] === null) {
            nuevoTablero[fila] = turno;
            return actualizarTurno();
        }
    }
    return turno;
}

export const verificarWinner = (tableroVerificar: string[] | null[]) => {
    for (const combination of WINNER_COMBINATIONS) {
        const [a, b, c, d] = combination;

        if (tableroVerificar[a] && tableroVerificar[a] === tableroVerificar[b] && tableroVerificar[a] === tableroVerificar[c] && tableroVerificar[a] === tableroVerificar[d]) {
            return tableroVerificar[a];
        }
    }

    if (verificarEmpate(tableroVerificar)) {
        return 'empate';
    }

    return null;
}

const verificarEmpate = (tableroVerificar: string[] | null[]) => {
    return tableroVerificar.every((ficha) => ficha !== null);
}