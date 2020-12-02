import React from 'react';

export default function Profile(props) {
    return (
        <div>
            <div className="px-4 pt-4">
                <h4 className="mb-0">My Profile</h4>
            </div>
            <div className="text-center p-4 border-bottom">
                <div className="mb-4">
                <img src={props.avatar} className="rounded-circle avatar-lg img-thumbnail" alt="" />
                </div>
                <h5 className="font-size-16 mb-1 text-truncate">{props.name}</h5>
            </div>            
        </div>
    );
}
