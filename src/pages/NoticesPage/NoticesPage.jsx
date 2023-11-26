
import { Outlet, useParams } from "react-router";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { AddPetButton } from "../../components/Notices/AddPetButton";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../Redux/notices/noticesOperation";
import { getNotices } from "../../Redux/notices/noticesSelectors";
import PetCard from "../../components/PetCard/PetCard";
import PetCardList from "../../components/PetCard/PetCardList";

const catNameArr=['sell','lost', 'found','in-good-hands', 'favorite', 'own' ]


const NoticesPage = () => {
    const dispatch = useDispatch();
    const {categoryName} = useParams();
    // useEffect(() => {
    //     dispatch(fetchNotices(categoryName))
    // }, dispatch)
    const noticies = useSelector(getNotices);

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
            <PetCardList pets={noticies}/>
            
        </Container>
        
    )
};

export default NoticesPage;
