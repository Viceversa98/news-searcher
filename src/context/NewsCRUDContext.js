import { createContext, useState, useContext } from "react";
import axios from "axios";

const newsCrudContext = createContext();

export function NewsCrudContextProvider({ children }) {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [favNews, setFavNews] = useState([]);
  // console.log("this is search"+searchTerm);

  var url =
    "https://newsapi.org/v2/everything?" +
    `q=${searchResult}&` +
    "from=2023-04-03&" +
    "sortBy=popularity&" +
    "apiKey=14491607f8474e05acad3e1aec5278d2";

  //Retrieve News
  const retriveNews = async () => {
    const response = await axios.get(url);
    if (response.data.articles) setNews(response.data.articles);
  };

  //Search Function

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    setSearchResult(searchTerm);
    if (searchTerm !== "") {
      const newNewsList = news.filter((news) => {
        return Object.values(news)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newNewsList);
    } else {
      console.log(news);
      setSearchResult(news);
    }
  };

  const value = {
    news,
    searchTerm,
    searchResult,
    favNews,
    setFavNews,
    retriveNews,
    searchHandler,
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
