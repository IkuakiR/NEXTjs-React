import style from '@/styles/add.module.scss'
import Add from '@/components/add'
import { useState } from 'react'

export default function Home() {

  const [state, setState] = useState(0)
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  const Ans = () => {
    const num1 = Number(value1) || 0
    const num2 = Number(value2) || 0
    setState(num1 + num2)
  }

  return (
    <>
      <div>
        <p>足し算アプリ</p>
        <p>{state}</p>
        <Add value1='' value2='' />
        <button onClick={Ans}>計算</button>
      </div>
    </>
  )
}