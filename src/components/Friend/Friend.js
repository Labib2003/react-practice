import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const {username, email, id} = props.friend;
    const {showDetails} = props;
    return (
        <div className='friend'>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <button className='more-details-btn' onClick={() => showDetails(id)}>More details</button>
        </div>
    );
};

export default Friend;