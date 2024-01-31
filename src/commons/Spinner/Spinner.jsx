import PulseLoader from 'react-spinners/PulseLoader'
import './spinnerStyled.css'

const override = {
    display: 'block',
    margin: 'auto',
    borderColor: '#FFF'
}

function Spinner({ isLoading }) {
    return (
        <div className='containerSpinner'>
            <PulseLoader
                size='18'
                color="#253A47"
                loading={isLoading}
                cssOverride={override}
                speedMultiplier="1"
                margin="2"

            />
        </div>
    )


}

export default Spinner