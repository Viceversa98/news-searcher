import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const [news, setNews] = useState([]); // store news that is search
  const [favNews, setFavNews] = useState([]); // to store favourite list
  const [userName, setUserName] = useState(""); //for header name
  const [pageSize, setPageSize] = useState(10); //for header name
  const [pageNo, setpageNo] = useState(1); //for header name
  const [searchValue, setsearchValue] = useState(""); 
  const LOCAL_STORAGE_KEY = "Favourite"; // save favorite list
  const LOCAL_STORAGE_KEY_AUTH = "isLoggedIn"; // boolean login
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_AUTH))
  );
  const LOCAL_STORAGE_KEY_USER = "userName";
  let navigate = useNavigate();

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
      `pageSize=${pageSize}&` + // page size will increase on click
      `page=$${pageNo}&` + //page number
      "apiKey=14491607f8474e05acad3e1aec5278d2"; //my api key
    try {
      setsearchValue(getSearch)
      setPageSize(10); // change back to default pageSize
      setNews([]); //empty it if searh for new news
      const response = await axios.get(url);
      if (response.data.articles) setNews(response.data.articles);
      return "data is send";
    } catch (error) {
      console.log("API error");
      console.error(error);
    }
  };

   //Retrieve News API for LOAD MORE
   const retriveLoadMoreNews = async (loadSize) => {
    var url =
      "https://newsapi.org/v2/everything?" +
      `q=${searchValue}&` +
      "searchIn=title&" +
      `pageSize=${loadSize}&` + // page size will increase on click
      `page=$${pageNo}&` + //page number
      "apiKey=14491607f8474e05acad3e1aec5278d2"; //my api key
    try {
      setPageSize(loadSize);
      setNews([]); //empty it if searh for new news
      const response = await axios.get(url);
      if (response.data.articles) setNews(response.data.articles);
      return "data is send";
    } catch (error) {
      console.log("API error");
      console.error(error);
    }
  };

  //Retrieve News API for page number
  const retrivePageNews = async (pageNumber) => {
    var url =
      "https://newsapi.org/v2/everything?" +
      `q=${searchValue}&` +
      "searchIn=title&" +
      `pageSize=${pageSize}&` + // page size will increase on click
      `page=$${pageNumber}&` + //page number
      "apiKey=14491607f8474e05acad3e1aec5278d2"; //my api key
    try {
      setpageNo(pageNumber);
      setNews([]); //empty it if searh for new news
      const response = await axios.get(url);
      if (response.data.articles) setNews(response.data.articles);
      return "data is send";
    } catch (error) {
      console.log("API error");
      console.error(error);
    }
  };

  // remove specific fave list
  const removeFave = async (id) => {
    const newFaveList = favNews.filter((favenews) => {
      return favenews.id !== id;
    });
    console.log(newFaveList);
    setFavNews(newFaveList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newFaveList));
  };
  
  //check if favNews has any changes
  useEffect(() => {
    if (favNews) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favNews));
    } 
  }, [favNews]);

  const value = {
    LOCAL_STORAGE_KEY,
    LOCAL_STORAGE_KEY_AUTH,
    LOCAL_STORAGE_KEY_USER,
    userName,
    news,
    favNews,
    isLoggedIn,
    pageSize,
    pageNo,
    setIsLoggedIn,
    setFavNews,
    retriveNews,
    removeFave,
    setPageSize,
    retriveLoadMoreNews,
    retrivePageNews
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
