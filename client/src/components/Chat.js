import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import SideBar from './SideBar';
import axios from 'axios';
import ContactCard from './ContactCard';
import ChatBox from './ChatBox';
import io from 'socket.io-client';
import { TabContext, useTab } from '../custom/tab';

let socket;

function Chat(props) {
    const [profile, setProfile] = useState()
    const [users, setUsers] = useState();
    const [tab, setTab] = useState("Contacts");
    const [user, setUser] = useState();
    const currentTab = useTab();

    function getProfile() {
        axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
            headers: { 'accessToken': localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`) } 
        }).then(function (response) {
            setProfile(response.data.user);
        })
    }

    function getListUsers() {
        axios.get(`${process.env.REACT_APP_API_URL}/users`, {
            headers: { 'accessToken': localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`) } 
        }).then(function (response) {
            response.data.users.forEach(user => {
                user.status = 'Offline';
            });
            setUsers(response.data.users);
        })
    }

    function getUserDetail(id) {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, {
            headers: { 'accessToken': localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`) } 
        }).then(function (response) {
            setUser(response.data.user);
        })
    }

    useEffect(() => {
        getProfile();
        getListUsers();
        socket = io(process.env.REACT_APP_APP_URL);
        socket.emit('online', { accessToken: localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`) });

        return () => {
            socket.emit('disconnet');
            socket.off();
        }
    }, [process.env.REACT_APP_APP_URL]);

    useEffect(() => {
        if (props.match.params.id) {
            getUserDetail(props.match.params.id);
        }
    }, [props.match.params.id])

    return(
        <TabContext.Provider value={tab}>
            <div className="layout-wrapper d-lg-flex">
                { profile && <SideBar avatar={profile.avatar}></SideBar> }
            <div className="chat-leftsidebar mr-lg-1">
                <div className="tab-content">
                    <div className="tab-pane" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                        { profile && <Profile avatar={profile.avatar} name={profile.name}></Profile> }
                    </div>
                    <div className="tab-pane active" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                        <div>
                            <div className="p-4 chat-message-list chat-group-list" data-simplebar>
                                <ul className="list-unstyled chat-list chat-user-list">
                                    {users && users.map((user) => {
                                        return <ContactCard key={user._id} name={user.name} avatar={user.avatar} status={user.status}
                                                id={user._id} socket={socket} selected={(user._id == props.match.params.id) ? true : false}>
                                            </ContactCard>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {(props.match.params.id && user && profile) ? 
                    <ChatBox receiver={user} socket={socket} sender={profile}></ChatBox> : null }
            </div>
        </TabContext.Provider>
    ) 
}

export default Chat