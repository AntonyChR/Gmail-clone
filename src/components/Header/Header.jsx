import { signOut } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase/config';
import Icon from '../Icon';
import { logout, selectUser } from '../../redux/userSlice';
import { MenuIcon, StyledHeader, StyledImg, SearchBar, AcountMenu } from './Header.styled';

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const quit = () => {
        signOut(auth).then(()=>{
            dispatch(logout())
        })
    }

    return (
        <StyledHeader>
            <MenuIcon>
                <span className='material-icons menu-icon'>menu</span>
                <StyledImg
                    src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
                    alt='gmail icon'
                />
            </MenuIcon>

            <SearchBar>
                <span className='material-icons search-icon'>search</span>
                <input type='text' placeholder='Search mail' />
                <span className='material-icons search-icon'>arrow_drop_down</span>

            </SearchBar>
            <AcountMenu>
                <span className='material-icons apps-icon'>apps</span>
                <span className='material-icons notifications-icon'>notifications</span>
                <img src={user?.photoUrl}/>
                <Icon click = {quit} icon='logout' pointer={true}/>

            </AcountMenu>
        </StyledHeader>
    );
};

export default Header;
