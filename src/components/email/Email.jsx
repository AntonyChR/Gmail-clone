import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Icon from '../Icon';
import { selectOpenMail } from '../../redux/mailSlice';
import {
    EmailBody,
    EmailHeader,
    EmailMessage,
    StyledEmail,
    Tools,
} from './Email.styled';

const Email = () => {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    if (!selectedMail) history.push('/');
    return (
        <StyledEmail>
            <Tools>
                <div className='tools-left'>
                    <Icon
                        click={() => history.push('/')}
                        pointer={true}
                        icon='arrow_back'
                    />
                    <Icon pointer={true} icon='move_to_inbox' />
                    <Icon pointer={true} icon='report_gmailerrorred' />
                    <Icon pointer={true} icon='delete' />
                    <Icon pointer={true} icon='email' />
                    <Icon pointer={true} icon='watch_later' />
                    <Icon pointer={true} icon='check_circle' />
                    <Icon pointer={true} icon='label_important' />
                    <Icon pointer={true} icon='more_vert' />
                </div>
                <div className='tools-right'>
                    <Icon pointer={true} icon='unfold_more' />
                    <Icon pointer={true} icon='print' />
                    <Icon pointer={true} icon='logout' />
                </div>
            </Tools>

            <EmailBody>
                <EmailHeader>
                    <h2>{selectedMail?.subject}</h2>
                    <Icon color='#e8ab02' icon='label_important' />
                    <p>{selectedMail?.title}</p>
                    <p className='time'>{selectedMail?.time}</p>
                </EmailHeader>
                <EmailMessage>
                    <p>{selectedMail?.description}</p>
                </EmailMessage>
            </EmailBody>
        </StyledEmail>
    );
};

export default Email;
