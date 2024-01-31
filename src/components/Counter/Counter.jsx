import { useCount } from '../../hooks/useCount'
import './counterStyled.css'

export default function Counter() {
    const { add, remove, valor } = useCount(0)


    return (

        <div>
            <p>{valor}</p>

            <button onClick={remove}>-</button>
            <button onClick={add}>+</button>
        </div>

    )
}
