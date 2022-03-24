import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './FriendList.css'

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    const showDetails = (id) => {
        const specialFriend = friends.find(friend => friend.id === id);
        console.log(specialFriend);
        return specialFriend;
    }

    return (
        <div>
            <h3>Number of friends: {friends.length}</h3>
            <div className="friend-grid">
                {
                    friends.map(friend => <Friend key={friend.id} showDetails={showDetails} friend={friend}></Friend>)
                }
            </div>
            <div className='friend-details'>
                Details
            </div>
        </div>
    );
};

export default FriendList;