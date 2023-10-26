import style from '@/styles/home.module.scss'
import {useState} from 'react'

export default function Home() {

  const [state, setState] = useState(0)
  

  return (
    <>
      <div className={style.wrap}>

      </div>
      <div>
        <p>{state}</p>
        <button onClick={() => setState(state + 1)}>追加</button>
        <button onClick={() => setState(state - 1)}>削除</button>
      </div>


    </>
  )
}