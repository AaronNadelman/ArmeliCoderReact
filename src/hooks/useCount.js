import { useState } from 'react';

export const useCount = (initialValue) => {
    const [valor, setValor] = useState(initialValue)

    const add = () => {
        setValor(valor + 1)
    };
    const remove = () => {
        setValor(valor - 1);
    };

    return { add, remove, valor }
}