import style from '@/styles/add.module.scss'
import Add from '@/components/add'
import { useState } from 'react'

export default function Home() {

  const [state, setState] = useState({
    value1: '',
    value2: '',
    ans: 0
  })



  return (
    <>
      <div>
        <p>足し算アプリ</p>
        <p>{state.ans}</p>
        <input
          type="text"
          value={state.value1}
          onChange={(event) => setState({ ...state, value1: event.target.value })}
        />
        <p>+</p>
        <input type="text"
          value={state.value2}
          onChange={(event) => setState({ ...state, value2: event.target.value })}
        />
        <p>=</p>
        <button onClick={() => {
          let num1 = Number(state.value1)
          let num2 = Number(state.value2)
          setState({
            ...state,
            ans: num1 + num2
          })
        }}>計算</button>
      </div>
    </>
  )
}