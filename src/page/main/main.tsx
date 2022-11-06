import { Link } from 'react-router-dom'
import Card from '../../components/card/card'

const data = [{
    id: 1,
    image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
    title: 'Hello first blog',
    label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment',
    like: true,
    dislike: false
  },{
    id: 2,
    image: 'https://staticg.sportskeeda.com/editor/2021/11/e84cb-16363923804192-1920.jpg',
    title: 'I am Madara',
    label: 'im gonna destroy world or save it',
    like: true,
    dislike: false
  },{
    id: 3,
    image: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000',
    title: 'Hello first blog',
    label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment',
    like: false,
    dislike: true
  },{
    id: 4,
    image: 'https://sun9-88.userapi.com/impg/3jZ8aoW01Gyum4ZAxHQK-pQzg6dm7TvvxVlR9g/ehnEtLVNqoM.jpg?size=1200x1600&quality=95&sign=557d7a72d84bcbf79cc53e89c1fe5b9c&type=album',
    title: '🖤UFO🖤',
    label: 'Меня зовут age of empires, я очень сильно люблю mnoy',
    like: true,
    dislike: true
  }]



interface IMain{
    vue: 0 | 1
}

function Main({vue}:IMain ) {
  return (
    <>
    {data.map((item, i) =>{
      return <Card vue={vue} id={item.id} image={item.image} like={item.like} dislike={item.dislike} title={item.title} label={item.label} />
    })}
    </>
  )
}

export default Main