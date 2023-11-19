import { NavLink, Outlet } from 'react-router-dom';
import { Link } from './Link';

const NoticesCategoriesNav = ({className=''}) => {
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Link to='/notices/sell' >sell</Link>
            <Link to='/notices/lost'>lost</Link>
            <Link to='/notices/found'>found</Link>
            <Link to='/notices/in-good-hands'>in-good-hands</Link>
            <Link to='/notices/favorite'>favorite</Link>
            <Link to='/notices/own'>own</Link>
        </div>
    )
}
 
export default NoticesCategoriesNav

// "Компонент рендерить блок навіції з маршрутами:
//   - /notices/sell -  відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з продажу
//   - /notices/lost-found - відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з знайшов/шукаю
//     - /notices/in - good - hands - відкриває на сторінці компонент NoticesCategoryList зі списком оголошеннь з віддам в добрі руки"
// "Компонент рендерить блок навігації з маршрутами:
//   - /notices/favorite -  відкриває на сторінці компонент NoticesCategoryList зі списком оголошень, доданих до обраних
//   - /notices/own - відкриває на сторінці компонент NoticesCategoryList зі списком оголошень, створених користувачем"