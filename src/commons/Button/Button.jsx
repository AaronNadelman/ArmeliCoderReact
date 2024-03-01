import './buttonStyled.css'

function Button({ children, handleClick, ...props }) {

    return (
        <button className='button' onClick={handleClick} {...props}>
            {children}
        </button>
    )
}

export default Button