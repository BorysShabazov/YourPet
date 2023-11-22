
import { Outlet, useParams } from "react-router";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { AddPetButton } from "../../components/Notices/AddPetButton";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const catNameArr=['sell','lost', 'found','in-good-hands', 'favorite', 'own' ]


const NoticesPage = () => {
    const {categoryName} = useParams();
    

    return (
        <Container >{
            catNameArr.includes(categoryName) ? (<div>
                <Title className="mt-[40px] md:mt-[80px]">Find your favorite pet</Title>
                <Search className="mt-[24px] md:mt-[40px]" />
                <div className="md:flex justify-between">
                     <NoticesCategoriesNav className="mt-[20px] md:mt-[40px]" />
                <AddPetButton />
                </div>
                </div>):
            (<NotFoundPage/>)
            }
            
        </Container>
        
    )
};

export default NoticesPage;
