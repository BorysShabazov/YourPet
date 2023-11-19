
import { Outlet } from "react-router";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { AddPetButton } from "../../components/Notices/AddPetButton";


const NoticesPage = () => {
    return (
        <Container >
            <Title className="mt-[40px] md:mt-[80px]">Find your favorite pet</Title>
            <Search className="mt-[24px] md:mt-[40px]"/>
            <NoticesCategoriesNav className="mt-[20px] md:mt-[40px]" />
            <AddPetButton/>
            
        </Container>
        
    )
};

export default NoticesPage;
