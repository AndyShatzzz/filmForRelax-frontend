// export const BASE_URL = 'https://api.andyshatzzz.nomoredomainsrocks.ru';
export const BASE_URL = 'http://127.0.0.1:3000';

const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

const getHeaders = () => {
    return {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    }
}

export const signup = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    })
      .then((res) => checkResponse(res))
};

export const signIn = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
};

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => checkResponse(res))
};

export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: getHeaders(),
    })
      .then((res) => checkResponse(res))
};

export const patchUserInfo = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: getHeaders(),
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
      .then((res) => checkResponse(res))
};

export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: getHeaders(),
    })
      .then((res) => checkResponse(res))
};

export const postSavedMovie = (movie) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(movie)
    })
      .then((res) => checkResponse(res))
};

export const deleteSavedMovie = (movieId) => {
    return fetch(`${BASE_URL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: getHeaders(),
    })
      .then((res) => checkResponse(res))
};