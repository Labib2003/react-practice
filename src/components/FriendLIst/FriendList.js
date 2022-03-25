import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import SpecialFriend from '../SpecialFriend/SpecialFriend';
import './FriendList.css'

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    let [specialFriend, setSpecialFriend] = useState([]);

    const [specialFriendStyle, setSpecialFriendStyle] = useState({ display: 'none' });

    const showDetails = (id) => {
        specialFriend = friends.find(friend => friend.id === id);
        setSpecialFriend(specialFriend);
        if (specialFriend !== []) {
            setSpecialFriendStyle({ display: 'block' });
        }
    }



    return (
        <div>
            <h3>Number of friends: {friends.length}</h3>
            <div className="friend-grid">
                {
                    friends.map(friend => <Friend key={friend.id} showDetails={showDetails} friend={friend}></Friend>)
                }
            </div>
            <div style={specialFriendStyle} className='friend-details'>
                <SpecialFriend specialFriend={specialFriend}></SpecialFriend>
            </div>
        </div>
    );
};

export default FriendList;