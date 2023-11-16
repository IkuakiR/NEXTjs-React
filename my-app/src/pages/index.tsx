import style from '@/styles/add.module.scss'
import Add from '@/components/add'
import { useState } from 'react'

export default function Home() {

  const [state, setState] = useState(0)
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')


  return (
    <>
      <div>
        <p>足し算アプリ</p>
        <p>{state}</p>
        <Add value1={value1} value2={value2} />
        <button onClick={() => {
          const Ans = () => {
            console.log(value1);
            const num1 = Number(value1)
            const num2 = Number(value2)
            setState(num1 + num2)
          }
        }}>計算</button>
      </div>
    </>
  )
}