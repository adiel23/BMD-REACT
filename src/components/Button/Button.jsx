import './Button.css';

function Button({text, onClick, type = 'button', disabled = false}) {
    return (
        <button className="button" onClick={onClick} type={type} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;