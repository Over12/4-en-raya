interface BotónIngresarProps{
    index: number
    actualizarTablero: (index: number) => void;
}

export function BotónIngresar({ index, actualizarTablero }: BotónIngresarProps) {
    const handleClick = () => {
        actualizarTablero(index);
    }

    return (
        <button className="button" onClick={handleClick}>Ingresar ficha<br/>&#x25BC;</button>
    )
}