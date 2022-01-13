import { collection, onSnapshot, orderBy, query, where } from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/config';
import { selectUser } from '../../redux/userSlice';
import { List, Sections, Settings, StyledEmailList } from './EmailList.styled';
import EmailRow from './EmailRow';
import Section from './Section';

const EmailList = ({typelist}) => {
    const [emails, setEmails] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        const emailsRef = collection(db, 'emails');
        /* ,orderBy('timestamp', 'desc') */
        
        const q = query(emailsRef,  where('to', '==', user.email));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let newEmails = [];
            querySnapshot.forEach((doc) => {
                newEmails.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setEmails(newEmails);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <StyledEmailList>
            <Settings>
                <div className='settings-left'>
                    <input type='checkbox'></input>
                    <span className='material-icons'>arrow_drop_down</span>
                    <span className='material-icons'>redo</span>
                    <span className='material-icons'>more_vert</span>
                </div>
                <div className='settings-right'>
                    <span className='material-icons'>chevron_left</span>
                    <span className='material-icons'>chevron_right</span>
                    <span className='material-icons'>keyboard_hide</span>
                    <span className='material-icons'>settings</span>
                </div>
            </Settings>
            <Sections>
                <Section
                    icon='inbox'
                    title='Primary'
                    color='red'
                    selected={true}
                />
                <Section
                    icon='people_alt'
                    title='Social'
                    color='blue'
                    selected={false}
                />
                <Section
                    icon='sell'
                    title='Promotions'
                    color='green'
                    selected={false}
                />
            </Sections>

            <List>
                {emails.map((email) => (
                    <EmailRow
                        title={email.to}
                        id={email.id}
                        subject={email.subject}
                        description={email.message}
                        key={email.id}
                        time={new Date(
                            email.timestamp.seconds * 1000
                        ).toUTCString()}
                    />
                ))}
            </List>
        </StyledEmailList>
    );
};

export default EmailList;
