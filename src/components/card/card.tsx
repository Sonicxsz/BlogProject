import './card.scss'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp, faHeartCrack, faCompress} from '@fortawesome/free-solid-svg-icons' 
interface ICard {
    image: string,
    title: string,
    label: string,
    like: boolean,
    dislike: boolean,
    vue: 0 | 1,
    id:number
}


function Card({image, title, label, like, dislike, vue, id}:ICard) {
  const clazz = vue === 0 ? 'cardMini' : 'card'

  return (
    <div className={clazz}>
        <div className='card-img-wrapper'>
            <img src={image} alt="blog" />
            <div className='card-full-image'><FontAwesomeIcon icon={faCompress}/></div>
        </div>

        <div className='card-text-wrapper'>
            <h2>{title}</h2>
            <span>{label}</span>
        </div>
        <div className='card-status'>
          <div className={cn('raiting', {'raiting-active': like})}><FontAwesomeIcon icon={faThumbsUp} /></div>
          <div className={cn('raiting', {'raiting-active': dislike})}><FontAwesomeIcon icon={faHeartCrack} /></div>

        </div>
        <Link className='card-button' to={`/full${id}`}>
          Open
        </Link>
        
    </div>
  )
}

export default Card