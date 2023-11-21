import { Link } from './Link';
import { useSelector } from 'react-redux';


const NoticesCategoriesNav = ({ className = '' }) => {
    const isLogin = useSelector(state => state.auth.token)

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Link to='/notices/sell' >sell</Link>
            <Link to='/notices/lost'>lost</Link>
            <Link to='/notices/found'>found</Link>
            <Link to='/notices/in-good-hands'>in good hands</Link>
            
            {!!isLogin && <>
            <Link to='/notices/favorite'>favorite ads</Link>
            <Link to='/notices/own'>my ads</Link></>}
        </div>
    )
}
 
export default NoticesCategoriesNav

