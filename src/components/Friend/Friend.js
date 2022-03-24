import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const {name, email, address} = props.friend;
    return (
        <div className='friend'>
            <p>Username: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address.suite}, {address.street}, {address.city}</p>
            <button>More details</button>
        </div>
    );
};

export default Friend;