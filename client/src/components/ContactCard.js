import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactCard(props) {
    return (
        <li className={props.selected ? "active" : null}>
            <Link to={props.id}>
                <div className="media">
                    <div className="chat-user-img align-self-center mr-3">
                        <img src={props.avatar} className="rounded-circle avatar-xs" alt="" />
                    </div>
                    <div className="media-body overflow-hidden">
                        <h5 className="text-truncate font-size-15 mb-1">{props.name}</h5>
                        <p>{props.status}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}