import {useState} from 'react'



function Description() {
    const [value, setValue] = useState('')
  return (
    <div className='inputWrapper'>
    <label htmlFor='description'>{'descr'}</label>
    <input value={value} onChange={(e) => setValue(e.target.value)} type="text"  id="" />
</div>
  )
}

export default Description