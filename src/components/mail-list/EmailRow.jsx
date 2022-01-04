import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectMail } from '../../redux/mailSlice';
import {
    Time,
    Message,
    Options,
    StyledEmailRow,
    Title,
    Description,
} from './EmailRow.styled';

const EmailRow = ({ title, subject, description, id, time }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                title,
                subject,
                description,
                id,
                time,
            })
        );

        history.push('/mail');
    };

    return (
        <StyledEmailRow>
            <Options>
                <input type='checkbox'></input>
                <span className='material-icons'>star_border</span>
                <span className='material-icons'>label_important</span>
            </Options>

            <Title   onClick={openMail}>{title}</Title>
            <Message onClick={openMail}>
                <h4>
                    {subject} <Description>- {description}</Description>
                </h4>
            </Message>
            <Time>{time}</Time>
        </StyledEmailRow>
    );
};

export default EmailRow;
