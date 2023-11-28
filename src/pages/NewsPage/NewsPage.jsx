import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { getNews, getNewsByQuery } from "../../assets/getNews";
import { Outlet } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";


const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState('');
  
  const limit = 6;  
  
  useEffect(() => {
    fetchNews();
  }, [])

const fetchNews = async () => {
      try {
        const data = await getNews()
        setNews(data.data)
        setTotal(prevTotal => {
          if (data.total !== prevTotal) {
            setTotalPages(Math.ceil(data.total / limit));
          }
          return data.total;
        })
      
      }
      catch (err) { console.log(err); }
  };
  
  const dataQuery = async (value, page = 1) => {
    try {
      const data = await getNewsByQuery(value,page)
    setNews(data.data)
    setTotal(() => {
      setTotalPages(Math.ceil(data.total / limit))
      return data.total
    })
      setQuery(value);
    }
    catch (error) {
      console.log(error.message);
    }
    
    
   } ;
  
  const handleClickPage = (target) => {
    dataQuery(query, target.selected+1 )
    console.log(target.selected+1);
  }

  const refreshClear = () => {
     fetchNews()
  }


  return (
    <Container className="pb-[117px] md:pb-[126px]">
      <Title className="mt-[40px] md:mt-[80px]">News</Title>
      <Search getQuery={dataQuery} refreshClear={refreshClear} className="mt-[24px] md:mt-[40px]" />
      <Outlet/>
      <ul className="mt-[24px] md:mt-[40px] xl:mt-[60px] flex flex-wrap gap-[24px] md:gap-x-[32px] md:gap-y-[24px] xl:gap-x-[31px] xl:gap-y-[24px]">
        {news.map(({ _id, date, imgUrl, text, title, url }) => (
          <li key={_id}><NewsCard date={date} imgUrl={imgUrl} text={text} title={title} url={url}/></li>
        ))}
      </ul>
      <Pagination handleClickPage={handleClickPage } totalPages={totalPages} />
    </Container>
  );
};
export default NewsPage;
