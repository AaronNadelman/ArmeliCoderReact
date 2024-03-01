import { useState } from 'react'
import './finalizarCompraFormStyled.css'

const FinalizarCompraForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return (
        <div>
            <form className='formContainer' onSubmit={handleConfirm}>
                <label className='label'>
                    Nombre
                    <input
                        className='input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='label'>
                    Telefono
                    <input
                        className='input'
                        type="text"
                        value={phone}
                        onChange={(target) => setPhone(target.value)}
                    />
                </label>
                <label className="label">
                    Email
                    <input
                        type="text"
                        className="input"
                        value={email}
                        onChange={(target) => setEmail(target.value)}
                    />
                </label>
                <div className="label">
                    <button type='submit' className='botonForm'>Realizar orden</button>
                </div>
            </form>
        </div>
    )
}

export default FinalizarCompraForm;