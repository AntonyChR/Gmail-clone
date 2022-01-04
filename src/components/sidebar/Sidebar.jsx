import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { openSendMessage } from '../../redux/mailSlice';
import { ComposeButton, StyledSidebar } from './Sidebar.styled';
import SidebarOption from './SidebarOption';
import { StyledSidebarFooter } from './SidebarOption.styled';

export const Sidebar = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    return (
        <StyledSidebar>
            <ComposeButton onClick={()=>dispatch(openSendMessage())}>
                <span className='material-icons'>add</span>
                Compose
            </ComposeButton>

            <SidebarOption click={()=>history.push('/')} icon={'inbox'} title={'Inbox'} number={4} selected={true}/>
            <SidebarOption icon={'star'} title={'Starred'} number={4}/>
            <SidebarOption icon={'schedule'} title={'Snoozed'} number={4}/>
            <SidebarOption icon={'label_important'} title={'Important'} number={4}/>
            <SidebarOption click={()=>history.push('/sent')} icon={'send'} title={'Sent'} number={4}/>
            <SidebarOption icon={'note'} title={'Drafts'} number={4}/>
            <SidebarOption icon={'keyboard_arrow_down'} title={'More'} number={4}/>

            <StyledSidebarFooter>
                <div className="footer-icons">
                    <span className="material-icons">person</span>
                    <span className="material-icons">duo</span>
                    <span className="material-icons">call</span>
                </div>
            </StyledSidebarFooter>

        </StyledSidebar>
    );
};
