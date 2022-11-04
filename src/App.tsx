import Card from './components/card/card';
import VueControll from './components/vueControll/vueControll';
import { useState } from 'react';
import Create from './page/create';
import './App.css';

const data = [{
  image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
  title: 'Hello first blog',
  label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment',
  like: true,
  dislike: false
},{
  image: 'https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-and-stars-shine_107791-7397.jpg?w=2000',
  title: 'Hello first blog',
  label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment',
  like: false,
  dislike: true
}]



function App() {
  const [vue, setVue] = useState<0 | 1>(0)

  return (
   <div className='App'>
    <VueControll vue={vue} setVue={setVue} />
    {data.map((item, i) =>{
      return <Card vue={vue} image={item.image} like={item.like} dislike={item.dislike} title={item.title} label={item.label} />
    })}
    {/* <Create /> */}
   </div>
  );
}

export default App;
