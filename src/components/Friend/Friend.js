import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const {username, email, address, id} = props.friend;
    const {showDetails} = props;
    return (
        <div className='friend'>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Address: {address.suite}, {address.street}, {address.city}</p>
            <button className='more-details-btn' onClick={() => showDetails(id)}>More details</button>
        </div>
    );
};

export default Friend;