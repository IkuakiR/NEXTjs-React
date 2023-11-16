import style from '@/styles/add.module.scss'
import { useState,useEffect } from 'react'
type Props = {
    value1: string;
    value2: string;
}

export default function Add(props:Props) {

    const [value1, setValue1] = useState(props.value1)
    const [value2, setValue2] = useState(props.value2)

    useEffect(() => {
        setValue1(props.value1)
        setValue2(props.value2)
    },[props])

    return (
        <>
            <input
                type="text"
                value={value1}
                onChange={(event) => setValue1(event.target.value)}
            />
            <p>+</p>
            <input
                type="text"
                value={value2}
                onChange={(event) => setValue2(event.target.value)}
            />
            <p>=</p>
        </>
    )
}