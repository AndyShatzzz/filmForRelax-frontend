import React from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';

import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import * as mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as errorMessage from '../../constants/errorMessage';
import * as message from '../../constants/message';
import * as constants from '../../constants/constants';

function App() {

  const location = useLocation();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);


  const [filterMovieText, setFilterMovieText] = React.useState('');
  const [filterMoviesData, setFilterMoviesData] = React.useState([]);
  const [isCheckboxActive, setIsCheckboxActive] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [amountMovie, setAmountMovie] = React.useState(maxAmountMovies());
  const [moreButton, setMoreButton] = React.useState(false);

  const [authorizationError, setAuthorizationError] = React.useState('');
  const [registrationError, setRegistrationError] = React.useState('');
  const [patchMessage, setPatchMessage] = React.useState('');
  const [patchError, setPatchError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});

  const navigate = useNavigate();

  async function signupSubmit({ name, email, password }) {
    setRegistrationError('');
    try {
      setIsLoading(true);
      const res = await moviesApi
        .signup(name, email, password);
      if (res.status === 'error') {
        throw new Error(res.message);
      } else {
        signInSubmit({
          email: email,
          password: password
        });
      }
    } catch (error) {
      setRegistrationError(errorMessage.ERROR_REGISTER);
      setTimeout(() => {
        setRegistrationError('');
      }, 3000);
    }
    setIsLoading(false);
  }

  async function signInSubmit({ email, password }) {
    setAuthorizationError('');
    try {
      setIsLoading(true);
      const res = await moviesApi
        .signIn(email, password);
      localStorage.setItem('JWT', res.token);
      setLoggedIn(true);
      navigate('/movies');
    } catch (error) {
      setAuthorizationError(errorMessage.ERROR_AUTH);
      setTimeout(() => {
        setAuthorizationError('');
      }, 3000);
    }
    setIsLoading(false);
  }

  function handleSignOut() {
    localStorage.removeItem('JWT');
    localStorage.removeItem('FilterMovieText');
    localStorage.removeItem('Checkbox');
    localStorage.removeItem('FilterMoviesData');
    setMovies([]);
    setFilterMoviesData([]);
    setSavedMovies([]);
    setFilterSavedMovies([]);
    setFilterMovieText('');
    setIsCheckboxActive(false);
    setLoggedIn(false);
  }

  React.useEffect(() => {
    async function checkToken() {
      if (!localStorage.getItem('JWT')) return;
      try {
        const res = await moviesApi
          .checkToken(localStorage.getItem('JWT'));
        if (res) {
          setLoggedIn(true);
        }
      } catch (err) {
        setLoggedIn(false);
        console.log(err);
      }
    }
    checkToken();
  }, [loggedIn]);

  React.useEffect(() => {
    if (!loggedIn) return;
    moviesApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  async function patchUserSubmit({ name, email }) {
    setPatchError('');
    try {
      setIsLoading(true);
      const res = await moviesApi
        .patchUserInfo(name, email);
      setCurrentUser(res);
      setPatchMessage(message.PATCH_USER_MESSAGE)
      setTimeout(() => {
        setPatchMessage('');
      }, 3000);
    } catch {
      setPatchError(errorMessage.ERROR_PATCH_USER);
      setTimeout(() => {
        setPatchError('');
      }, 3000);
    }
    setIsLoading(false);
  }

  async function handleSaveMovieSubmit(movie) {
    try {
      const res = await moviesApi
        .postSavedMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: movie.image,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: movie.thumbnail,
          movieId: movie.id,
        });
      setSavedMovies([...savedMovies, res]);
      setFilterSavedMovies([...savedMovies, res]);
    } catch (err) {
      setPatchError(errorMessage.ERROR_PATCH_USER);
      setTimeout(() => {
        setPatchError('');
      }, 3000);
    }
  }

  function handleDeleteMovie(_id) {
    moviesApi
      .deleteSavedMovie(_id)
      .then(() => setSavedMovies(movie =>
        movie.filter(movie => movie._id !== _id)))
      .then(() => setFilterSavedMovies(movie =>
        movie.filter(movie => movie._id !== _id)))
      .catch((error) => console.log(error))
  }

  // Функционал по работе с сторонним Api практикума

  function handleSetFilterMovieText(value) {
    setFilterMovieText(value);
  }

  React.useEffect(() => {
    if (!loggedIn) return;
    moviesApi
      .getSavedMovies()
      .then((res) => {
        setSavedMovies([...res])
        setFilterSavedMovies([...res])
      })
      .catch((err) => console.log(err));

    const savedText = localStorage.getItem('FilterMovieText');
    const savedCheckbox = localStorage.getItem('Checkbox');
    const savedFilterMoviesData = JSON.parse(localStorage.getItem('FilterMoviesData'));

    if (savedText) {
      setFilterMovieText(savedText);
    }

    if (location.pathname === '/movies' && savedCheckbox === 'true') {
      setIsCheckboxActive(true);
    }

    if (savedFilterMoviesData) {
      setFilterMoviesData(savedFilterMoviesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn])

  function filterMovies(data, checkbox) {
    let filterData = [...data];

    if (!filterMovieText && !checkbox) {
      filterData = [];
    }

    if (checkbox) {
      filterData = filterData.filter(movie => movie.duration <= constants.MOVIE_SHORT_FILM_DURATION);
    }

    if (filterMovieText) {
      filterData = filterData.filter((movie) => movie.nameRU.toLowerCase().includes(filterMovieText.toLowerCase())
        || movie.nameEN.toLowerCase().includes(filterMovieText.toLowerCase()))
    }
    return filterData;
  }

  function searchCheckbox(isActive) {
    if (movies.length === 0) {
      setIsLoading(true);
      setError(null);
      mainApi
        .getMovies()
        .then((data) => {
          setMovies([...data])
          const filterData = filterMovies(data, isActive);
          if (filterData.length > 0) {
            setFilterMoviesData(filterData);
            localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(data, isActive)));
          }
          if (filterData.length === 0) {
            setFilterMoviesData([])
            localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(data, isActive)));
            setError(message.NOT_FOUND)
          } else {
            setError(null)
          }
        })
        .then(() => setIsLoading(false))
        .catch(() => setError(errorMessage.ERROR_SERVER))
    }

    if (movies.length !== 0) {
      const filterData = filterMovies(movies, isActive);
      if (filterData.length > 0) {
        setFilterMoviesData(filterData);
        localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(movies, isActive)));
      }
      if (filterData.length === 0) {
        setFilterMoviesData([])
        localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(movies, isActive)));
        setError(message.NOT_FOUND)
      } else {
        setError(null)
      }
      localStorage.setItem('Checkbox', isActive);
    }
  }

  function searchSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);
    setError(null);
    setAmountMovie(maxAmountMovies());
    if (movies.length === 0) {
      mainApi
        .getMovies()
        .then((data) => {
          setMovies([...data])
          const filterData = filterMovies(data, isCheckboxActive);
          if (filterData.length > 0) {
            setFilterMoviesData(filterData);
            localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(data, isCheckboxActive)));
          }
          if (filterData.length === 0) {
            setFilterMoviesData([])
            localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(data, isCheckboxActive)));
            setError(message.NOT_FOUND)
          } else {
            setError(null)
          }
        })
        .then(() => setIsLoading(false))
        .catch(() => setError(errorMessage.ERROR_SERVER))
    }

    if (movies.length !== 0) {
      const filterData = filterMovies(movies, isCheckboxActive);
      if (filterData.length > 0) {
        setFilterMoviesData(filterData);
        localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(movies, isCheckboxActive)));
      }
      if (filterData.length === 0) {
        setFilterMoviesData([])
        localStorage.setItem('FilterMoviesData', JSON.stringify(filterMovies(movies, isCheckboxActive)));
        setError(message.NOT_FOUND)
      } else {
        setError(null)
      }
      setIsLoading(false);
    }
  };

  function maxAmountMovies() {
    const screenWidth = window.innerWidth;
    return screenWidth > constants.TABLET_SCREEN_WIDTH ? constants.LAPTOP_MOVIE_NUMBER :
      screenWidth > constants.MOBILE_SCREEN_WIDTH ? constants.TABLET_MOVIE_NUMBER : constants.MOBILE_MOVIE_NUMBER;
  };

  function addMoreMovies() {
    const screenWidth = window.innerWidth;
    return screenWidth > constants.TABLET_SCREEN_WIDTH ? constants.TABLET_MORE_MOVIES :
      constants.MOBILE_MORE_MOVIES;
  };

  const handleLoadMoreMovies = () => {
    setAmountMovie(amountMovie + addMoreMovies());
  };

  const updateLoadMoreButton = (cardsCount) => {
    if (filterMoviesData.length > cardsCount) {
      setMoreButton(true);
    } else {
      setMoreButton(false);
    }
  };

  React.useEffect(() => {
    updateLoadMoreButton(amountMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterMoviesData, updateLoadMoreButton]);

  const handleResizeScreen = () => {
    const newAmountMovies = maxAmountMovies();
    setMoreButton(newAmountMovies);
    updateLoadMoreButton(newAmountMovies);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResizeScreen);
    return () => {
      window.removeEventListener('resize', handleResizeScreen);
      updateLoadMoreButton(maxAmountMovies());
    };
  });

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>

        <Routes>
          <Route
            path='/signup'
            element={loggedIn ? <Navigate to="/" replace /> : <Register
              onSubmit={signupSubmit}
              error={registrationError}
              isLoading={isLoading}
            />}
          />

          <Route
            path='/signin'
            element={loggedIn ? <Navigate to="/" replace /> : <Login
              onSubmit={signInSubmit}
              error={authorizationError}
              isLoading={isLoading}
            />}
          />
          <Route
            path='/'
            element={<Main
              loggedIn={loggedIn}
              setError={setError}
            />}
          />
          <Route
            path='/movies'
            element={<ProtectedRoute
              element={Movies}
              renderElement={filterMoviesData.slice(0, amountMovie)}
              loggedIn={loggedIn}
              handleSetFilterMovieText={handleSetFilterMovieText}
              onSaveClick={handleSaveMovieSubmit}
              isCheckboxActive={isCheckboxActive}
              setIsCheckboxActive={setIsCheckboxActive}
              searchSubmit={searchSubmit}
              isLoading={isLoading}
              error={error}
              moreButton={moreButton}
              handleLoadMoreMovies={handleLoadMoreMovies}
              onDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
              filterSavedMovies={filterSavedMovies}
              setError={setError}
              searchCheckbox={searchCheckbox}
            />}
          />
          <Route
            path='/saved-movies'
            element={<ProtectedRoute
              element={SavedMovies}
              renderElement={filterSavedMovies}
              loggedIn={loggedIn}
              onDeleteMovie={handleDeleteMovie}
              error={error}
              setError={setError}
              setFilterSavedMovies={setFilterSavedMovies}
              savedMovies={savedMovies}
            />}
          />
          <Route
            path='/profile'
            element={<ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              currentUser={currentUser}
              handleSignOut={handleSignOut}
              patchUserSubmit={patchUserSubmit}
              patchError={patchError}
              moreButton={moreButton}
              handleLoadMoreMovies={handleLoadMoreMovies}
              setError={setError}
              patchMessage={patchMessage}
              isLoading={isLoading}
            />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
