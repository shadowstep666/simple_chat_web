import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ConversationList from './ConversationList';

export default function ChatBox(props) {   
    const chatRef = useRef();
    const [messages, setMessages] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let message = {
            content: chatRef.current.value,
            sender: props.sender._id,
            receiver: props.receiver._id,
        }
        setMessages(messages => [...messages, message]);
        props.socket.emit('message', { message: message });
        chatRef.current.value = null;
    }

    function getMessages(id) {
        axios.get(`${process.env.REACT_APP_API_URL}/messages/${id}`, {
            headers: { 'accessToken': localStorage.getItem(`${process.env.REACT_APP_PREFIX}-accessToken`) } 
        }).then(function (response) {
            if (response.data.messages) {
                setMessages(response.data.messages);
            } else {
                setMessages([]);
            }
        })
    }

    useEffect(() => {
        getMessages(props.receiver._id);
    }, [props.receiver]);

    useEffect(() => {
        props.socket.on('new-message', (args) => {
            console.log(args);
            // args.forEach(arg => {
            //     if (arg.message.sender === props.receiver._id && arg.message.receiver === props.sender._id) {
            //         setMessages(messages => [...messages, arg.message]);
            //     }
            // });
        });
    }, [messages]);

    return (
        <div className="user-chat w-100">
            <div className="d-lg-flex">
            {/* start chat conversation section */}
            <div className="w-100">
                <div className="p-3 p-lg-4 border-bottom">
                <div className="row align-items-center">
                    <div className="col-sm-4 col-8">
                    <div className="media align-items-center" style={{ float: "left"}}>
                        <div className="d-block d-lg-none mr-2">
                        <a href="#" className="user-chat-remove text-muted font-size-16 p-2"><i className="ri-arrow-left-s-line" /></a>
                        </div>
                        <div className="mr-3">
                        <img src={props.receiver.avatar} className="rounded-circle avatar-xs" alt="" />
                        </div>
                        <div className="media-body overflow-hidden">
                        <h5 className="font-size-16 mb-0 text-truncate">
                            <a href="#" className="text-reset user-profile-show">{props.receiver.name}</a> 
                        </h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* end chat user head */}
                {/* start chat conversation */}
                <div className="chat-conversation p-3 p-lg-4" data-simplebar="init">
                <ul className="list-unstyled mb-0">
                    {messages && messages.map((message ,pos) => {
                        console.log(message);
                        if (message.sender === props.sender._id) {
                            return <ConversationList key={pos} className="left" user={props.sender} message={message.content}></ConversationList>
                        }
                        return <ConversationList key={pos} className="right" user={props.receiver} message={message.content}></ConversationList>
                    })}
                </ul>
                </div>
                {/* end chat conversation end */}
                {/* start chat input section */}
                <div className="p-3 p-lg-4 border-top mb-0">
                <div className="row no-gutters">
                    <div className="col">
                    <div>
                        <input type="text" className="form-control form-control-lg bg-light border-light" placeholder="Enter Message..." ref={chatRef}/>
                    </div>
                    </div>
                    <div className="col-auto">
                    <div className="chat-input-links ml-md-2">
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                            <button type="button" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect" data-toggle="tooltip" data-placement="top" title="Emoji">
                            <i className="ri-emotion-happy-line" />
                            </button>
                        </li>
                        <li className="list-inline-item">
                            <button onClick={handleSubmit} className="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light">
                                <i className="ri-send-plane-2-fill" />
                            </button>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                {/* end chat input section */}
            </div>
            {/* end chat conversation section */}
            </div>
        </div>
    )
}