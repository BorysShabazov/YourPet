import { Outlet, useParams } from 'react-router';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav';
import { Search } from '../../components/Notices/Search';
import { Container, Title } from '../../ui';
import { AddPetButton } from '../../components/Notices/AddPetButton';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotices } from '../../Redux/notices/noticesOperation';
import { getNotices, getTotal } from '../../Redux/notices/noticesSelectors';
import PetCardList from '../../components/PetCard/PetCardList';
import { Pagination } from '../../components/Pagination/Pagination';
import { getRefresh } from '../../Redux/auth/auth-selectors';

const catNameArr = ['sell', 'lost', 'found', 'good-hands', 'favorite', 'own'];
const limit = 4;

const NoticesPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoadng] = useState(false);

  const dispatch = useDispatch();
  const noticies = useSelector(getNotices);
  // const isLoading = useSelector(getRefresh);
  const totalItems = useSelector(getTotal);

  const { categoryName } = useParams();

  useEffect(() => {
    if (query) {
      get(1, query);
      setPage(1);
    } else get(page);
  }, [page, query, categoryName]);

  useEffect(() => {
    setTotalPages(Math.ceil(totalItems / limit));
  }, [totalItems, categoryName]);

  function get(page, query) {
    setIsLoadng(true);
    dispatch(fetchNotices({ category: categoryName, query, page, limit }));
    setIsLoadng(false);
  }

  const getQuery = (value) => {
    setQuery(value);
  };

  const refreshClear = () => {
    setQuery('');
  };

  const handleClickPage = (target) => {
    setPage(target.selected + 1);
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
            <NoticesCategoriesNav
              className="mt-[20px] md:mt-[40px] "
              onClick={() => setPage(1)}
            />
            <AddPetButton />
          </div>
        </div>
      ) : (
        <NotFoundPage />
      )}
      <Outlet />
      {noticies.length > 0 ? (
        <PetCardList pets={noticies} />
      ) : (
        catNameArr.includes(categoryName) &&
        !isLoading && (
          <div className="mx-auto mt-10 w-fit text-xl">
            There are no ads in this category and search query... Try more!
          </div>
        )
      )}
      <Pagination
        totalPages={totalPages}
        handleClickPage={handleClickPage}
        currentPage={page - 1}
      />
    </Container>
  );
};

export default NoticesPage;
