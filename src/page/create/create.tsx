import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons' 
import './create.scss'



function Create() {
  const [image, setImage] = useState<File>()
  const [preview, setPreview] = useState<string | null>()
  const [value, setValue] = useState('')
  const [height, setHeight] = useState<number>(47)

  useEffect(() =>{
    if(image){
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }

      reader.readAsDataURL(image)
    }else{
      setPreview(null)
    }

  }, [image])

  return (
    <div className='create-wrapper'>
      <div className='create-name'><input type="text" placeholder='enter name' name="name" /></div>
     
      <div className='inputs-wrapper'>
          <div className='description-Wrapper'>
          <label htmlFor='description'>Description</label>
          <textarea value={value} onChange={(e) => { 
            setHeight(e.target.scrollHeight)         
            setValue(e.target.value)}} style={{height: height + 'px'}}  name='description' />
          </div>

          <div>
            <input onChange={(e) =>{
                const file = e.target.files![0]
                setImage(file)
            }} id='file' className="imageInp" type="file" placeholder='addImage' name='file'/>
            <label htmlFor="file"><FontAwesomeIcon icon={faDownload}/> Choose Image</label>
          </div>
          <div className='img_wrapper'>
          {preview && <img src={preview}></img>}
          </div>
      </div>

      
    </div>
      
   
  )
}

export default Create