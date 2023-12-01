import { Link } from './Link';
import { useSelector } from 'react-redux';


const NoticesCategoriesNav = ({ className = '', onClick }) => {
    const isLogin = useSelector(state => state.auth.token)

    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            <Link to='/notices/sell' onClick={onClick} >sell</Link>
            <Link to='/notices/lost' onClick={onClick}>lost</Link>
            <Link to='/notices/found' onClick={onClick}>found</Link>
            <Link to='/notices/good-hands' onClick={onClick}>in good hands</Link>
            
            {!!isLogin && <>
            <Link to='/notices/favorite' onClick={onClick}>favorite ads</Link>
            <Link to='/notices/own' onClick={onClick}>my ads</Link></>}
        </div>
    )
}
 
export default NoticesCategoriesNav

