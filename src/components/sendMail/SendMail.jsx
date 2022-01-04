
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from '../../helpers/sendEmail';
import Icon from '../Icon';
import { closeOpenMessage } from '../../redux/mailSlice';
import {
    Form,
    Message,
    SendButton,
    SendMailError,
    SendMailHeader,
    SendMailOptions,
    StyledSendMail,
} from './SendMail.styled';
import { selectUser} from '../../redux/userSlice';

const SendMail = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const user = useSelector(selectUser);
    const dispatch = useDispatch(closeOpenMessage);
    const onSubmit = (data) => {
        
        sendEmail({...data,from:user.email}).then(()=>dispatch(closeOpenMessage()));
    };
    return (
        <StyledSendMail>
            <SendMailHeader>
                <h3>New Message</h3>
                <Icon
                    click={() => dispatch(closeOpenMessage())}
                    pointer={true}
                    icon='close'
                />
            </SendMailHeader>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <input
                    autoComplete='off'
                    name='to'
                    placeholder='To'
                    type='email'
                    ref={register({ required: true })}
                />
                {errors.to && <SendMailError>To is required!!</SendMailError>}
                <input
                    autoComplete='off'
                    name='subject'
                    placeholder='Subject'
                    type='text'
                    ref={register({ required: true })}
                />
                {errors.subject && (
                    <SendMailError>Subject is required!!</SendMailError>
                )}
                <Message
                    autoComplete='off'
                    name='message'
                    placeholder='Message...'
                    type='text'
                    ref={register({ required: true })}
                />
                {errors.message && (
                    <SendMailError>Message is required!!</SendMailError>
                )}
                <SendMailOptions>
                    <SendButton type='submit'>Send</SendButton>
                </SendMailOptions>
            </Form>
        </StyledSendMail>
    );
};

export default SendMail;
