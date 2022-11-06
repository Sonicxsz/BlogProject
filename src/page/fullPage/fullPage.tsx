import './fullPage.scss'

const data = [{
    id: 1,
    image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg',
    title: 'Hello first blog',
    label: 'My name is arbi. I was born in 1997 in grozny. Grozny was wery dangerous place on that moment.Grozny was wery dangerous place on that moment.Grozny was wery dangerous place on that moment.Grozny was wery dangerous place on that moments',
    like: true,
    dislike: false
  }]


function FullPage() {
  return (
    <div className='full'>
        <h1 className='full-h1'>{data[0].title}</h1>
        <div className='full-img'>
            <img src={data[0].image} alt="image" />
        </div>
        <div className='full-title'>
            {data[0].label}
        </div>
    </div>
  )
}

export default FullPage