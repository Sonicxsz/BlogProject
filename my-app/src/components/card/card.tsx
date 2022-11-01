import './card.scss'

interface ICard {
    image: string,
    title: string,
    label: string
}


function Card({image, title, label}:ICard) {
  

  return (
    <div className='card'>
        <div className='card-img-wrapper'>
            <img src={image} alt="blog" />
        </div>

        <div className='card-text-wrapper'>
            <h2>{title}</h2>
            <span>{label}</span>
        </div>
        <button className='card-button'>Open</button>
    </div>
  )
}

export default Card