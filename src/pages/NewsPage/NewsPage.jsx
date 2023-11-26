import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { getNews } from "../../assets/getNews";



const NewsPage = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews()
        setNews(data.data)
      }
      catch (err) { console.log(err); }
    };
    fetchNews();
    
  }, [])
  return (
    <Container>
      <Title className="mt-[40px] md:mt-[80px]">News</Title>
      <Search className="mt-[24px] md:mt-[40px]" />
      <ul className="mt-[24px] md:mt-[40px] xl:mt-[60px] flex flex-wrap gap-[24px] md:gap-x-[32px] md:gap-y-[24px] xl:gap-x-[31px] xl:gap-y-[24px]">
        {news.map(({ _id, date, imgUrl, text, title, url }) => (
          <li key={_id}><NewsCard date={date} imgUrl={imgUrl} text={text} title={title} url={url}/></li>
        ))}
      </ul>
    </Container>
  );
};
export default NewsPage;
