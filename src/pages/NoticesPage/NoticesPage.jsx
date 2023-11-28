
import { Outlet, useParams } from "react-router";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav";
import { Search } from "../../components/Notices/Search";
import { Container, Title } from "../../ui";
import { AddPetButton } from "../../components/Notices/AddPetButton";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotices } from "../../Redux/notices/noticesOperation";
import { getNotices } from "../../Redux/notices/noticesSelectors";
import PetCardList from "../../components/PetCard/PetCardList";
import { Pagination } from "../../components/Pagination/Pagination";

const catNameArr=['sell','lost', 'found','in-good-hands', 'favorite', 'own' ]


const NoticesPage = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const {categoryName} = useParams();
    useEffect(() => {
        dispatch(fetchNotices({category:categoryName, query}))
    }, [categoryName, dispatch,query])
    const noticies = useSelector(getNotices);


    const getQuery = (value) => {
        setQuery(value);
        dispatch(fetchNotices({category:categoryName, query}))
    }

    const refreshClear = () => {
        setQuery('')
        dispatch(fetchNotices(categoryName))
    }


    return (
        <Container >{
            catNameArr.includes(categoryName) ? (<div>
                <Title className="mt-[40px] md:mt-[80px]">Find your favorite pet</Title>
                <Search getQuery={getQuery} refreshClear={refreshClear} className="mt-[24px] md:mt-[40px]" />
                <div className="md:flex justify-between">
                     <NoticesCategoriesNav className="mt-[20px] md:mt-[40px]" />
                <AddPetButton />
                </div>
                </div>):
            (<NotFoundPage/>)
        }
            <Outlet/>
            <PetCardList pets={noticies} />
            {/* <Pagination/> */}
            
        </Container>
        
    )
};

export default NoticesPage;
