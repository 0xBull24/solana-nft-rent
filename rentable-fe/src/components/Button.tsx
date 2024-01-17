
interface ButtonProps {
    name: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clickAction(): any,
}


export default function Button({name, clickAction}: Readonly<ButtonProps>) {
    return (
        <button onClick={clickAction}>{name}</button>
    )
}