import React from "react";
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import RecipeP  from "./pages/recipe";
import Food_1 from "./pages/food1";
import Back from "./background";
import data from "./Recipe/TemplateData.json";



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
 

  // useEffect(() => {
  //   const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';
  //   const element = document.querySelector('#root');
  //   if (isDarkModeEnabled) {
  //     element.classList.add('dark-mode');
  //   }

  //         }, []);

  // const toggleDarkMode = () => {
  //   const element = document.querySelector('#root');
  //   const isDarkMode = element.classList.contains('dark-mode');
  //   if (isDarkMode) {
  // element.classList.remove('dark-mode');
  //     localStorage.removeItem('darkMode');
  //   } else {
  //     element.classList.add('dark-mode');
  //     localStorage.setItem('darkMode', 'true');
  //   }
  // };

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // // Function to toggle dark mode
  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // const [searchTerm, setSearchTerm] = useState("");
  // }



  
  return (
    <div className="App">

{/* <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <RecipeP isDarkMode={isDarkMode} />
      <Food_1 isDarkMode={isDarkMode} />

</div> */}
{/* <div className="isDarkMode ? 'dark' : 'light'}">  */}
{/* <Back/> */}
{/* </div> */}



    {/* <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div   >
        <div id="allm">
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img  src={val.image} alt=""  className="jsonimage"/>
                      <h3>{val.title}</h3>
                      <p className="price">${val.price}</p>
                  </div> 
                )
              })
          }
        </div>
        </div>
      </div>
    </> */}
  









      <Router>
        <Routes>
          <Route path="/H" element={<RecipeP/>} />
          <Route path="/food1" element={<Food_1 />} />
          <Route path="/" exact element={<Home/>}/>
          <Route path="/recipe" element={<RecipeP/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
