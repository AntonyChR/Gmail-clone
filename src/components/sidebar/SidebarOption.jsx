import { StyledSidebarOption } from './SidebarOption.styled';

const SidebarOption = ({ icon, title, number, selected =false, click=()=>{}}) => {
    return (
        <StyledSidebarOption onClick={()=>click()} selected={selected}>
            <span className='material-icons'>{icon}</span>
            <h3>{title}</h3>
            <p>{number}</p>
        </StyledSidebarOption>
    );
};

export default SidebarOption;
