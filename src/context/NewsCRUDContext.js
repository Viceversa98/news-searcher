import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const [news, setNews] = useState([]);
  const [testnews, setTestNews] = useState([]);
  const [searchTerms, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [favNews, setFavNews] = useState([]);
  const LOCAL_KEY_2nd = "Jombeli";
  useEffect(() => {
    console.log(LOCAL_KEY_2nd);
    const getAllTest = JSON.parse(localStorage.getItem(LOCAL_KEY_2nd));
    setTestNews(getAllTest);
  },[]);

  // console.log("this is search"+searchTerm);
  var url =
    "https://newsapi.org/v2/everything?" +
    `q=${searchResult}&` +
    "from=2023-04-03&" +
    "sortBy=popularity&" +
    "apiKey=14491607f8474e05acad3e1aec5278d2";
  //Search Function

  const searchHandler = (searchTerm) => {
    try {
      setSearchResult(searchTerm);
      setSearchTerm(searchTerm);
    } catch (error) {
      console.log(error);
    }
  };

  //Retrieve News

  const retriveNews = async () => {
    try {
      console.log(url);
      const response = await axios.get(url);
      if (response.data.articles) setNews(response.data.articles);
    } catch (error) {
      console.log("API error");
      console.error(error);
    }
  };

  const value = {
    news,
    searchTerms,
    searchResult,
    favNews,
    LOCAL_KEY_2nd, // if api cannot catch
    testnews, // test
    setTestNews, //test
    setFavNews,
    searchHandler,
    retriveNews,
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
