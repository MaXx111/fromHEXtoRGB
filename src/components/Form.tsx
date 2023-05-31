interface FromProps {
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Form({handler} : FromProps) {
    
    return (
        <form>
            <input type="text" onChange={handler}/>
        </form>
    )
}