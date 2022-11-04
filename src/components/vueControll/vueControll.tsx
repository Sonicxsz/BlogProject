import './vueControll.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faSquare} from '@fortawesome/free-solid-svg-icons' 
import cn from 'classnames'

interface IVue{
    setVue: (number: 0 | 1) => void;
    vue: 0 | 1
}

function VueControll({setVue,vue}:IVue) {


  return (
   <div className='flex'>
    Vue Model
     <div className='vue-controll'>
        <div onClick={() => setVue(0)} className={cn("vue-button", {'vue-button-active': vue === 0 })}><FontAwesomeIcon icon={faBars}/></div>
        <div onClick={() => setVue(1)} className={cn("vue-button", {'vue-button-active': vue === 1 })}><FontAwesomeIcon icon={faSquare}/></div>
    </div>
   </div>
  )
}

export default VueControll