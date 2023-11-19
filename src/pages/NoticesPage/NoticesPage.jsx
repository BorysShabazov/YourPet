
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";


const NoticesPage = () => {
    return (
        <Container className="px-[20px] md:px-[32px] xl:px-[10px]">
            <Title>Find your favorite pet</Title>
            <Search/>
            <NoticesCategoriesNav />
        </Container>
        
    )
};

export default NoticesPage;
