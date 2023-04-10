import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const [news, setNews] = useState([]); // store news that is search
  const [testnews, setTestNews] = useState([]); // test data to be stored in
  const [favNews, setFavNews] = useState([]); // to store favourite list
  const [userName, setUserName] = useState([]);
  const LOCAL_KEY_2nd = "Jombeli"; //Test data if no api can be catch
  const LOCAL_STORAGE_KEY = "Favourite";
  const LOCAL_STORAGE_KEY_AUTH = "isLoggedIn";
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_AUTH))
  );
  const LOCAL_STORAGE_KEY_USER = "userName";
  let navigate = useNavigate();

  //useEffect for test data if cannot connect api
  useEffect(() => {
    const getAllTest = JSON.parse(localStorage.getItem(LOCAL_KEY_2nd));
    setTestNews(getAllTest);
  }, []);

  //one time run to get Favourite List from Local Storage
  useEffect(() => {
    const getAllContacts = async () => {
      const getAllFav = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (getAllFav) {
        setFavNews(getAllFav);
      }
    };
    getAllContacts();
  }, []);

  // for auth if refresh page
  useEffect(() => {
    const checkLog = async () => {
      setIsLoggedIn(localStorage.getItem(LOCAL_STORAGE_KEY_AUTH));
      if (localStorage.getItem(LOCAL_STORAGE_KEY_AUTH)) {
        if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_AUTH)) === true) {
          console.log(isLoggedIn);
          navigate("/home");
        } else {
          console.log(isLoggedIn);
          navigate("/login");
        }
      }
    };
    checkLog();
  }, [isLoggedIn, navigate]);

  // check if auth exist or not
  useEffect(() => {
    if (
      localStorage.getItem(LOCAL_STORAGE_KEY_AUTH) === null ||
      localStorage.getItem(LOCAL_STORAGE_KEY_AUTH) === undefined
    ) {
      localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, false);
      setIsLoggedIn(false);
      navigate("/login");
    }
  }, [navigate]);

  //create user localstorage
  useEffect(() => {
    localStorage.removeItem("userName");
    const startLocalstore = async () => {
      setUserName({ name: "Alif" });
    };
    startLocalstore();

    localStorage.setItem(
      LOCAL_STORAGE_KEY_USER,
      JSON.stringify({ name: "Alif" })
    );
  }, []);

  //Retrieve News API
  const retriveNews = async (getSearch) => {
    var url =
      "https://newsapi.org/v2/everything?" +
      `q=${getSearch}&` +
      "searchIn=title&" +
      "pageSize=28&" +
      "page=1&" +
      "apiKey=14491607f8474e05acad3e1aec5278d2";
    try {
      setNews([]); //empty it if searh for new news
      const response = await axios.get(url);
      if (response.data.articles) setNews(response.data.articles);
      return "data is send";
    } catch (error) {
      console.log("API error");
      console.error(error);
    }
  };

  const removeFave = async (id) => {
    const newFaveList = favNews.filter((favenews) => {
      return favenews.id !== id;
    });
    console.log(newFaveList);
    setFavNews(newFaveList);
  };

  const value = {
    LOCAL_STORAGE_KEY,
    LOCAL_STORAGE_KEY_AUTH,
    LOCAL_STORAGE_KEY_USER,
    userName,
    news,
    favNews,
    LOCAL_KEY_2nd, // if api cannot catch
    testnews, // test
    isLoggedIn,
    setIsLoggedIn,
    setTestNews, //test
    setFavNews,
    retriveNews,
    removeFave,
  };

  return (
    <newsCrudContext.Provider value={value}>
      {children}
    </newsCrudContext.Provider>
  );
}

export function useNewsCrud() {
  return useContext(newsCrudContext);
}
