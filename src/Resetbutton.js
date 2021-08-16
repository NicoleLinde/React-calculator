import './Button.css'


export default function Resetbutton({ children, clickToReset }) {
    return (
        <button onClick={clickToReset} className='btn-reset'>{children}</button>
    )
}

