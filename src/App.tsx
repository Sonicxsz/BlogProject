import Card from './components/card/card';
import './App.css';

function App() {
  const data = [{
    image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
    title: 'Hello first blog',
    label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment'
  },{
    image: 'https://www.techprevue.com/wp-content/uploads/2020/08/what-is-a-blog.jpg',
    title: 'Hello first blog',
    label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment'
  }]


  return (
   <div className='App'>
    {data.map((item, i) =>{
      return <Card image={item.image} title={item.title} label={item.label} />
    })}
   </div>
  );
}

export default App;
