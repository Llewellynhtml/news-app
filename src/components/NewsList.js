import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=9a45d8a7572c4bbeb1cd2e1bd99ae90c"
      );
      console.log(response);
      setNews(response.data.articles);
      console.log(news[0].author);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  return (
    <div className="newslist">
      <ul>
        <h1>{news[0].author}</h1>
       {news.map (articles.index) =>

      <li></li>
       
       
       
       



      </ul>
    </div>
  );
};

export default NewsList;
