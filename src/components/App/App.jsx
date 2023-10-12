import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import renderMovies from '../renderMovies';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);

  function handleSaveMovie(movie) {
    setSavedMovies([...savedMovies, movie]);
  }


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/signup'
            element={ <Register /> } 
          />
          <Route 
            path='/signin'
            element={ <Login /> }
          />
          <Route 
            path='/'
            element={ <Main 
              loggedIn={loggedIn}
            /> }
          />
          <Route 
            path='/movies'
            element={ <Movies 
              renderElement={renderMovies}
              loggedIn={loggedIn}
              onSaveClick={handleSaveMovie}
              onCheckboxClick={setIsCheckboxActive}
              isCheckboxActive={isCheckboxActive}
            /> }
          />
          <Route 
            path='/saved-movies'
            element={ <SavedMovies 
              renderElement={savedMovies}
              loggedIn={loggedIn}
              onCheckboxClick={setIsCheckboxActive}
              isCheckboxActive={isCheckboxActive}
            /> }
          />
          <Route 
            path='/profile'
            element={ <Profile 
              loggedIn={loggedIn}
            /> }
          />
          <Route 
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
