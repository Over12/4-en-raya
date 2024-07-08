interface SquareProps {
    children?: string | null;
    turno?: string | null;
}

export function Square({ children, turno }: SquareProps) {
    return (
        <div className={`square ${turno ? turno : ''}`}>
            {children}
        </div>
    )
}