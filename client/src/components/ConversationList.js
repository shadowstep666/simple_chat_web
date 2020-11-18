import React from 'react';

export default function ConversationList(props) {
    return (
        <div className="conversation-list">
            <div className="chat-avatar">
            <img src={props.avatar} alt="" />
            </div>
            <div className="user-chat-content">
            <div className="ctext-wrap">
                <div className="ctext-wrap-content">
                <p className="mb-0">
                    {props.message}
                </p>
                <p className="chat-time mb-0"><i className="ri-time-line align-middle" /> <span className="align-middle">{props.time}</span></p>
                </div>
                <div className="dropdown align-self-start">
                <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ri-more-2-fill" />
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Delete <i className="ri-delete-bin-line float-right text-muted" /></a>
                </div>
                </div>
            </div>
            <div className="conversation-name">{props.name}</div>
            </div>
        </div>
    )
}