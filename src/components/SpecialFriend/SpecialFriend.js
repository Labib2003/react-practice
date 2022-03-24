import React from 'react';

const SpecialFriend = (props) => {
    const { name, email, address, phone, website } = props.specialFriend;
    return (
        <div id='special-friend'>
            <h4>More details</h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address?.suite} {address?.street} {address?.city}</p>
            <p>Phone: {phone}</p>
            <p>Website: <a href={website}>{website}</a></p>
        </div>
    );
};

export default SpecialFriend;