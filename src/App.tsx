import Main from './page/main/main';
import VueControll from './components/vueControll/vueControll';
import Menu from './components/menu/menu';
import { useState } from 'react';
import Create from './page/create/create';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import FullPage from './page/fullPage/fullPage';





function App() {
  const [vue, setVue] = useState<0 | 1>(0)

  return (
    
   <div className='App'>
    <Menu><VueControll vue={vue} setVue={setVue} /></Menu>
    <Routes>
    <Route path={`/full:id`} element={<FullPage/>}/>
    <Route path='/'  element={<Main vue={vue} />}/>
    <Route path='/create' element={<Create />} />
    </Routes>
   </div>
   
  );
}

export default App;
