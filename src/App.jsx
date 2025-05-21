import { Routes,Route } from 'react-router-dom';
import Modal from 'react-modal';
import './App.css';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import { useEffect,useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import Questions from './pages/Questions';
import axios from 'axios';
import Score from './pages/Score';
import Category from './pages/Category';
import categoryContext from './context/categoryContext';
import AboutUs from './pages/AboutUs';

function App() {
  Modal.setAppElement('#root');

  const[categories,setCategories] = useState([]);

  useEffect(()=>{
    async function getData(){
          try{  
            const response = await axios(`https://opentdb.com/api_category.php`);
            const category_data =  response.data.trivia_categories;
            setCategories(category_data);
          }catch(err){
            console.error(err.message);
          }
    }
    getData();
  },[]);


  return (
    <>
      <NavBar/>
      <div className='content'> 
      <categoryContext.Provider value={categories}>
        <Routes>
          <Route path="/" element={<HomePage  />}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/questions/:cat" element={<Questions/>} />
          <Route path="/score/:score" element={<Score/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>    
      </categoryContext.Provider>
      </div>
    </>
  )
}

export default App
