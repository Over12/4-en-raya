import { BotónIngresar } from "./BotonIngresar"
import { Square } from "./Square"

interface TableroProps{
    tablero: string[] | null[]
    actualizarTablero: (index: number) => void
}

export function Tablero({ tablero, actualizarTablero }: TableroProps) {
    return (
        <section className="tablero game">
            {Array.from({ length: 4 }).map((_, index) => {
                return (
                    <BotónIngresar key={index} index={index} actualizarTablero={ actualizarTablero } />
                )
            })}
            {
                tablero.map((_, index) => {
                    return (
                        <Square key={ index } turno={tablero[index]}>
                        </Square>
                    )
                })
            }
        </section>
    )
}