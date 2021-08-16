import './Button.css'

export default function Button({ children, onButtonClick }) {
    let operation = ['+', '-', '*', '/', '='];
    return (<>
        {operation.map((button) => <button onClick={onButtonClick} className='btn'>{children}</button>)}
    </>)

}