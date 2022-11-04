import {useState} from 'react'
import './input.scss'
interface InputProps{
    name: string
}

function Input({name}:InputProps) {
   const [value, setValue] = useState('')
  return (
    <div className='inputWrapper'>
        <label htmlFor={name}>{name}</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" name={name} id="" />
    </div>
  )
}

export default Input