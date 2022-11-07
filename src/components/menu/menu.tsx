import './menu.scss'
import {useState, useRef, useEffect, useReducer, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGears} from '@fortawesome/free-solid-svg-icons' 
import { Link } from "react-router-dom";
import useOutSideClick from '../../hooks/useOutSideClick';
interface IMenu{
    children:React.ReactNode
}



function Menu({children}:IMenu) {
    const [show, setShow] = useState(false)
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    
    const onClose = useCallback(() =>{
        setShow(false)
    },[])

    useOutSideClick(tooltipRef, onClose, true)
  return (
    <div className='menu'>
        <div className='firstWrapper'>
        <Link to={'/'} className='menu-li'>
            Главная
        </Link>
            
            <Link to={'/create'} className={'menu-li'}>
                Добавить блог
            </Link>
        </div>
        <div className='firstWrapper'>
        <div ref={tooltipRef} onClick={() => setShow(!show)} className='menu-li menu-settings'>
            <FontAwesomeIcon icon={faGears}/>
            {show && <div className='settings'>{children}</div>}
        </div>
        <Link to={'/out'} className='menu-li'>
            Выйти
        </Link>
       
        </div>
            
    </div>
  )
}

export default Menu