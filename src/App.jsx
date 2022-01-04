import Header from './components/Header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StyledBody } from './Body.styled';
import Email from './components/email/Email';
import EmailList from './components/mail-list/EmailList';
import SendMail from './components/sendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './redux/mailSlice';
import { login, selectUser } from './redux/userSlice';
import Login from './components/login/Login';
import { auth } from './firebase/config';
import { useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        });
    }, []);

    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className='App'>
                    <Header />
                    <StyledBody>
                        <Sidebar />

                        <Switch>
                            <Route exact path='/mail'>
                                <Email />
                            </Route>

                            <Route exact path='/*'>
                                <EmailList />
                            </Route>
                        </Switch>
                    </StyledBody>
                    {sendMessageIsOpen && <SendMail />}
                </div>
            )}
        </Router>
    );
}

export default App;
