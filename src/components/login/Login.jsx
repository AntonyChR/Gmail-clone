import { auth, authProvider } from '../../firebase/config';
import {signInWithPopup} from 'firebase/auth';
import { Container, Img, LoginButton, StyledLogin } from './Login.styled';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, authProvider)
            .then(({user}) => {

                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch((error)=> alert(error.message));
    }
    return (
        <StyledLogin>
            <Container>
                <Img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail icon'/>
                <LoginButton onClick={signIn}>
                    <h1>LOGIN</h1>
                </LoginButton>
            </Container>
        </StyledLogin>
    );
};

export default Login;
