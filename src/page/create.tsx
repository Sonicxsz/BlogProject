import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons' 
import Input from '../components/input/input'
import Description from '../components/description/description'
import './create.scss'

enum Inputs {
  name = 1, 
  image,
  description
}

function Create() {
  const [inputs, setInputs] = useState<Inputs[]>([])
  
 
  return (
    <div className='create-wrapper'>
      <div className='create-name'><input type="text" placeholder='enter name' name="" id="" /></div>
      <div className='controll'>
        <div className='flex' onClick={() =>{
          setInputs([...inputs, 1])
        }}>
          Add Name Field
       <FontAwesomeIcon className='btn'  icon={faPlus} />
        </div>
        <div className='flex' onClick={() =>{
          setInputs([...inputs, 2])}}>
          Add Image
          
          <FontAwesomeIcon className='btn'  icon={faPlus} />
          </div>
       <div className='flex' onClick={() =>{
          setInputs([...inputs, 3])
        }}>
        Add Description
       <FontAwesomeIcon className='btn' icon={faPlus} />
       </div>
      </div>
      <div className='inputs-wrapper'>
      {inputs.map(i =>{
        return (
          i === 1 ? <Input name='name' /> :
          i === 2 && <Description />
        )
      })}
      </div>
    </div>
      
   
  )
}

export default Create