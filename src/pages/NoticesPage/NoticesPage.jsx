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
import { getRefresh } from "../../Redux/auth/auth-selectors";

const catNameArr = [
  "sell",
  "lost",
  "found",
  "good-hands",
  "favorite",
  "own",
];

const NoticesPage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();
    const noticies = useSelector(getNotices);
    const isLoading = useSelector(getRefresh)

  const { categoryName } = useParams();
  const limit = 6;

  useEffect(() => {
    dispatch(fetchNotices({ category: categoryName, query, page, limit }));
    setTotalPages(Math.ceil(noticies.length / limit));
  }, [categoryName, dispatch, query, page, limit, noticies.length]);

  const getQuery = (value) => {
    setQuery(value);
    dispatch(fetchNotices({ category: categoryName, query }));
  };

  const refreshClear = () => {
    setQuery("");
  };

  return (
    <Container className="pb-[117px] md:pb-[126px]">
      {catNameArr.includes(categoryName) ? (
        <div>
          <Title className="mt-[40px] md:mt-[80px]">
            Find your favorite pet
          </Title>
          <Search
            getQuery={getQuery}
            refreshClear={refreshClear}
            className="mt-[24px] md:mt-[40px]"
          />
          <div className="md:flex justify-between">
            <NoticesCategoriesNav className="mt-[20px] md:mt-[40px]" />
            <AddPetButton />
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
          <Outlet />
          {noticies.length>0 ?<PetCardList pets={noticies} />: catNameArr.includes(categoryName)&&isLoading&&(<div className="mx-auto mt-10 w-fit text-xl">There are no ads in this category and search query... Try more!</div>)}
      
      <Pagination totalPages={totalPages} />
    </Container>
  );
};

export default NoticesPage;
