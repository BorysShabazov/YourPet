import NewsCard from "../../components/NewsCard/NewsCard";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";

const NewsPage = () => {
  return (
    <Container>
      <Title className="mt-[40px] md:mt-[80px]">News</Title>
      <Search className="mt-[24px] md:mt-[40px]" />
      <div className="mt-[24px] md:mt-[40px] xl:mt-[60px] flex flex-wrap gap-[24px] md:gap-x-[32px] md:gap-y-[24px] xl:gap-x-[31px] xl:gap-y-[24px]">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </Container>
  );
};
export default NewsPage;
